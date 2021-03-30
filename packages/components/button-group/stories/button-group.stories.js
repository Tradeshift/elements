import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';
import readme from '../README.md';

export default {
	title: 'ts-button-group'
};

export const Default = () => html`
	<ts-button-group>
		${['Primary', 'Secondary', 'Secondary', 'Secondary', 'Text', 'Text'].map(
			type => html` <ts-button .type=${type.toLowerCase()}>${type} Button – Grouped</ts-button> `
		)}
	</ts-button-group>
`;

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
