import { constants } from '@tradeshift/elements';
import componentMessages from './file-uploader-input';
export { default as selectors, classNames } from './selectors';

export const messages = {
	...constants.messages,
	...componentMessages
};

export const sizes = constants.sizes;
