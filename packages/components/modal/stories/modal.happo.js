import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.modal';
import '@tradeshift/elements.note';

export default {
	title: 'ts-modal'
};

export const Medium = () => {
	return html`
		<ts-modal data-title="title" data-size="medium" data-visible no-padding>
			<ts-note slot="note" style="border: 1px solid black;"> Note content </ts-note>
			<div slot="main" style="border: 1px solid black;">Main content</div>
			<div slot="footer" style="border: 1px solid black;">Footer content</div>
		</ts-modal>
	`;
};

Medium.story = {
	name: 'medium'
};

export const LargeAndRtl = () => {
	return html`
		<ts-modal data-dir="rtl" data-title="title" data-size="large" data-visible>
			<ts-note dir="rtl" slot="note" style="border: 1px solid black;"> Note content </ts-note>
			<div slot="main" style="border: 1px solid black;">Main content</div>
			<div slot="footer" style="border: 1px solid black;">Footer content</div>
		</ts-modal>
	`;
};

LargeAndRtl.story = {
	name: 'large and rtl'
};
