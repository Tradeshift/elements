import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.file-size';

storiesOf('ts-file-size', module)
	.add(
		'size="2500"',
		() => html`
			<ts-file-size size="2500"></ts-file-size>
		`
	)
	.add(
		'decimalPoint',
		() => html`
			<ts-file-size size="1234567" decimal-point="2"></ts-file-size>
		`
	)
	.add(
		'variant="title"',
		() => html`
			<ts-file-size size="1234567" variant="title"></ts-file-size>
		`
	)
	.add(
		'color="success"',
		() => html`
			<ts-file-size size="1234567" color="success"></ts-file-size>
		`
	);
