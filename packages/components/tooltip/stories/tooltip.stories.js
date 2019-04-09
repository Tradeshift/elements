import { storiesOf } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import '@tradeshift/elements';
import '@tradeshift/elements.tooltip';
import { html } from 'lit-html';

storiesOf('Tooltip', module)
	.addDecorator(withKnobs)
	.add('Position', () => {
		const position = select(
			'Position',
			['right', 'left', 'top', 'bottom'],
			'right'
		);
		const tooltip = text('Tooltip', 'This is my tooltip');
		return html`
			<div
				style="height:200px; line-height:200px; text-align: center; position:relative"
			>
				<ts-tooltip tooltip="${tooltip}" Position="${position}"
					>Tooltip</ts-tooltip
				>
			</div>
		`;
	});
