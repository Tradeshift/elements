import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.dialog';

storiesOf('ts-dialog', module).add('test', () => {
	const translations = { accept_button: 'custom accept', cancel_button: 'custom cancel' };
	return html`
		<ts-dialog
			text="Are you sure you want to delete the document?"
			type="warning"
			primary="cancel"
			focused="accept"
			translations="${JSON.stringify(translations)}"
		>
			<ts-button-group slot="extra-buttons">
				<ts-button type="danger">another action</ts-button>
				<ts-button type="primary">primary action</ts-button>
				<ts-button>yet another action</ts-button>
			</ts-button-group>
		</ts-dialog>
	`;
});
