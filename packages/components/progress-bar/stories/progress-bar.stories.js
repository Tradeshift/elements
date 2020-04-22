import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.progress-bar';
import readme from '../README.md';

storiesOf('ts-progress-bar', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const indeterminate = boolean('indeterminate', false);
			const total = number('total', 100);
			const done = number('done', 20);
			return html`
				<ts-progress-bar ?indeterminate="${indeterminate}" total="${total}" done="${done}"></ts-progress-bar>
			`;
		},
		{ note: readme }
	);
