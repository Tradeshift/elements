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
		type = 'any[]';
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

	// in React world for Web Components we should use "class" instead of "className"
	typesFileContent += `\t/** css class name. Use it instead of "className" */${EOL}`;
	typesFileContent += `\tclass?: string;${EOL}`;
	properties.forEach(property => {
		// HTML attributes can be one of two types: boolean or string
		const htmlType = property.Type.toLowerCase() === 'boolean' ? property.Type : 'string';
		typesFileContent += generatePropertyLine(property.Attribute, htmlType, property.Description);
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

const getReactTypesfileContent = (componentName, className) => {
	return `import React from "react";
import { TS${className}HTMLAttributes } from "@tradeshift/elements.${componentName}";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ts-${componentName}": TS${className}HTMLAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
`;
};

/**
 *  Read description from src/properties.json and generate d.ts files
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
		const reactTypesFilePath = `${componentDir}/types/react-types.d.ts`;
		await fs.mkdir(`${componentDir}/types/`, { recursive: true });
		const className = camelize(capitalizeFirstLetter(compName));
		let typesFileContent = '';

		// Generate interface for html attributes
		typesFileContent = getHtmlAttributeInterfaces(typesFileContent, className, properties);
		// Generate interface for js properties
		typesFileContent = getJsPropertiesInterfaces(typesFileContent, className, properties);

		const reactTypesContent = getReactTypesfileContent(compName, className);

		await fs.writeFile(typesFilePath, typesFileContent);
		await fs.writeFile(reactTypesFilePath, reactTypesContent);
		compStateLogger(compName, 'Added type definitions.');
	}
})();
