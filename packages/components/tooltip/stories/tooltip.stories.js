import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import '@tradeshift/elements';
import '@tradeshift/elements.tooltip';
import readme from '../README.md';

storiesOf('ts-tooltip', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const position = select('position', ['right', 'left', 'top', 'bottom'], 'right');
			const tooltip = text('tooltip', 'This is my tooltip');
			const disabled = boolean('disabled', false);

			return html`
				<div style="margin-top: 100px;  text-align: center; position:relative">
					<ts-tooltip tooltip="${tooltip}" position="${position}" ?disabled="${disabled}">Tooltip</ts-tooltip>
				</div>
			`;
		},
		{ notes: readme }
	);
