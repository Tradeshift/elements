import { html } from 'lit-html';
import { boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '../lib/file-card.esm';

import { sizes, states } from '../src/utils';
import readme from '../README.md';

export default {
	title: 'ts-file-card',

	decorators: [
		withKnobs({
			escapeHTML: false
		})
	]
};

export const Default = () => {
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
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
