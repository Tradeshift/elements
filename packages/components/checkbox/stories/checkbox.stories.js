import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.checkbox';
import readme from '../README.md';

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
		},
		{ notes: readme }
	);
