import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.file-card';

import { sizes, states } from '../src/utils';
import readme from '../README.md';

storiesOf('ts-file-card', module)
	.addDecorator(
		withKnobs({
			escapeHTML: false
		})
	)
	.add(
		'default',
		() => {
			const state = select(
				'state',
				{
					...helpers.objectKeysChangeCase(states)
				},
				states.DOWNLOAD
			);
			const size = select(
				'size',
				{
					default: '',
					...helpers.objectKeysChangeCase(sizes)
				},
				''
			);

			const errorMessage = text('error-message', 'Sample error message!');
			const rtl = boolean('rtl', false);
			const removable = boolean('removable', false);
			const fileObject = object('file-object', { name: 'fileName.pdf', size: 123456789 });

			return html`
				<ts-file-card
					file-object="${JSON.stringify(fileObject)}"
					error-message="${errorMessage}"
					?rtl="${rtl}"
					?removable="${removable}"
					state="${state}"
					size="${size}"
				></ts-file-card>
			`;
		},
		{ notes: readme }
	);
