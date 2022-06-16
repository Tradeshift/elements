import { html } from 'lit-html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import '../lib/radio.esm';
import readme from '../README.md';

export default {
	title: 'ts-radio',
	decorators: [withKnobs]
};

export const Default = () => {
	const label = text('label', 'Radio');
	const disabled = boolean('Disabled', false);
	const checked = boolean('Checked', false);

	return html` <ts-radio label="${label}" ?checked="${checked}" ?disabled="${disabled}"></ts-radio> `;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
