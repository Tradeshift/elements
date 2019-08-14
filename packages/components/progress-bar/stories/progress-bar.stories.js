import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import '@tradeshift/elements.progress-bar';

storiesOf('ts-progress-bar', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const indeterminate = boolean('indeterminate', false);
		const total = number('total', 100);
		const done = number('done', 20);
		return html`
			<ts-progress-bar ?indeterminate="${indeterminate}" total="${total}" done="${done}"></ts-progress-bar>
		`;
	});
