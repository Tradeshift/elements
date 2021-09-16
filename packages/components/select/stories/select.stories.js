import { html } from 'lit-html';
import { array, boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.select';
import readme from '../README.md';

export default {
	title: 'ts-select',
	decorators: [withKnobs]
};

const items = [
	{ id: 0, title: 'Item 1' },
	{ id: 1, title: 'Item 2' },
	{ id: 2, title: 'Item 3' },
	{ id: 3, title: 'Item 4' },
	{ id: 4, title: 'Item 5' },
	{ id: 5, title: 'Item 6' },
	{ id: 6, title: 'Item 7' },
	{ id: 7, title: 'Item 8' },
	{ id: 8, title: 'Item 9' }
];

export const Default = () => {
	const dir = select(
		'dir',
		{
			ltr: 'ltr',
			rtl: 'rtl'
		},
		'ltr'
	);
	const disabled = boolean('disabled', false);
	const opened = boolean('opened', false);
	const multiselect = boolean('multiselect', false);
	const noApplyButton = boolean('no apply button', false);
	const withIcons = boolean('with icons', false);
	const placeholder = text('placeholder', 'placeholder');
	let selected = array('selected', [3]);

	selected = selected.map(item => Number(item));
	const selectItems = [...items];
	if (withIcons) {
		for (const item of selectItems) {
			item.icon = 'ada';
		}
	}

	return html`
		<div style="max-width: 500px;">
			<ts-select
				.dir="${dir}"
				?disabled="${disabled}"
				?opened="${opened}"
				?multiselect="${multiselect}"
				?noApplyButton="${noApplyButton}"
				.placeholder="${placeholder}"
				.selected="${selected}"
				.items="${selectItems}"
			></ts-select>
		</div>
	`;
};

Default.story = {
	name: 'default',
	parameters: {
		notes: readme
	}
};
