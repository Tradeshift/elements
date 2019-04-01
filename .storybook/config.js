import { addParameters, configure } from '@storybook/polymer';
import 'happo-plugin-storybook/register';

const req = require.context('../packages/components', true, /\.stories\.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addParameters({
	options: {
		/**
		 * name to display in the top left corner
		 * @type {String}
		 */
		name: 'Tradeshift.elements',
		/**
		 * URL for name in top left corner to link to
		 * @type {String}
		 */
		url: 'https://github.com/Tradeshift/elements',
		/**
		 * show story component as full screen
		 * @type {Boolean}
		 */
		isFullScreen: false,
		/**
		 * display panel that shows a list of stories
		 * @type {Boolean}
		 */
		showNav: true,
		/**
		 * display panel that shows addon configurations
		 * @type {Boolean}
		 */
		showPanel: true,
		/**
		 * where to show the addon panel
		 * @type {('bottom'|'right')}
		 */
		panelPosition: 'bottom',
		/**
		 * sidebar tree animations
		 * @type {Boolean}
		 */
		sidebarAnimations: true
	}
});

configure(loadStories, module);
