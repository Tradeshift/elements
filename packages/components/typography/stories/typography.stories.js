import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '../lib/typography.cjs';

storiesOf('ts-typography', module)
	.add(
		'Simple',
		() => html`
			<ts-typography>Sample Text</ts-typography>
		`
	)
	.add(
		'color="danger"',
		() => html`
			<ts-typography color="danger">Danger Color Text</ts-typography>
		`
	)
	.add(
		'color="error"',
		() => html`
			<ts-typography color="error">Error Color Text</ts-typography>
		`
	)
	.add(
		'color="success"',
		() => html`
			<ts-typography color="success">Success Color Text</ts-typography>
		`
	)
	.add(
		'color="action"',
		() => html`
			<ts-typography color="action">Action Color Text</ts-typography>
		`
	)
	.add(
		'color="primary"',
		() => html`
			<ts-typography color="primary">Primary Color Text</ts-typography>
		`
	)
	.add(
		'variant="default"',
		() => html`
			<ts-typography variant="default">Default Variant Text</ts-typography>
		`
	)
	.add(
		'variant="title"',
		() => html`
			<ts-typography variant="title">Title Variant Text</ts-typography>
		`
	)
	.add(
		'variant="subtitle"',
		() => html`
			<ts-typography variant="subtitle">Subtitle Variant Text</ts-typography>
		`
	)
	.add(
		'no-wrap',
		() => html`
			<ts-typography no-wrap>No Wrap Text</ts-typography>
		`
	);
