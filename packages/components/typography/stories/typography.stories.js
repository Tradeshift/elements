import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.typography';

import { variants, colorTypes } from '../src/utils';

storiesOf('ts-typography', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const type = select(
			'type',
			{
				default: colorTypes.DEFAULT,
				...helpers.objectKeysChangeCase(colorTypes)
			},
			colorTypes.DEFAULT
		);

		const variant = select(
			'variant',
			{
				default: variants.DEFAULT,
				...helpers.objectKeysChangeCase(variants)
			},
			variants.DEFAULT
		);

		const label = text('label', 'Sample text');
		const inline = boolean('inline', false);
		const noWrap = boolean('no-wrap', false);
		const noTooltip = boolean('no-tooltip', true);

		return html`
			<ts-typography
				type="${type}"
				variant="${variant}"
				?inline=${inline}
				?no-wrap="${noWrap}"
				?no-tootltip="${noTooltip}"
			>
				${label}
			</ts-typography>
		`;
	});
