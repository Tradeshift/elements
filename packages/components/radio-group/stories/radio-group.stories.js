import { html } from 'lit-html';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.radio-group';
import readme from '../README.md';

export default {
	title: 'ts-radio-group',
	decorators: [withKnobs]
};

export const Default = () => {
	const title = text('title', 'Choose wisely');
	const label1 = text('label1', 'Red pill');
	const label2 = text('label2', 'Blue pill');
	const label3 = text('lable3', 'Black pill');
	const disabled = boolean('Disabled', false);
	const focused = boolean('Focused', false);
	const dir = radios('Direction', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
	const additional = boolean('Additional', true);

	return html`
		<ts-radio-group title="${title}" dir="${dir}" ?focused="${focused}">
			<ts-radio value="value1" label="${label1}" disabled></ts-radio>
			<ts-radio value="value2" label="${label2}" ?disabled="${disabled}" checked></ts-radio>
			${additional
				? html`
						<ts-radio value="value3" label="${label3}"></ts-radio>
				  `
				: ''}
		</ts-radio-group>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
