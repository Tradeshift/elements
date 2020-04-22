import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.card';

import { orientations, sizes, types } from '../src/utils';
import readme from '../README.md';

storiesOf('ts-card', module)
	.addDecorator(
		withKnobs({
			escapeHTML: false
		})
	)
	.add(
		'default',
		() => {
			const type = select(
				'type',
				{
					default: null,
					...helpers.objectKeysChangeCase(types)
				},
				null
			);
			const size = select(
				'size',
				{
					default: '',
					...helpers.objectKeysChangeCase(sizes)
				},
				''
			);
			const orientation = select(
				'orientation',
				{
					default: '',
					...helpers.objectKeysChangeCase(orientations)
				},
				''
			);

			const defaultContent = `
			<div>Card part 1</div>
			<div>Card part 2</div>
			<div>Card part 3</div>
		`;

			const content = text('content', defaultContent);
			const rtl = boolean('rtl', false);

			return html`
				<ts-card ?rtl="${rtl}" type="${type}" size="${size}" orientation="${orientation}">
					${html([content])}
				</ts-card>
			`;
		},
		{ notes: readme }
	);
