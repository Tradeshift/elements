import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import '@tradeshift/elements.radio';

storiesOf('ts-radio', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const label1 = text('label1', 'Red pill');
		const label2 = text('label2', 'Blue pill');
		const disabled = boolean('Disabled', false);

		return html`
			<ts-radio ?disabled="${disabled}" data-label="${label1}"></ts-radio>
			<ts-radio ?disabled="${disabled}" data-label="${label2}"></ts-radio>
		`;
	});
