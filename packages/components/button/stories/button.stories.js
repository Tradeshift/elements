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
	.add('attributes', () => {
		const type = select('Type', ['primary', 'secondary', 'text'], 'text');
		return `<ts-button type="${type}">Button</ts-button>`;
	});
