import { html } from '@tradeshift/elements';

import remove from './remove.svg';
import download from './download.svg';
import info from './info.svg';
import arrowUp from './arrow-up.svg';
import ada from './ada.svg';
import closeClear from './close-clear.svg';

const icons = {
	remove,
	download,
	info,
	ada,
	'arrow-up': arrowUp,
	'close-clear': closeClear
};

// convert svg strings to html element
Object.keys(icons).forEach(iconName => {
	icons[iconName] = html([icons[iconName]]);
});

export default icons;
