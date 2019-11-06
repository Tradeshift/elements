import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import '@tradeshift/elements.header';
import '@tradeshift/elements.button';

import icon from '../../../../static/icon.svg';

storiesOf('ts-header', module)
	.addDecorator(withKnobs)
	.add('default', () => {
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

		return html`
			<ts-header icon=${icon} title="${title}" color="${color}"> </ts-header>
		`;
	})
	.add('button', () => {
		return html`
			<ts-header title="Buttons" color="blue">
				<ts-button>Button</ts-button>
			</ts-header>
		`;
	});
