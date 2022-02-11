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
	const hasDropdown = boolean('has-dropdown', false);
	const loading = boolean('loading', false);
	const dropdownItems = [
		{ id: 1, title: 'search suggestion item 1' },
		{ id: 2, title: 'search suggestion item 2' },
		{ id: 3, title: 'search suggestion item 3' },
		{ id: 4, title: 'search suggestion item 4' }
	];

	return html`
		<ts-search
			placeholder="${placeholder}"
			dir="${dir}"
			?focused="${focused}"
			idle-time="${idleTime}"
			value="${value}"
			?has-dropdown="${hasDropdown}"
			?loading="${loading}"
			.dropdownItems="${dropdownItems}"
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
