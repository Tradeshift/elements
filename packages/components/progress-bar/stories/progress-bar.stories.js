import { html } from 'lit-html';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.progress-bar';
import readme from '../README.md';

export default {
	title: 'ts-progress-bar',
	decorators: [withKnobs]
};

export const Default = () => {
	const indeterminate = boolean('indeterminate', false);
	const total = number('total', 100);
	const done = number('done', 20);
	return html`
		<ts-progress-bar ?indeterminate="${indeterminate}" total="${total}" done="${done}"></ts-progress-bar>
	`;
};

Default.story = {
	name: 'default',
	parameters: { note: readme }
};
