import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.action-button';

import { types } from '../src/utils';
import icons from '../../icon/src/assets/icons';

storiesOf('ts-action-button', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const title = text('title', 'Action');

		const type = select(
			'Type',
			{
				default: '',
				...helpers.objectKeysChangeCase(types)
			},
			''
		);

		const dir = boolean('RTL', false) ? 'rtl' : 'ltr';
		const icon = select('Icon', Object.keys(icons), 'download');
		const color = type === types.ACTION_INVERTED ? '#28354F' : '#FFFFFF';

		return html`
			<div style="background-color: ${color}; padding: 20px;">
				<ts-action-button type="${type}" icon="${icon}" title="${title}" dir="${dir}"> </ts-action-button>
			</div>
		`;
	});
