const { RemoteBrowserTarget } = require('happo.io');
const happoPluginStorybook = require('happo-plugin-storybook');

module.exports = {
	project: '@tradeshift/elements',
	apiKey: process.env.HAPPO_API_KEY,
	apiSecret: process.env.HAPPO_API_SECRET,
	targets: {
		chrome: new RemoteBrowserTarget('chrome', {
			viewport: '1024x768'
		}),
		firefox: new RemoteBrowserTarget('firefox', {
			viewport: '1024x768'
		}),
		edge: new RemoteBrowserTarget('edge', {
			viewport: '1024x768'
		}),
		'internet explorer': new RemoteBrowserTarget('internet explorer', {
			viewport: '1024x768'
		}),
		safari: new RemoteBrowserTarget('safari', {
			viewport: '1024x768'
		}),
		'ios-safari': new RemoteBrowserTarget('ios-safari', {
			viewport: '750x1334'
		})
	},
	plugins: [
		happoPluginStorybook({
			staticDir: './static',
			outputDir: './.happo'
		})
	]
};
