const getSrcData = require('./get-data-from-src');
const saveDataFromSrc = require('./save-data-from-src');
const { compStateLogger } = require('../helpers');

module.exports = function (componentName, callback) {
	compStateLogger(componentName, `Getting src data...`);
	getSrcData(componentName, data => {
		compStateLogger(componentName, 'Got data from src, writing it to file');
		saveDataFromSrc(componentName, data, callback);
	});
};
