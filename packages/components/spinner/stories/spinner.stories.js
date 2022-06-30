import { html } from 'lit-html';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { helpers } from '@tradeshift/elements';

import '../lib/spinner.esm';
import { colors, sizes } from '../src/utils';
import readme from '../README.md';

export default {
	title: 'ts-spinner',
	decorators: [withKnobs]
};

export const Default = () => {
	const message = text('Message', 'Loading...');
	const visible = boolean('Visible', true);

	const size = select(
		'Size',
		{
			default: sizes.LARGE,
			...helpers.objectKeysChangeCase(sizes)
		},
		''
	);

	const color = select(
		'Color',
		{
			default: colors.BLUE,
			...helpers.objectKeysChangeCase(colors)
		},
		''
	);

	return html`
		<ts-spinner ?data-visible="${visible}" data-message="${message}" data-size="${size}" data-color="${color}">
		</ts-spinner>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
