import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import '@tradeshift/elements.radio';

storiesOf('ts-radio', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const label = text('label', 'Radio');
		const disabled = boolean('Disabled', false);
		const checked = boolean('Checked', false);

		return html`
			<ts-radio label="${label}" ?checked="${checked}" ?disabled="${disabled}"></ts-radio>
		`;
	});
