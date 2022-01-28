import { html } from 'lit-html';
import { withKnobs } from '@storybook/addon-knobs';

import readme from '../README.md';

export default {
	title: 'ts-tab',
	decorators: [withKnobs]
};

export const Default = () => {
	return html`
		<h4>You can see the Readme file under notes tab. For the examples, please see the "tabs" component story.</h4>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
