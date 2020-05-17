import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, radios } from '@storybook/addon-knobs';

import '@tradeshift/elements.board';
import readme from '../README.md';

storiesOf('ts-board', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const dir = radios('dir', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
			const title = text('data-title', 'My board');
			const mainDiv = document.createElement('div');
			mainDiv.innerHTML = text('Put any html inside the board', '<h3>Content</h3>');
			return html`
				<ts-board dir="${dir}" data-title="${title}">
					${mainDiv}
				</ts-board>
			`;
		},
		{
			notes: readme,
			knobs: { escapeHTML: false }
		}
	);
