import { html } from 'lit-html';
import { boolean, number, radios, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '@tradeshift/elements.search';
import readme from '../README.md';

export default {
	title: 'ts-search',
	decorators: [withKnobs],

	parameters: {
		options: { enableShortcuts: false }
	}
};

export const Default = () => {
	const placeholder = text('Placeholder', 'Search here...');
	const dir = radios('Direction', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
	const focused = boolean('Focused', false);
	const idleTime = number('Idle time', 500);
	const value = text('Value', '');

	return html`
		<ts-search
			placeholder="${placeholder}"
			dir="${dir}"
			?focused="${focused}"
			idle-time="${idleTime}"
			value="${value}"
			@idle="${action('event after idle timeout')}"
			@search="${action('event after search')}"
		>
		</ts-search>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
