import { html } from 'lit-html';
import { withKnobs, text, boolean, array, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '@tradeshift/elements.modal';
import '@tradeshift/elements.button';
import '@tradeshift/elements.text-field';
import '@tradeshift/elements.confirmation-prompt';
import readme from '../README.md';

export default {
	title: 'ts-confirmation-prompt',
	decorators: [withKnobs]
};

export const Default = () => {
	const textData = text(
		'text',
		'To remove the parent tenant for this branch, please type `okay` in the box below to confirm your action.'
	);
	const header = text('data-header', 'Header text');
	const title = text('data-title', 'Title text');
	const label = text('text-field-label', 'Tenant ID');
	const textToMatch = text('text-to-match', 'okay');
	const helpTextTitle = text('help-text-title', 'Important');
	const helpTextMessage = array('help-text-message', ['Help text message to provide more information.']);
	const translations = object('translations', { acceptButton: 'Bekræfte', cancelButton: 'Afbestille' });
	const visible = boolean('data-visible', true);

	return html`
		<ts-confirmation-prompt
			?data-visible="${visible}"
			text="${textData}"
			data-header="${header}"
			data-title="${title}"
			text-field-label="${label}"
			help-text-title="${helpTextTitle}"
			.helpTextMessages="${helpTextMessage}"
			text-to-match="${textToMatch}"
			translations="${JSON.stringify(translations)}"
			@cancel="${action('"cancel" event being called!')}"
			@close="${action('"close" event being called!')}"
			@accept="${action('"accept" event being called!')}"
		>
		</ts-confirmation-prompt>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
