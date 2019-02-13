import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import { isHappoRun } from 'happo-plugin-storybook/register';

import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

import '@tradeshift/elements/src/vars.css';
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
