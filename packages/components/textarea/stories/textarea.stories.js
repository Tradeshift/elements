import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

import '@tradeshift/elements.textarea';

storiesOf('ts-textarea', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const disabled = boolean('Disabled', false);
		const value = text('Value', 'Text');
		const title = text('Title', 'Title');
		const dir = radios('Direction', ['ltr', 'rtl'], 'ltr');

		return html`
			<ts-textarea ?disabled="${disabled}" value="${value}" title="${title}" dir="${dir}"> </ts-textarea>
		`;
	});
