import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.modal';
import '@tradeshift/elements.button';
import '@tradeshift/elements.text-field';
import '@tradeshift/elements.confirmation-prompt';

export default {
	title: 'ts-confirmation-prompt'
};

export const ConfirmationPrompt = () => {
	return html`
		<div style="width: 100%; height: 1200px;"></div>
		<ts-confirmation-prompt
			data-visible
			text="To remove the parent tenant for this branch, please type the ID in the box below to confirm your action."
			data-header="Prompt header"
			data-title="Confirmation Required"
			text-field-label="Tenant Id"
			help-text-title="Important"
			help-text-messages='["This an important action which is not revertible, be careful!!!!"]'
			text-to-match="Some Text To Match"
			translations='{"acceptButton": "Bekræfte", "cancelButton": "Afbestille"}'
		>
		</ts-confirmation-prompt>
	`;
};

ConfirmationPrompt.story = {
	name: 'confirmation prompt with props'
};

export const ConfirmationPromptWithProps = () => {
	return html`
		<div style="width: 100%; height: 1200px;"></div>
		<ts-confirmation-prompt
			data-visible
			data-header="Prompt header"
			text-field-label="Tenant Id"
			help-text-title="Important"
			help-text-messages='["This an important action which is not revertible, be careful!!!!"]'
			text-to-match="Some Text To Match"
			translations='{"acceptButton": "Bekræfte", "cancelButton": "Afbestille"}'
		>
			<div slot="title">
				<a href="#">Confirmation Required Link</a>
			</div>
			<div slot="content">
				<p>Some <b>html</b> <i>content</i></p>
			</div>
		</ts-confirmation-prompt>
	`;
};

ConfirmationPromptWithProps.story = {
	name: 'confirmation prompt with slots'
};
