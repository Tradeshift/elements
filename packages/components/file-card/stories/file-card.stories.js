import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.file-card';

storiesOf('ts-file-card', module)
	.add(
		'state="download"',
		() => html`
			<ts-file-card
				file-object='{"name":"fileName.pdf","size":987654321}'
				state="download"
			></ts-file-card>
		`
	)
	.add(
		'state="upload"',
		() => html`
			<ts-file-card
				file-object='{"name":"fileName.pdf","size":987654321}'
				state="uploading"
			></ts-file-card>
		`
	)
	.add(
		'state="failed"',
		() => html`
			<ts-file-card
				file-object='{"name":"fileName.pdf","size":987654321}'
				state="failed"
				error-message="Error message..."
			></ts-file-card>
		`
	)
	.add(
		'size="medium"',
		() => html`
			<ts-file-card
				file-object='{"name":"fileName.pdf","size":987654321}'
				size="medium"
				state="download"
			></ts-file-card>
		`
	)
	.add(
		'size="small"',
		() => html`
			<ts-file-card
				file-object='{"name":"fileName.pdf","size":987654321}'
				size="small"
				state="download"
			></ts-file-card>
		`
	)
	.add(
		'rtl',
		() => html`
			<ts-file-card
				file-object='{"name":"fileName.pdf","size":987654321}'
				rtl
				state="failed"
				error-message="پیغام خطا..."
			></ts-file-card>
		`
	)
	.add(
		'removable',
		() => html`
			<ts-file-card
				file-object='{"name":"fileName.pdf","size":987654321}'
				state="download"
				removable
			></ts-file-card>
		`
	);
