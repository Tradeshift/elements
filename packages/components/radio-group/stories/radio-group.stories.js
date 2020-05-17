import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.radio-group';
import readme from '../README.md';

storiesOf('ts-radio-group', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
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
		},
		{ notes: readme }
	);
