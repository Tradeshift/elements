import { storiesOf } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import '@tradeshift/elements';
import '@tradeshift/elements.button';
import { html } from 'lit-html';

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.add('Type', () => {
		const type = select(
			'Type',
			{
				Default: '',
				Primary: 'primary',
				Secondary: 'secondary',
				Text: 'text'
			},
			''
		);
		const label = text('Label', 'Button');
		return html`
			<ts-button type="${type}">${label}</ts-button>
		`;
	});
