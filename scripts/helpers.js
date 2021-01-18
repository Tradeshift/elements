const fs = require('fs');
const path = require('path');
const xa = require('xa');

const compStateLogger = function(componentName, text) {
	xa.custom(componentName.toUpperCase(), text, { titleColor: 'yellow', backgroundColor: '#212121' });
};

const getComponentNames = function() {
	const componentsPath = path.join(process.cwd(), '/packages/components');
	// const componentNames = fs.readdirSync(componentsPath);
	const componentNames = staticComponentNames();

	return componentNames.filter(file => !['.DS_Store', 'root', ''].includes(file));
};

module.exports = {
	compStateLogger,
	getComponentNames,
	constants: {
		componentsPath: './packages/components'
	}
};

function staticComponentNames() {
	return [
		'app-icon',
		'aside',
		'basic-table',
		'board',
		'button',
		'button-group',
		'card',
		'checkbox',
		'cover',
		'dialog',
		'document-card',
		'file-card',
		'file-size',
		'file-uploader-input',
		'header',
		'help-text',
		'icon',
		'input',
		'label',
		'list-item',
		'modal',
		'note',
		'pager',
		'progress-bar',
		'radio',
		'radio-group',
		// 'root',
		'search',
		'spinner',
		'status',
		'tab',
		'tabs',
		'tooltip',
		'typography'
	];
}
