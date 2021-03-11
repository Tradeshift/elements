module.exports = function(componentName, content) {
	const srcProperties = getSrcProperties(content);
	const defaults = getDefaultValues(content);
	const properties = eval(`(${srcProperties})`);
	return getPropertiesObject(properties, defaults, srcProperties);
};

function getSrcProperties(fileContent) {
	let properties = fileContent.split('properties() {return ');
	if (properties.length === 1) {
		return "{ '': '' }"; // fix tablemark error for empty object
	}
	properties = properties[1].split(';')[0];
	return properties;
}

function getPropertiesObject(properties, defaultValues, srcProperties) {
	const outObject = [];
	Object.keys(properties).forEach((propertyName, index) => {
		const propertyData = properties[propertyName];
		delete propertyData.reflect; // delete reflect since it's not useful information for readme
		outObject[index] = {
			Property: propertyName,
			Attribute: propertyData.attribute || propertyName,
			Type: getPropertyType(propertyData),
			Default: getDefaultValueOfProperty(propertyName, propertyData, defaultValues),
			Description: getPropertyDescription(propertyName, srcProperties)
		};
	});
	return outObject;
}

function getDefaultValues(fileContent) {
	const defaultsContent = fileContent.replace(/;/g, '').replace(/ /g, '');
	let defaults = defaultsContent.split('constructor(){super()')[1];
	if (defaults === undefined) {
		return;
	}
	defaults = defaults.split('}')[0];
	defaults = defaults.split('this.').map(data => data.split('='));
	defaults.shift();

	defaults = defaults.filter(item => item.length === 2);
	return defaults.reduce((o, k) => ((o[k[0]] = k[1]), o), {});
}

function getDefaultValueOfProperty(propertyName, propertyData, defaultValues = {}) {
	if (defaultValues[propertyName]) {
		return defaultValues[propertyName];
	} else if (propertyName === 'dir') {
		return 'ltr';
	} else if (getPropertyType(propertyData) === 'Boolean') {
		return 'false';
	}
	return '';
}

function getPropertyType(propertyData) {
	return propertyData && propertyData.type && propertyData.type.name;
}

function getPropertyDescription(propertyName, srcProperties) {
	const splittedProps = srcProperties.split(`: {`);
	let description = '';
	splittedProps.forEach(propString => {
		if (propString.indexOf(`*/${propertyName}`) > 0) {
			description = propString.split(`*/${propertyName}`)[0].split('/**')[1];
			// Multiline description would still have beginning *, which need to be replaced by the <br> to be shown
			// properly, on multi lines, in markdown table cell.
			description = description.replace(/\*/g, '<br>');
		}
	});
	return description;
}
