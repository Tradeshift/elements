import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, radios, text, boolean } from '@storybook/addon-knobs';

import '@tradeshift/elements.checkbox';

storiesOf('ts-checkbox', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const dir = radios('dir', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
		const label = text('data-label', 'Label');
		const checked = boolean('checked', false);
		const disabled = boolean('disabled', false);

		return html`
			<ts-checkbox dir="${dir}" ?disabled="${disabled}" ?checked="${checked}" data-label="${label}"> </ts-checkbox>
		`;
	});
