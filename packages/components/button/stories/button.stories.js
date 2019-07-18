import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.button';

import { types, sizes } from '../src/utils';
import icons from '../../icon/src/assets/icons';

storiesOf('ts-button', module)
	.addDecorator(withKnobs)
	.add('default', () => {
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

		const label = text('Lable', 'Button');
		const busy = boolean('Busy', false);
		const disabled = boolean('Disabled', false);

		return type
			? html`
					<ts-button ?disabled="${disabled}" ?busy="${busy}" type="${type}" size="${size}">
						${label}
					</ts-button>
			  `
			: html`
					<ts-button ?disabled="${disabled}" ?busy="${busy}" size="${size}">
						${label}
					</ts-button>
			  `;
	})
	.add('icon', () => {
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
		const icon = select('Icon', Object.keys(icons), Object.keys(icons)[0]);

		return html`
			<ts-button ?disabled="${disabled}" ?busy="${busy}" icon="${icon}" type="${type}" size="${size}"> </ts-button>
		`;
	});
