import { configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../packages/components', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs());

configure(loadStories, module);
