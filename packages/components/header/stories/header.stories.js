import { html } from 'lit-html';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.button';
import '../lib/header.esm';

import icon from '../../../../static/icon.svg';
import readme from '../README.md';

export default {
	title: 'ts-header',
	decorators: [withKnobs]
};

export const Default = () => {
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

	return html` <ts-header dir="${dir}" icon=${icon} title="${title}" color="${color}"> </ts-header> `;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};

export const Button = () => {
	return html`
		<ts-header title="Buttons" color="blue">
			<ts-button>Button</ts-button>
		</ts-header>
	`;
};

Button.story = {
	name: 'button',
	parameters: { notes: readme }
};
