import { helpers } from '@tradeshift/elements';

export const classNames = {
	ICON_WRAPPER: 'icon-wrapper',
	CIRCULAR_BG: 'circular-background'
};

const selectors = {
	...helpers.classNamesToSelector(classNames)
};

export default selectors;
