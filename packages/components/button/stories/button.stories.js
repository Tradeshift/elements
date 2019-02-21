import { storiesOf } from '@storybook/html';
import '@tradeshift/elements/src/vars.css';
import '@tradeshift/elements/src/fonts.css';
import '@tradeshift/elements';
import '@tradeshift/elements.button';

storiesOf('ts-button', module)
	.add('type=""', () => {
		return '<ts-button>Button</ts-button>';
	})
	.add('type="primary"', () => {
		return '<ts-button type="primary">Button</ts-button>';
	})
	.add('type="secondary"', () => {
		return '<ts-button type="secondary">Button</ts-button>';
	})
	.add('type="text"', () => {
		return '<ts-button type="text">Button</ts-button>';
	});
