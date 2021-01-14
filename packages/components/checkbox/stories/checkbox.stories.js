import { html } from 'lit-html';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.checkbox';
import readme from '../README.md';

export default {
	title: 'ts-checkbox',
	decorators: [withKnobs]
};

export const Default = () => {
	const dir = radios('dir', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
	const label = text('data-label', 'Label');
	const checked = boolean('checked', false);
	const disabled = boolean('disabled', false);

	return html`
		<ts-checkbox dir="${dir}" ?disabled="${disabled}" ?checked="${checked}" data-label="${label}"> </ts-checkbox>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
