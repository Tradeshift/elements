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

/**
 * @typedef {Object} JsProperties
 * @property {string} Property - Indicates whether the Courage component is present.
 * @property {string} Type - Indicates whether the Power component is present.
 * @property {string} [Description] - Indicates whether the Wisdom component is present.
 */

/**
 *
 * @param {string} name - name of property
 * @param {string} type - type of property
 * @param {string} [description] - description of property
 * @returns
 */
const generatePropertyLine = (name, type, description) => {
	let result = '';
	if (description) {
		result += `\t/** ${description} */${EOL}`;
	}
	if (name.includes('-')) {
		// if name has dashes we put it in quotes
		name = `"${name}"`;
	}
	result += `\t${name}?: ${type};${EOL}${EOL}`;
	return result;
};

const getExposedProperties = srcProps =>
	srcProps.filter(
		// filter out empty properties and internal properties
		property => property.Property && !property.Description.includes('INTERNAL')
	);

/**
 *
 * @param {string} typesFileContent
 * @param {string} className
 * @param {JsProperties[]} properties
 * @returns
 */
const getHtmlAttributeInterfaces = (typesFileContent, className, properties) => {
	typesFileContent += `export interface TS${className}HTMLAttributes {${EOL}`;

	// in React world for Web Components we should use "class" instead of "className"
	typesFileContent += `\t/** css class name. Use it instead of "className" */${EOL}`;
	typesFileContent += `\tclass?: string;${EOL}`;
	properties.forEach(property => {
		// HTML attributes can be one of two types: boolean or string
		const htmlType = htmlTypeToTypescriptType(property.Type);
		typesFileContent += generatePropertyLine(property.Attribute, htmlType, property.Description);
	});
	typesFileContent += `}${EOL}${EOL}`;
	return typesFileContent;
};

/**
 *
 * @param {string} htmlType
 * @returns {'string'|'boolean'|'true'|'false'}
 */
function htmlTypeToTypescriptType(htmlType) {
	switch (htmlType.toLowerCase()) {
		case 'boolean':
			return `boolean | 'true' | 'false'`;
		case 'number':
			// since React v16 it will cast to string any value, and for numbers it should be safe
			return 'number | string';
		default:
			return 'string';
	}
}

/**
 * converts types to typescript happy types
 * @param {string} type
 * @returns {string}
 */
function jsTypeToTypescriptType(type) {
	const lowered = type.toLowerCase();
	switch (lowered) {
		case 'object':
			return 'Record<string, unknown>';
		// Replace 'Array' with '[]'.
		// Better to use Array<T> but we don't have information about structure of array items now.
		case 'array':
			return 'any[]';
		case 'function':
			return 'Function';
		default:
			return lowered;
	}
}

/**
 *
 * @param {string} typesFileContent
 * @param {string} className
 * @param {JsProperties[]} properties
 * @returns {string}
 */
const getJsPropertiesInterfaces = (typesFileContent, className, properties) => {
	typesFileContent += `export interface TS${className} {${EOL}`;
	properties.forEach(property => {
		const tsType = jsTypeToTypescriptType(property.Type);
		typesFileContent += generatePropertyLine(property.Property, tsType, property.Description);
	});

	typesFileContent += `}${EOL}`;
	return typesFileContent;
};

/**
 *
 * @param {string} componentName
 * @param {string} className
 * @returns {string}
 */
const getReactTypesFileContent = (componentName, className) => {
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
(async () => {
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

		// Generate interface for html attributes
		const typesFileContent = getHtmlAttributeInterfaces('', className, properties);
		// Generate interface for js properties
		const withJsInterfacesTypesFileContent = getJsPropertiesInterfaces(typesFileContent, className, properties);

		const reactTypesContent = getReactTypesFileContent(compName, className);

		await fs.writeFile(typesFilePath, withJsInterfacesTypesFileContent);
		await fs.writeFile(reactTypesFilePath, reactTypesContent);
		compStateLogger(compName, 'Added type definitions.');
	}
})();
