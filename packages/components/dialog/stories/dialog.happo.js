import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.dialog';
import '@tradeshift/elements.button-group';

export default {
	title: 'ts-dialog'
};

export const DefaultDialog = () => html`
	<ts-dialog text="Are you sure you want to delete the document?" data-visible type="warning"></ts-dialog>
`;

DefaultDialog.story = {
	name: 'warning dialog'
};

export const ExtraButtonsDialogCustomizedButtons = () => {
	const translations = { accept_button: 'custom accept', cancel_button: 'custom cancel' };
	return html`
		<ts-dialog
			text="Warning dialog with extra buttons and customized button wording"
			data-visible
			type="warning"
			primary="cancel"
			focused="accept"
			translations="${JSON.stringify(translations)}"
		>
			<ts-button-group slot="extra-buttons">
				<ts-button type="danger">another action</ts-button>
				<ts-button type="primary">primary action</ts-button>
			</ts-button-group>
		</ts-dialog>
	`;
};

ExtraButtonsDialogCustomizedButtons.story = {
	name: 'extra buttons warning dialog w/ customised buttons'
};

export const SuccessNotification = () => html`
	<ts-dialog
		text="Non-dismissable success notification with no buttons (even though it has buttons in the extra-buttons slot)"
		data-visible
		type="success"
		primary="accept"
		focused="accept"
		non-dismissable
		notification
	>
		<ts-button-group slot="extra-buttons">
			<ts-button type="danger">another action</ts-button>
			<ts-button type="primary">primary action</ts-button>
		</ts-button-group>
	</ts-dialog>
`;

SuccessNotification.story = {
	name: 'non-dismissable success notification'
};

export const DefaultNotification = () => html`
	<ts-dialog text="info notification" data-visible type="info" notification></ts-dialog>
`;

DefaultNotification.story = {
	name: 'info notification'
};
