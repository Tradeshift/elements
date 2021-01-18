const readComponentSrcFile = require('./read-component-file');
const getProperties = require('./get-properties');
const getSlotsData = require('./get-slots-data');
const { compStateLogger } = require('../helpers');

module.exports = (componentName, callback) => {
	readComponentSrcFile(componentName, (componentName, content) => {
		compStateLogger(componentName, `Getting properties from src`);
		const properties = getProperties(componentName, content);
		const slots = getSlotsData(componentName, content);

		callback({
			componentName,
			properties,
			slots
		});
	});
};
