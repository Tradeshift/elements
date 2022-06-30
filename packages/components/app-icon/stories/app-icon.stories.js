import { html } from 'lit-html';
import { select, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '../lib/app-icon.esm';

import icon from '../../../../static/icon.svg';
import { sizes } from '../src/utils';
import readme from '../README.md';

export default {
	title: 'ts-app-icon',
	decorators: [withKnobs]
};

export const Default = () => {
	const size = select(
		'Size',
		{
			default: '',
			...helpers.objectKeysChangeCase(sizes)
		},
		''
	);

	return html` <ts-app-icon src="${icon}" size="${size}" alt="icon"> </ts-app-icon> `;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
