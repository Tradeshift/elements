import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.progress-bar';

storiesOf('ts-progress-bar', module)
	.add(
		'determinate done="25"',
		() => html`
			<ts-progress-bar done="25"></ts-progress-bar>
		`
	)
	.add(
		'determinate total="10" done="7"',
		() => html`
			<ts-progress-bar total="10" done="7"></ts-progress-bar>
		`
	)
	.add(
		'indeterminate',
		() => html`
			<ts-progress-bar indeterminate></ts-progress-bar>
		`
	);
