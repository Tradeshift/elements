import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import '@tradeshift/elements.checkbox';

storiesOf('ts-checkbox', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const label = text('label', 'Label');
		const disabled = boolean('Disabled', false);

		return html`
			<ts-checkbox ?disabled="${disabled}" data-label="${label}"> </ts-checkbox>
		`;
	});
