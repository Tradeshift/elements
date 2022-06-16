import { html } from 'lit-html';
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs';

import '../lib/document-card.esm';
import { IconsEnum } from '../src/utils';
import { helpers } from '@tradeshift/elements';
import readme from '../README.md';

export default {
	title: 'ts-document-card',
	decorators: [withKnobs]
};

export const Default = () => {
	const name = text('name', 'Invoice #321');
	const selected = boolean('selected', true);
	const description = text('description', 'CompanyName');
	const mobileDescription = text('mobileDescription', 'Description');
	const type = select('type', {
		default: null,
		...helpers.objectKeysChangeCase(IconsEnum)
	});
	const dir = select(
		'dir',
		{
			ltr: 'ltr',
			rtl: 'rtl'
		},
		'ltr'
	);
	return html`
		<ts-document-card
			name="${name}"
			description="${description}"
			mobileDescription="${mobileDescription}"
			dir="${dir}"
			?selected="${selected}"
			type="${type}"
		>
		</ts-document-card>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
