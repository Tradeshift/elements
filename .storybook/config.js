import { configure } from '@storybook/html';
import 'happo-plugin-storybook/register';

const req = require.context('../packages/components', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
