import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, number, radios, text, withKnobs } from '@storybook/addon-knobs';
import { decorate } from '@storybook/addon-actions';

import '@tradeshift/elements.search';
import readme from '../README.md';

storiesOf('ts-search', module)
	.addParameters({ options: { enableShortcuts: false } })
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const placeholder = text('Placeholder', 'Search here...');
			const dir = radios('Direction', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
			const focused = boolean('Focused', false);
			const idleTime = number('Idle time', 500);
			const value = text('Value', '');
			const eventValue = decorate([args => [args[0].detail]]);
			return html`
				<ts-search
					placeholder="${placeholder}"
					dir="${dir}"
					?focused="${focused}"
					idle-time="${idleTime}"
					value="${value}"
					@idle="${eventValue.action('value after idle timeout')}"
					@search="${eventValue.action('value from search event')}"
				>
				</ts-search>
			`;
		},
		{ notes: readme }
	);
