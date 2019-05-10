import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '../lib/typography.cjs';

storiesOf('ts-typography', module)
	.add(
		'Simple',
		() => html`
			<div>fake for storybook</div>
			<ts-typography>Sample Text</ts-typography>
		`
	)
	.add(
		'color="danger"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography color="danger">Danger Color Text</ts-typography>
		`
	)
	.add(
		'color="error"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography color="error">Error Color Text</ts-typography>
		`
	)
	.add(
		'color="success"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography color="success">Success Color Text</ts-typography>
		`
	)
	.add(
		'color="action"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography color="action">Action Color Text</ts-typography>
		`
	)
	.add(
		'color="primary"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography color="primary">Primary Color Text</ts-typography>
		`
	)
	.add(
		'variant="default"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography variant="default">Default Variant Text</ts-typography>
		`
	)
	.add(
		'variant="title"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography variant="title">Title Variant Text</ts-typography>
		`
	)
	.add(
		'variant="subtitle"',
		() => html`
			<div>fake for storybook</div>
			<ts-typography variant="subtitle">Subtitle Variant Text</ts-typography>
		`
	)
	.add(
		'no-wrap',
		() => html`
			<div>fake for storybook</div>
			<ts-typography no-wrap>No Wrap Text</ts-typography>
		`
	);
