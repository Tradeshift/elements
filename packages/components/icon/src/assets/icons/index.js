import { html } from '@tradeshift/elements';

import remove from './remove.svg';
import download from './download.svg';
import info from './info.svg';
import arrowUp from './arrow-up.svg';
import ada from './ada.svg';
import search from './search.svg';
import closeClear from './close-clear.svg';
import close from './close.svg';
import checkmark from './checkmark.svg';
import arrowDownShort from './arrow-down-short.svg';
import arrowLeftSkip from './arrow-left-skip.svg';

const icons = {
	remove,
	download,
	info,
	ada,
	checkmark,
	search,
	close,
	'arrow-up': arrowUp,
	'arrow-down-short': arrowDownShort,
	'arrow-left-skip': arrowLeftSkip,
	'close-clear': closeClear
};

// convert svg strings to html element
Object.keys(icons).forEach(iconName => {
	icons[iconName] = html([icons[iconName]]);
});

export default icons;
