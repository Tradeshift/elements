import { configure } from '@storybook/polymer';
import 'happo-plugin-storybook/register';
import '@storybook/addon-console';

const req = require.context('../packages/components', true, /\.happo\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
