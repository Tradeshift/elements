import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.file-uploader';

storiesOf('ts-file-uploader', module)
	.add(
		'type=""',
		() => html`
			<ts-file-uploader disabled></ts-file-uploader>
		`
	)
	.add(
		'files',
		() => html`
			<ts-file-uploader
				endpoint="https://localhost:9090/api/upload"
				state="download"
				files='[{"name":"test.pdf","size":12313131}]'
				removable
			></ts-file-uploader>
		`
	);
