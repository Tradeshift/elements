import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.file-uploader-input';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-file-uploader-input', module).add('test', () => {
	const properties = {
		rtl: { true: true },
		disabled: { true: true },

		helpTextMessages: {
			message: [
				'Some very very long long help text to give user more information about the input that they need to provide'
			]
		},
		hideFileTypeHelpText: { true: true },
		size: {
			full: 'full',
			medium: 'medium',
			small: 'small'
		}
	};

	const options = {
		columns: 5,
		persistent_props: {
			acceptedFileExtensions: ['doc', 'pdf', 'jpg'],
			helpTextTitle: 'Help Title'
		}
	};

	return createHappoStories('file-uploader-input', properties, '', options);
});
