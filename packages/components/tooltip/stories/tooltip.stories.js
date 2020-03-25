import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import '@tradeshift/elements';
import '@tradeshift/elements.tooltip';

storiesOf('ts-tooltip', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const position = select('position', ['right', 'left', 'top', 'bottom'], 'right');
		const tooltip = text('tooltip', 'This is my tooltip');
		const disabled = boolean('disabled', false);

		return html`
			<div style="margin-top: 100px;  text-align: center; position:relative">
				<ts-tooltip tooltip="${tooltip}" position="${position}" ?disabled="${disabled}">Tooltip</ts-tooltip>
			</div>
		`;
	});
