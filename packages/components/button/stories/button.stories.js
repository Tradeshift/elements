import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

import '@tradeshift/elements/src/vars.css';
import '@tradeshift/elements';
import '@tradeshift/elements.button';

storiesOf('ts-button', module)
	.add('Gallery', () => {
		return `
			<ts-button type="primary">Primary Button</ts-button>
			<ts-button type="secondary">Secondary Button</ts-button>
			<ts-button type="text">Text Button</ts-button>
		`;
	})
	.add('Attributes', () => {
		const type = select('Type', ['primary', 'secondary', 'text'], 'text');
		return `<ts-button type="${type}">Button</ts-button>`;
	})
	.add('default type', () => {
		return '<ts-button>Button</ts-button>';
	})
	.add('type=primary', () => {
		return '<ts-button type="primary">Button</ts-button>';
	})
	.add('type=secondary', () => {
		return '<ts-button type="secondary">Button</ts-button>';
	})
	.add('type=text', () => {
		return '<ts-button type="text">Button</ts-button>';
	});
