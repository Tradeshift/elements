import { helpers } from '@tradeshift/elements';

export const classNames = {
	FILE_UPLOAD_WRAPPER: 'file-upload-wrapper',
	DROP_BOX: 'drop',
	DRAGGABLE_INFO: 'draggable-info',
	DRAG_OVER_STATE: 'dragover',
	FILE_UPLOAD_BUTTON: 'file-upload-button',
	HELP_TEXT: 'help-text'
};

const selectors = {
	INPUT: 'input',
	...helpers.classNamesToSelector(classNames)
};

export default selectors;
