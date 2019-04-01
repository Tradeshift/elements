import { storiesOf } from '@storybook/polymer';
import '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';
import { html } from 'lit-html';

const buttons = [
	'Primary',
	'Secondary',
	'Secondary',
	'Secondary',
	'Text',
	'Text'
];
storiesOf('Button-group', module).add(
	'Default',
	() => html`
		<ts-button-group>
			${buttons.map(
				button => html`
					<ts-button type="${button}">${button} Button – Grouped</ts-button>
				`
			)}
		</ts-button-group>
	`
);
