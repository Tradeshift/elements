import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import { isHappoRun } from 'happo-plugin-storybook/register';

import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

import '@tradeshift/elements/src/vars.css';
import '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';

storiesOf('ts-button-group', module).add('default type', () => {
	return `
		<ts-button-group>
			<ts-button type="primary">Button</ts-button>
			<ts-button type="secondary">Button</ts-button>
			<ts-button type="secondary">Button</ts-button>
			<ts-button type="secondary">Button</ts-button>
			<ts-button type="text">Button</ts-button>
		</ts-button-group>
	`;
});
