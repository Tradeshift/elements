import { html } from 'lit-html';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.button';

import { sizes, types } from '../src/utils';
import { iconList } from '@tradeshift/elements.icon/lib/assets/icons';
import readme from '../README.md';

export default {
	title: 'ts-button',
	decorators: [withKnobs]
};

export const Default = () => {
	const type = select(
		'Type',
		{
			default: null,
			...helpers.objectKeysChangeCase(types)
		},
		null
	);
	const size = select(
		'Size',
		{
			default: '',
			...helpers.objectKeysChangeCase(sizes)
		},
		''
	);

	const label = text('Label', 'Button');
	const busy = boolean('Busy', false);
	const disabled = boolean('Disabled', false);

	return type
		? html` <ts-button ?disabled="${disabled}" ?busy="${busy}" type="${type}" size="${size}"> ${label} </ts-button> `
		: html` <ts-button ?disabled="${disabled}" ?busy="${busy}" size="${size}"> ${label} </ts-button> `;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};

export const Icon = () => {
	const type = select(
		'Type',
		{
			default: '',
			...helpers.objectKeysChangeCase(types)
		},
		''
	);
	const size = select(
		'Size',
		{
			default: '',
			...helpers.objectKeysChangeCase(sizes)
		},
		''
	);

	const busy = boolean('Busy', false);
	const disabled = boolean('Disabled', false);
	const icon = select('Icon', iconList, iconList[0]);

	return html`
		<ts-button ?disabled="${disabled}" ?busy="${busy}" icon="${icon}" type="${type}" size="${size}"> </ts-button>
	`;
};

Icon.story = {
	name: 'icon',
	parameters: { notes: readme }
};

export const Action = () => {
	const label = text('Label', 'Action');
	const icon = select('Icon', iconList, 'download');
	const direction = boolean('RTL', false) ? 'rtl' : 'ltr';

	return html` <ts-button type="text" icon="${icon}" dir="${direction}"> ${label} </ts-button> `;
};

Action.story = {
	name: 'action',
	parameters: { notes: readme }
};
