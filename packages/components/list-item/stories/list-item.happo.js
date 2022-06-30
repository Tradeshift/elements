import '@tradeshift/elements.app-icon';
import '../lib/list-item.esm';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import icon from '../../../../static/icon.svg';

export default {
	title: 'ts-list-item'
};

export const Test = () => {
	const properties = {
		dir: { rtl: 'rtl' },
		disabled: { true: true },
		selected: { true: true },
		noWrap: { true: true },
		subtitle: { shortText: 'Subtitle sample text' },
		icon: { 'arrow-up': 'arrow-up' },
		iconSelected: { remove: 'remove' }
	};

	const options = {
		columns: 5,
		persistent_props: {
			title: 'Title sample text',
			subtitle: 'Subtitle sample text some long subtitle that should illustrate wrap',
			selectable: { true: true }
		}
	};
	return createHappoStories('list-item', properties, '', options);
};

export const TestWithSlot = () => {
	const properties = {
		dir: { rtl: 'rtl' },
		disabled: { true: true },
		selected: { true: true }
	};

	const options = {
		columns: 5,
		persistent_props: {
			title: 'Title sample text',
			subtitle: 'Subtitle sample text',
			selectable: { true: true }
		}
	};
	const slot = `<ts-app-icon slot="icon-left" src=${icon}></ts-app-icon>`;

	return createHappoStories('list-item', properties, slot, options);
};

TestWithSlot.story = {
	name: 'test with slot'
};
