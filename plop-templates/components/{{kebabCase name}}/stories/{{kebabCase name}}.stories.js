import { html } from 'lit-html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import '@tradeshift/elements.{{kebabCase name}}';

export default {
	title: 'ts-{{kebabCase name}}',
	decorators: [withKnobs]
};

export const Default = () => {
	const label = text('label', 'Label');
	const disabled = boolean('Disabled', false);

	return html`
            <ts-{{kebabCase name}} ?disabled="${disabled}">
                ${label}
            </ts-{{kebabCase name}}>
        `;
};

Default.story = {
	name: 'default'
};
