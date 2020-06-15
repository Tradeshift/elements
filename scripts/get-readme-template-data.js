const fs = require('fs');
const path = require('path');
const tablemark = require('tablemark');
const componentsPath = `./packages/components`;
const { compStateLogger } = require('./helpers');

module.exports = function(componentName) {
	compStateLogger(componentName, 'Read src and readme properties.json files');
	const propsFromSrc = readComponentFile(componentName, '/docs/src/properties.json');
	const propsFromReadme = readComponentFile(componentName, '/docs/readme/properties.json');
	const mergedData = propsFromSrc.map(propertyData => {
		if (propsFromReadme) {
			const samePropFromReadme = propsFromReadme.filter(prop => prop.Property === propertyData.Property);
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
	return {
		properties: tablemark(mergedData)
	};
};

function readComponentFile(componentName, filePth) {
	const filePath = path.join(process.cwd(), `${componentsPath}/${componentName}${filePth}`);
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
