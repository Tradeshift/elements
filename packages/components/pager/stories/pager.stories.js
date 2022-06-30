import { html } from 'lit-html';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '../lib/pager.esm';
import readme from '../README.md';

export default {
	title: 'ts-pager',
	decorators: [withKnobs],

	parameters: {
		options: { enableShortcuts: false }
	}
};

export const Default = () => {
	const totalPages = number('total-pages', 18);
	const activePage = number('active-page', 3);
	const perPage = select('per-page', [10, 20, 30, 40, 50], 20);
	const dir = select('dir', ['ltr', 'rtl'], 'ltr');

	return html`
		<ts-pager
			style="position: relative; top: 50px;"
			per-page="${perPage}"
			total-pages="${totalPages}"
			active-page="${activePage}"
			dir="${dir}"
			@page-change="${action('page change')}"
			@per-page-change="${action('per page change')}"
		>
		</ts-pager>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
