import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text } from '@storybook/addon-knobs';

import '@tradeshift/elements.board';

storiesOf('ts-board', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const dir = text('ltr', 'Dir');
		const title = text('My Board', 'Title');
		const content = text('Put any html inside the board', 'Content');

		return html`
			<ts-board dir="${dir}" data-title="${title}">
				${content}
			</ts-board>
		`;
	});
