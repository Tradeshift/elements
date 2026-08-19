const _nodePlopModule = require('node-plop');
const nodePlop = _nodePlopModule.default || _nodePlopModule;
const updateDocSource = require('./from-src');
const { getComponentNames, compStateLogger } = require('./helpers');
const xa = require('xa');

(function () {
	getComponentNames().forEach(function (componentName) {
		compStateLogger(componentName, '___________________________________________________________________');
		compStateLogger(componentName, 'Start updating readme file...');
		updateDocSource(componentName, () => updateReadmeFiles(componentName));
	});
})();

async function updateReadmeFiles(componentName) {
	const plop = await nodePlop(`./plopfile.js`);
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
