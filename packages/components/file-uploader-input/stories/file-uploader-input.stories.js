import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.file-uploader-input';

storiesOf('ts-file-uploader-input', module)
	.add(
		'sample',
		() => html`
			<ts-file-uploader-input
				accepted-file-extensions='["doc", "pdf", "jpg"]'
				size="medium"
				disable-drag-and-drop
			></ts-file-uploader-input>
		`
	)
	.add(
		'drag and drop',
		() => html`
			<ts-file-uploader-input accepted-file-extensions='["doc", "pdf", "jpg"]' size="medium"></ts-file-uploader-input>
		`
	)
	.add(
		'Cusotm help text',
		() => html`
			<ts-file-uploader-input
				accepted-file-extensions='["doc", "pdf", "jpg"]'
				hide-file-type-help-text
				help-text-title="Help text title"
				help-text-messages='["Some custom help text", "Another custom help text"]'
				size="medium"
			></ts-file-uploader-input>
		`
	)
	.add(
		'Cusotm help text single help',
		() => html`
			<ts-file-uploader-input
				accepted-file-extensions='["doc", "pdf", "jpg"]'
				hide-file-type-help-text
				help-text-messages='["Some custom help text"]'
				size="medium"
			></ts-file-uploader-input>
		`
	)
	.add(
		'Multiple',
		() => html`
			<ts-file-uploader-input
				accepted-file-extensions='["doc", "pdf", "jpg"]'
				multiple
				size="small"
			></ts-file-uploader-input>
		`
	)
	.add(
		'Disabled',
		() => html`
			<ts-file-uploader-input
				accepted-file-extensions='["doc", "pdf", "jpg"]'
				disabled
				size="medium"
			></ts-file-uploader-input>
		`
	)
	.add(
		'Right to left',
		() => html`
			<ts-file-uploader-input
				accepted-file-extensions='["doc", "pdf", "jpg"]'
				rtl
				size="medium"
			></ts-file-uploader-input>
		`
	);
