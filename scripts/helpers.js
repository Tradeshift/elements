const fs = require('fs');
const path = require('path');
const xa = require('xa');

const componentsPath = './packages/components';

const compStateLogger = function (componentName, text) {
	if (process.env.DEBUG_MODE) {
		xa.custom(componentName.toUpperCase(), text, { titleColor: 'yellow', backgroundColor: '#212121' });
	}
};

const getComponentNames = function () {
	const componentsPath = path.join(process.cwd(), '/packages/components');
	const componentNames = fs.readdirSync(componentsPath);
	// const componentNames = staticComponentNames();

	return componentNames.filter(file => !['.DS_Store', 'root', ''].includes(file));
};

const capitalizeFirstLetter = function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const camelize = s => s.replace(/-./g, x => x[1].toUpperCase());

function readComponentFile(componentName, filePth) {
	const filePath = path.join(process.cwd(), `${componentsPath}/${componentName}${filePth}`);
	try {
		const fileContent = fs.readFileSync(filePath, 'utf8');
		return fileContent.length ? JSON.parse(fileContent) : [];
	} catch {
		compStateLogger(componentName, 'No file was found: ' + filePath);
		return [];
	}
}

module.exports = {
	compStateLogger,
	getComponentNames,
	capitalizeFirstLetter,
	camelize,
	readComponentFile,
	constants: {
		componentsPath
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
		'popover',
		'progress-bar',
		'radio',
		'radio-group',
		// 'root',
		'search',
		'select',
		'spinner',
		'status',
		'tab',
		'tabs',
		'tooltip',
		'typography'
	];
}
