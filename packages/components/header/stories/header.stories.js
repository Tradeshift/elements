import { html, storiesOf } from '@open-wc/demoing-storybook';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.header';
import '@tradeshift/elements.button';

import icon from '../../../../static/icon.svg';
import readme from '../README.md';

storiesOf('ts-header', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const title = text('title', 'Title');
			const color = select('Color', {
				default: 'white',
				black: 'black',
				red: 'red',
				orange: 'orange',
				yellow: 'yellow',
				green: 'green',
				blue: 'blue',
				purple: 'purple',
				pink: 'pink',
				gray: 'gray',
				slate: 'slate'
			});

			const dir = select('Direction', {
				default: 'ltr',
				ltr: 'ltr',
				rtl: 'rtl'
			});

			return html`
				<ts-header dir="${dir}" icon=${icon} title="${title}" color="${color}"> </ts-header>
			`;
		},
		{ notes: readme }
	)
	.add(
		'button',
		() => {
			return html`
				<ts-header title="Buttons" color="blue">
					<ts-button>Button</ts-button>
				</ts-header>
			`;
		},
		{ notes: readme }
	);
