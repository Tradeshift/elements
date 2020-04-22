import { html, storiesOf } from '@open-wc/demoing-storybook';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { decorate } from '@storybook/addon-actions';

import '@tradeshift/elements.pager';
import readme from '../README.md';

storiesOf('ts-pager', module)
	.addParameters({ options: { enableShortcuts: false } })
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const totalPages = number('total-pages', 18);
			const activePage = number('active-page', 3);
			const perPage = select('per-page', [10, 20, 30, 40, 50], 20);
			const dir = select('dir', ['ltr', 'rtl'], 'ltr');
			const eventValue = decorate([args => [args[0].detail]]);

			return html`
				<ts-pager
					style="position: relative; top: 50px;"
					per-page="${perPage}"
					total-pages="${totalPages}"
					active-page="${activePage}"
					dir="${dir}"
					@page-change="${eventValue.action('page change')}"
					@per-page-change="${eventValue.action('per page change')}"
				>
				</ts-pager>
			`;
		},
		{ notes: readme }
	);
