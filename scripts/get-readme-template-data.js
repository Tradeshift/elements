const tablemark = require('tablemark');
const { compStateLogger, readComponentFile } = require('./helpers');

module.exports = function (componentName) {
	const slots = getSlots(componentName);
	const properties = getProperties(componentName);
	const events = getEvents(componentName);
	return {
		properties: properties.length && tablemark(properties),
		slots: slots.length && tablemark(slots),
		events: events.length && tablemark(events)
	};
};

function getSlots(componentName) {
	compStateLogger(componentName, 'Read src slots.json file...');
	return readComponentFile(componentName, '/docs/src/slots.json');
}

function getEvents(componentName) {
	compStateLogger(componentName, 'Read src events.json file...');
	return readComponentFile(componentName, '/docs/src/events.json');
}

function getProperties(componentName) {
	compStateLogger(componentName, 'Read src and readme properties.json files');
	const propsFromSrc = readComponentFile(componentName, '/docs/src/properties.json');
	const propsFromReadme = readComponentFile(componentName, '/docs/readme/properties.json');
	const mergedData = propsFromSrc.map(propertyData => {
		if (propsFromReadme) {
			const samePropFromReadme = propsFromReadme.filter(prop => prop.Property === propertyData.Property);
			// if the same prop existed in readme data
			if (samePropFromReadme.length > 1) {
				Object.keys(samePropFromReadme[0]).forEach(prop => {
					if (samePropFromReadme[prop] === '') {
						delete samePropFromReadme[prop];
					}
				});
				Object.assign(propertyData, samePropFromReadme);
			}
		}
		return propertyData;
	});
	return mergedData;
}
