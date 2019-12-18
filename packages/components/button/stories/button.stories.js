import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.button';

import { types, sizes } from '../src/utils';
import icons from '../../icon/src/assets/icons';
import { colors } from '../src/utils/constants';

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

		let color;
		if (type === types.TEXT) {
			color = select('Color', {
				default: undefined,
				...helpers.objectKeysChangeCase(colors)
			});
		}

		const label = text('label', 'button');
		const busy = boolean('busy', false);
		const disabled = boolean('disabled', false);

		if (type === types.text && color && color !== color.none) {
			console.log('color');
			return html`
				<ts-button type="${type}" color="${color}" icon="download">
					${label}
				</ts-button>
			`;
		}

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
	})
	.add('action', () => {
		// const color = select('Color', {
		// 	default: colors.GRAY,
		// 	...helpers.objectKeysChangeCase(colors)
		// });

		// const label = text('label', 'Action Button');

		return html`
			<ts-button type="action" color="${colors.GRAY}" icon="download">
				Action button
			</ts-button>
		`;
	});
