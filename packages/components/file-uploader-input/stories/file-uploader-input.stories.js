import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.file-uploader-input';

import { sizes } from '../src/utils';
import readme from '../README.md';

storiesOf('ts-file-uploader-input', module)
	.addDecorator(
		withKnobs({
			escapeHTML: false
		})
	)
	.add(
		'default',
		() => {
			const size = select(
				'size',
				{
					default: '',
					...helpers.objectKeysChangeCase(sizes)
				},
				''
			);

			const rtl = boolean('rtl', false);
			const disabled = boolean('disabled', false);
			const multiple = boolean('multiple', false);
			const hideFileTypeHelpText = boolean('hide-file-type-help-text', false);
			const acceptedFileExtensions = text('accepted-file-extensions', '["doc", "pdf", "jpg"]');
			const helpTextTitle = text('help-text-title', '');
			const helpTextMessages = text(
				'help-text-messages',
				'["Some very very long long help text to give user more information about the input that they need to provide"]'
			);

			return html`
				<ts-file-uploader-input
					accepted-file-extensions="${acceptedFileExtensions}"
					?rtl="${rtl}"
					?disabled="${disabled}"
					?multiple="${multiple}"
					?hide-file-type-help-text="${hideFileTypeHelpText}"
					size="${size}"
					help-text-title="${helpTextTitle}"
					help-text-messages="${helpTextMessages}"
				></ts-file-uploader-input>
			`;
		},
		{ notes: readme }
	);
