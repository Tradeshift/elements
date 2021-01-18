import { html } from 'lit-html';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

import '@tradeshift/elements.board';
import readme from '../README.md';

export default {
	title: 'ts-board',
	decorators: [withKnobs]
};

export const Default = () => {
	const dir = radios('dir', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
	const title = text('data-title', 'My board');
	const mainDiv = document.createElement('div');
	mainDiv.innerHTML = text('Put any html inside the board', '<h3>Content</h3>');
	return html`
		<ts-board dir="${dir}" data-title="${title}">
			${mainDiv}
		</ts-board>
	`;
};

Default.story = {
	name: 'default',

	parameters: {
		notes: readme,
		knobs: { escapeHTML: false }
	}
};
