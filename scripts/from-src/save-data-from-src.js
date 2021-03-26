const fs = require('fs');
const path = require('path');
const { compStateLogger } = require('../helpers');
const srcDataItems = ['properties', 'slots', 'events'];

module.exports = function savePropertiesFromSrc(componentName, srcData, callback) {
	const componentDirectory = path.join(process.cwd(), `./packages/components/${componentName}`);
	fs.mkdirSync(`${componentDirectory}/docs/src`, { recursive: true });
	srcDataItems.forEach(item => {
		compStateLogger(componentName, `Write the ${item}.json from src file...`);
		fs.writeFileSync(`${componentDirectory}/docs/src/${item}.json`, JSON.stringify(srcData[item]));
		compStateLogger(componentName, `Wrote the ${item}.json from src file!`);
	});
	callback();
};
