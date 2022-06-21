import { html } from 'lit-html';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '@tradeshift/elements.action-select';
import '@tradeshift/elements.button';
import '@tradeshift/elements.icon';
import { ada, allDocuments } from '@tradeshift/elements.icon/lib/assets/icons';
import readme from '../README.md';

export default {
	title: 'ts-action-select',
	decorators: [withKnobs]
};

const items = [
	{ id: 0, title: 'Action Select Item 1' },
	{ id: 1, title: 'Another Action Item 2' },
	{ id: 2, title: 'Some Item on place number 3' },
	{ id: 3, title: 'How many items do we suport?' },
	{ id: 4, title: 'Apparently, more than 5' },
	{ id: 5, title: 'Can it fit item 6?' },
	{ id: 6, title: "Let's try to add item 7" },
	{ id: 7, title: 'What about Item 8?' },
	{ id: 8, title: 'There is definitely a place for Item 9' },
	{ id: 9, title: 'How many items are here?' },
	{ id: 10, title: 'We need more items!' },
	{ id: 11, title: 'More! More! More!' },
	{ id: 12, title: 'Items! Items! Items!' },
	{ id: 13, title: 'Actions! Actions! Actions!' },
	{ id: 14, title: 'We need to overflow it!' },
	{ id: 15, title: 'Finaly we overflow it' },
	{ id: 16, title: 'Just one more item here' }
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
	const withIcons = boolean('with icons', false);

	const actionItems = [...items];
	if (withIcons) {
		for (const item of actionItems) {
			item.icon = 'company-profile';
		}
	}

	return html`
		<div style="margin: 150px;">
			<ts-action-select
				.dir="${dir}"
				?disabled="${disabled}"
				?opened="${opened}"
				.items="${actionItems.splice(0, 3)}"
				@action-select-click="${action('Action item selected')}"
			></ts-action-select>
		</div>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};

export const Corner = () => {
	const dir = select(
		'dir',
		{
			ltr: 'ltr',
			rtl: 'rtl'
		},
		'ltr'
	);
	const withIcons = boolean('with icons', false);

	const actionItems = [...items];
	if (withIcons) {
		for (const item of actionItems) {
			item.icon = 'company-profile';
		}
	}

	return html`
		<div style="position: absolute; top: 20px; left: 20px;">
			<span>Opens to bottom right</span>
			<ts-action-select
				.dir="${dir}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			></ts-action-select>
		</div>
		<div style="position: absolute; top: 20px; right: 20px;">
			Opens to bottom left
			<ts-action-select
				.dir="${dir}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			></ts-action-select>
		</div>
		<div style="position: absolute; bottom: 20px; left: 20px;">
			Opens to top right
			<ts-action-select
				.dir="${dir}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			></ts-action-select>
		</div>
		<div style="position: absolute; bottom: 20px; right: 20px;">
			<span>Opens to top left</span>
			<ts-action-select
				.dir="${dir}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			></ts-action-select>
		</div>
	`;
};

Corner.story = {
	name: 'behaviour in corners',
	parameters: { notes: readme }
};

export const Triggers = () => {
	const dir = select(
		'dir',
		{
			ltr: 'ltr',
			rtl: 'rtl'
		},
		'ltr'
	);
	const disabled = boolean('disabled', false);
	const withIcons = boolean('with icons', false);

	const actionItems = [...items];
	if (withIcons) {
		for (const item of actionItems) {
			item.icon = 'company-profile';
		}
	}

	return html`
			<ts-action-select
				.dir="${dir}"
				?disabled="${disabled}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			>
			<ts-button type="primary">Show action menu</ts-button>
		</ts-action-select>
		<br />
			<ts-action-select
				.dir="${dir}"
				?disabled="${disabled}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			>
			<ts-button type="text">Text button</ts-button>
			</ts-action-select>
			<br />
			<ts-action-select
				.dir="${dir}"
				?disabled="${disabled}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			>
			<ts-button icon-src="${ada}"></ts-button>
		</ts-action-select>
		<br />
			<ts-action-select
				.dir="${dir}"
				?disabled="${disabled}"
				.items="${actionItems}"
				@action-select-click="${action('Action item selected')}"
			>
			<ts-icon src="${allDocuments}" size="large" type="gray-darker" style="cursor:pointer;"></ts-icon>
		</ts-action-select>
		</div>
	`;
};

Triggers.story = {
	name: 'different types of triggers',
	parameters: { notes: readme }
};
