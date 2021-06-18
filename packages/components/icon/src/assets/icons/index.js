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
import checkAlt from './check-alt.svg';
import arrowDownShort from './arrow-down-short.svg';
import arrowLeftSkip from './arrow-left-skip.svg';
import arrowLeft from './arrow-left.svg';
import menuSwitch from './menu-switch.svg';
import settings from './settings.svg';
import support from './support.svg';
import alert from './alert.svg';
import question from './question.svg';
import apps from './apps.svg';
import lock from './lock.svg';
import addToArchive from './add-to-archive.svg';
import discovery from './discovery.svg';
import edit from './edit.svg';
import deleteIcon from './delete.svg';
import checkbox from './checkbox.svg';
import checkboxOn from './checkbox-on.svg';
import allDocuments from './all-documents.svg';
import cancel from './cancel.svg';
import companySize from './company-size.svg';
import industry from './industry.svg';
import insertFromInventory from './insert-from-inventory.svg';
import network from './network.svg';
import pay from './pay.svg';
import preview from './preview.svg';
import send from './send.svg';
import associated from './associated.svg';

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
	apps,
	lock,
	discovery,
	edit,
	delete: deleteIcon,
	checkbox,
	cancel,
	industry,
	network,
	pay,
	preview,
	send,
	associated,
	'company-size': companySize,
	'insert-from-inventory': insertFromInventory,
	'all-documents': allDocuments,
	'check-alt': checkAlt,
	'arrow-up': arrowUp,
	'arrow-down-short': arrowDownShort,
	'arrow-left-skip': arrowLeftSkip,
	'arrow-left': arrowLeft,
	'close-clear': closeClear,
	'menu-switch': menuSwitch,
	'add-to-archive': addToArchive,
	'checkbox-on': checkboxOn
};

// convert svg strings to html element
Object.keys(icons).forEach(iconName => {
	icons[iconName] = html([icons[iconName]]);
});

export default icons;
