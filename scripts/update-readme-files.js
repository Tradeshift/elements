const nodePlop = require('node-plop');
const updateDocSource = require('./from-src');
const { getComponentNames, compStateLogger } = require('./helpers');
const xa = require('xa');

(function() {
	getComponentNames().forEach(function(componentName) {
		console.log('___________________________________________________________________');
		compStateLogger(componentName, 'Start updating readme file...');
		updateDocSource(componentName, () => updateReadmeFiles(componentName));
	});
})();

function updateReadmeFiles(componentName) {
	const plop = nodePlop(`./plopfile.js`);
	const updateReadme = plop.getGenerator('readme');
	updateReadme.runActions({ name: componentName }).then(results => {
		if (results.failures.length) {
			xa.error('failed to update readme file for -> ' + componentName);
			xa.error('FAILURES: ' + results.failures);
		} else {
			compStateLogger(componentName, 'Updated readme file');
		}
	});
}
