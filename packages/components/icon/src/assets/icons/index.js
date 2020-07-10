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
import arrowLeft from './arrow-left.svg';
import menuSwitch from './menu-switch.svg';
import settings from './settings.svg';
import support from './support.svg';
import alert from './alert.svg';
import question from './question.svg';

const icons = {
	remove,
	download,
	info,
	ada,
	checkmark,
	search,
	close,
	settings,
	support,
	alert,
	question,
	'arrow-up': arrowUp,
	'arrow-down-short': arrowDownShort,
	'arrow-left-skip': arrowLeftSkip,
	'arrow-left': arrowLeft,
	'close-clear': closeClear,
	'menu-switch': menuSwitch
};

// convert svg strings to html element
Object.keys(icons).forEach(iconName => {
	icons[iconName] = html([icons[iconName]]);
});

export default icons;
