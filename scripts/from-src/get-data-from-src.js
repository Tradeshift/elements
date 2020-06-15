const readComponentSrcFile = require('./read-component-file');
const getProperties = require('./get-properties');
const { compStateLogger } = require('../helpers');

module.exports = (componentName, callback) => {
	readComponentSrcFile(componentName, (componentName, content) => {
		compStateLogger(componentName, `Getting properties from src`);
		const properties = getProperties(componentName, content);
		callback({
			componentName,
			properties
		});
	});
};
