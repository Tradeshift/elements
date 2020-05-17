import { html, storiesOf } from '@open-wc/demoing-storybook';
import { number, select, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.file-size';

import { colorTypes, variants } from '../../typography/src/utils';
import readme from '../README.md';

storiesOf('ts-file-size', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
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
		},
		{ notes: readme }
	);
