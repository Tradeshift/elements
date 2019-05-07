import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.button';

storiesOf('ts-button', module)
	.add(
		'type=""',
		() => html`
			<ts-button>Default Button</ts-button>
		`
	)
	.add(
		'type="primary"',
		() => html`
			<ts-button type="primary">Primary Button</ts-button>
		`
	)
	.add(
		'type="secondary"',
		() => html`
			<ts-button type="secondary">Secondary Button</ts-button>
		`
	)
	.add(
		'type="text"',
		() => html`
			<ts-button type="text">Text Button</ts-button>
		`
	);
