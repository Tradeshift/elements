import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.typography';

storiesOf('ts-typography', module)
	.add(
		'Simple',
		() => html`
			<ts-typography text="Sample Text"></ts-typography>
		`
	)
	.add(
		'color="danger"',
		() => html`
			<ts-typography color="danger" text="Danger Color Text"></ts-typography>
		`
	)
	.add(
		'color="error"',
		() => html`
			<ts-typography color="error" text="Error Color Text"></ts-typography>
		`
	)
	.add(
		'color="success"',
		() => html`
			<ts-typography color="success" text="Success Color Text"></ts-typography>
		`
	)
	.add(
		'color="action"',
		() => html`
			<ts-typography color="action" text="Action Color Text"></ts-typography>
		`
	)
	.add(
		'color="primary"',
		() => html`
			<ts-typography color="primary" text="Primary Color Text"></ts-typography>
		`
	)
	.add(
		'variant="default"',
		() => html`
			<ts-typography
				variant="default"
				text="Default Variant Text"
			></ts-typography>
		`
	)
	.add(
		'variant="title"',
		() => html`
			<ts-typography variant="title" text="Title Variant Text"></ts-typography>
		`
	)
	.add(
		'variant="subtitle"',
		() => html`
			<ts-typography
				variant="subtitle"
				text="Subtitle Variant Text"
			></ts-typography>
		`
	)
	.add(
		'no-wrap',
		() => html`
			<ts-typography no-wrap text="No Wrap Text"></ts-typography>
		`
	);
