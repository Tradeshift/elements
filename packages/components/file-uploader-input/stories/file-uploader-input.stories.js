import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.file-uploader-input';

storiesOf('ts-file-uploader-input', module).add(
	'sample',
	() => html`
		<ts-file-uploader-input
			accepted-file-extensions='["doc", "pdf", "jpg"]'
			size="medium"
			disable-drag-and-drop
		></ts-file-uploader-input>
	`
);
