const path = require('path');
const { EOL } = require('os');
const fs = require('fs').promises;
const {
	getComponentNames,
	constants,
	compStateLogger,
	readComponentFile,
	capitalizeFirstLetter,
	camelize
} = require('./helpers');

const generatePropertyLine = (name, type, description) => {
	let result = '';
	if (description) {
		result += `\t/** ${description} */${EOL}`;
	}
	if (name.includes('-')) {
		// if name has dashes we put it in quotes
		name = `"${name}"`;
	}
	// Replace 'Array' with '[]'.
	// Better to use Array<T> but we don't have information about structure of array items now.
	if (type.toLowerCase() === 'array') {
		type = '[]';
	}
	result += `\t${name}?: ${type.toLowerCase()};${EOL}${EOL}`;
	return result;
};

const getExposedProperties = srcProps =>
	srcProps.filter(
		// filter out empty properties and internal properties
		property => property.Property && !property.Description.includes('INTERNAL')
	);

const getHtmlAttributeInterfaces = (typesFileContent, className, properties) => {
	typesFileContent += `export interface TS${className}HTMLAttributes {${EOL}`;
	properties.forEach(property => {
		typesFileContent += generatePropertyLine(property.Attribute, property.Type, property.Description);
	});
	typesFileContent += `}${EOL}${EOL}`;
	return typesFileContent;
};

const getJsPropertiesInterfaces = (typesFileContent, className, properties) => {
	typesFileContent += `export interface TS${className} {${EOL}`;
	properties.forEach(property => {
		typesFileContent += generatePropertyLine(property.Property, property.Type, property.Description);
	});

	typesFileContent += `}${EOL}`;
	return typesFileContent;
};
/**
 *  Read description from docs/properties and add it to the src file
 *  Single time script to update the src file with all available description in README files
 */
(async function () {
	// read the data from the src properties
	// get the component names
	const componentNames = getComponentNames();
	for (const compName of componentNames) {
		// get the component src properties
		compStateLogger(compName, 'Reading src/properties.json ...');
		const componentDir = path.join(process.cwd(), `${constants.componentsPath}/${compName}`);
		const srcProps = readComponentFile(compName, '/docs/src/properties.json');
		const properties = getExposedProperties(srcProps);

		const typesFilePath = `${componentDir}/types/${compName}.d.ts`;
		await fs.mkdir(`${componentDir}/types/`, { recursive: true });
		const className = camelize(capitalizeFirstLetter(compName));
		let typesFileContent = '';

		// Generate interface for html attributes
		typesFileContent = getHtmlAttributeInterfaces(typesFileContent, className, properties);
		// Generate interface for js properties
		typesFileContent = getJsPropertiesInterfaces(typesFileContent, className, properties);

		await fs.writeFile(typesFilePath, typesFileContent);
		compStateLogger(compName, 'Added type definitions.');
	}
})();
