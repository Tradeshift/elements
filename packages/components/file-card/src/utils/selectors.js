import { helpers } from '@tradeshift/elements';

export const classNames = {
	FILE_CARD_WRAPPER: 'file-card-wrapper',
	ACTION_ICON_WRAPPER: 'action-icon-wrapper',
	ACTION_ICON: 'action-icon',
	REMOVE_ACTION: 'remove-action',
	REMOVE_ACTION_HOVERED: 'remove-action-hovered',
	REMOVE_ACTION_MESSAGE: 'remove-action-message',
	DOWNLOAD_ACTION: 'download-action',
	DOWNLOAD_ACTION_HOVERED: 'download-action-hovered',
	DOWNLOAD_ACTION_MESSAGE: 'download-action-message',
	TEXT_CONTENT: 'content',
	FILE_ICON_WRAPPER: 'file-icon-wrapper',
	FILE_ICON: 'file-icon',
	FILE_INFORMATION: 'file-information',
	ERROR_MESSAGE: 'error-message',
	PROGRESS_BAR: 'progress-bar'
};

const selectors = {
	...helpers.classNamesToSelector(classNames)
};

export default selectors;
