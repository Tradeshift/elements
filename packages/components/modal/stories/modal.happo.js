import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.modal';
import '@tradeshift/elements.note';

storiesOf('ts-modal', module)
	.add('medium', () => {
		return html`
			<ts-modal data-title="title" data-size="medium" data-visible no-padding>
				<ts-note slot="note" style="border: 1px solid black;">
					Note content
				</ts-note>
				<div slot="main" style="border: 1px solid black;">
					Main content
				</div>
				<div slot="footer" style="border: 1px solid black;">
					Footer content
				</div>
			</ts-modal>
		`;
	})
	.add('large and rtl', () => {
		return html`
			<ts-modal data-dir="rtl" data-title="title" data-size="large" data-visible>
				<ts-note dir="rtl" slot="note" style="border: 1px solid black;">
					Note content
				</ts-note>
				<div slot="main" style="border: 1px solid black;">
					Main content
				</div>
				<div slot="footer" style="border: 1px solid black;">
					Footer content
				</div>
			</ts-modal>
		`;
	});
