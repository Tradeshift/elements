import { html } from 'lit-html';
import { number, select, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '../lib/file-size.esm';

import { colorTypes, variants } from '../../typography/src/utils';
import readme from '../README.md';

export default {
	title: 'ts-file-size',
	decorators: [withKnobs]
};

export const Default = () => {
	const type = select(
		'type',
		{
			default: '',
			...helpers.objectKeysChangeCase(colorTypes)
		},
		''
	);

	const variant = select(
		'variant',
		{
			default: '',
			...helpers.objectKeysChangeCase(variants)
		},
		''
	);

	const decimalPoint = number('decimal-point', 3);
	const size = number('size', 123456789);

	return html`
		<ts-file-size decimal-point="${decimalPoint}" type="${type}" variant="${variant}" size="${size}"></ts-file-size>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
