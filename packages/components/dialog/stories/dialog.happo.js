import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.dialog';
import '@tradeshift/elements.button-group';

export default {
	title: 'ts-dialog'
};

export const Test = () => {
	const translations = { accept_button: 'custom accept', cancel_button: 'custom cancel' };
	return html`
		<ts-dialog
			text="Are you sure you want to delete the document?"
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
