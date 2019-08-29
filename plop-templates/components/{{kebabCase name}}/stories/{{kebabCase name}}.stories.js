import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import '@tradeshift/elements.{{kebabCase name}}';

storiesOf('ts-{{kebabCase name}}', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const label = text('label', 'Label');
		const disabled = boolean('Disabled', false);

		return html`
			<ts-{{kebabCase name}} ?disabled="${disabled}">
				${label}
			</ts-{{kebabCase name}}>
		`;
	});
