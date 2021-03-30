import { html } from 'lit-html';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.note';

import { types } from '../src/utils';
import icons from '../../icon/src/assets/icons';
import readme from '../README.md';

export default {
	title: 'ts-note',
	decorators: [withKnobs]
};

export const Default = () => {
	const type = select(
		'Type',
		{
			default: '',
			...helpers.objectKeysChangeCase(types)
		},
		null
	);

	const dir = boolean('RTL', false) ? 'rtl' : 'ltr';
	const icon = select('Icon', Object.keys(icons), Object.keys(icons)[0]);
	const hidden = boolean('Hidden', false);
	const content = text('Content', 'Sample text for note');

	return html` <ts-note type="${type}" dir="${dir}" icon="${icon}" ?hidden="${hidden}"> ${content} </ts-note> `;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
