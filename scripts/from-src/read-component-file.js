const fs = require('fs');
const path = require('path');
const xa = require('xa');
const { compStateLogger } = require('../helpers');

module.exports = function(componentName, callback) {
	const componentsPath = path.join(__dirname, '../../packages/components');
	const componentDirectory = `${componentsPath}/${componentName}`;
	let data;
	try {
		data = fs.readFileSync(`${componentDirectory}/src/${componentName}.js`, 'utf8');
		compStateLogger(componentName, 'Read source file content');
	} catch (e) {
		xa.error('Error while reading source file content' + e);
		return;
	}
	const content = data.replace(/\n|\r/g, '').replace(/\t|\r/g, '');
	compStateLogger(componentName, 'Invoke callback with the src file content...');
	callback(componentName, content);
};
