import { helpers } from '@tradeshift/elements';

export const classNames = {
	ICON: 'icon',
	CONTENT: 'content',
	BUTTONS_WRAPPER: 'buttons-wrapper',
	CLOSE_BUTTON: 'close-button',
	NOTE_WRAPPER: 'note-wrapper'
};

const selectors = {
	...helpers.classNamesToSelector(classNames)
};

export default selectors;
