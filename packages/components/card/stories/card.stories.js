import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.card';

storiesOf('ts-card', module)
	.add(
		'Simple',
		() => html`
			<ts-card>Sample Text</ts-card>
		`
	)
	.add(
		'type="error"',
		() => html`
			<ts-card type="error">Sample Text</ts-card>
		`
	)
	.add(
		'type="success"',
		() => html`
			<ts-card type="success">Sample Text</ts-card>
		`
	)
	.add(
		'type="focus"',
		() => html`
			<ts-card type="focus">Sample Text</ts-card>
		`
	)
	.add(
		'orientation="vertical"',
		() => html`
			<ts-card orientation="vertical">
				<div>top</div>
				<div>middle</div>
				<div>bottom</div>
			</ts-card>
		`
	)
	.add(
		'orientation="horizontal"',
		() => html`
			<ts-card orientation="horizontal">
				<div>left</div>
				<div>middle</div>
				<div>right</div>
			</ts-card>
		`
	)
	.add(
		'rtl',
		() => html`
			<ts-card rtl>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</ts-card>
		`
	)
	.add(
		'size="small"',
		() => html`
			<ts-card size="small">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
				alias consequatur dolor, eaque esse eum excepturi facere inventore natus
				nobis non nulla, officiis quo sed tempora unde vel voluptatum.
			</ts-card>
		`
	)
	.add(
		'size="medium"',
		() => html`
			<ts-card size="medium">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
				alias consequatur dolor, eaque esse eum excepturi facere inventore natus
				nobis non nulla, officiis quo sed tempora unde vel voluptatum.
			</ts-card>
		`
	)
	.add(
		'size="full"',
		() => html`
			<ts-card size="full">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
				alias consequatur dolor, eaque esse eum excepturi facere inventore natus
				nobis non nulla, officiis quo sed tempora unde vel voluptatum.
			</ts-card>
		`
	)
	.add(
		'no-padding',
		() => html`
			<ts-card no-padding>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
				alias consequatur dolor, eaque esse eum excepturi facere inventore natus
				nobis non nulla, officiis quo sed tempora unde vel voluptatum.
			</ts-card>
		`
	)
	.add(
		'no-horizontal-padding',
		() => html`
			<ts-card no-horizontal-padding>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
				alias consequatur dolor, eaque esse eum excepturi facere inventore natus
				nobis non nulla, officiis quo sed tempora unde vel voluptatum.
			</ts-card>
		`
	)
	.add(
		'no-vertical-padding',
		() => html`
			<ts-card no-vertical-padding>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
				alias consequatur dolor, eaque esse eum excepturi facere inventore natus
				nobis non nulla, officiis quo sed tempora unde vel voluptatum.
			</ts-card>
		`
	);
