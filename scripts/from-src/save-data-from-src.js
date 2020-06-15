const fs = require('fs');
const path = require('path');
const { compStateLogger } = require('../helpers');

module.exports = function savePropertiesFromSrc(componentName, outObject, callback) {
	const componentDirectory = path.join(process.cwd(), `./packages/components/${componentName}`);
	fs.mkdirSync(`${componentDirectory}/docs/src`, { recursive: true });
	compStateLogger(componentName, 'Write the properties.json from src file...');
	fs.writeFileSync(`${componentDirectory}/docs/src/properties.json`, JSON.stringify(outObject));
	compStateLogger(componentName, 'Wrote the properties.json from src file!');
	callback();
};
