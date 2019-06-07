import { constants } from '@tradeshift/elements';
import componentMessages from './file-uploader-input.yaml';
export { default as selectors, classNames } from './selectors';

export const messages = {
	...constants.messages,
	...componentMessages
};

export const slotNames = {
	PLACEHOLDER_TEXT: 'placeholder-text',
	BUTTON_TEXT: 'button-text',
	DROP_TEXT: 'drop-text'
};

export const customEventNames = {
	FILE_CHANGE: 'change'
};

export const sizes = constants.sizes;
