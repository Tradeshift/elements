import { html } from 'lit-html';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import '../lib/tooltip.esm';
import readme from '../README.md';

export default {
	title: 'ts-tooltip',
	decorators: [withKnobs]
};

export const Default = () => {
	const position = select('position', ['right', 'left', 'top', 'bottom'], 'right');
	const tooltip = text('tooltip', 'This is my tooltip');
	const disabled = boolean('disabled', false);

	return html`
		<div style="margin-top: 100px;  text-align: center; position:relative">
			<ts-tooltip tooltip="${tooltip}" position="${position}" ?disabled="${disabled}">Tooltip</ts-tooltip>
		</div>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
