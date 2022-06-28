const { RemoteBrowserTarget } = require('happo.io');
const happoPluginStorybook = require('happo-plugin-storybook');

module.exports = {
	project: '@tradeshift/elements',
	apiKey: process.env.HAPPO_API_KEY,
	apiSecret: process.env.HAPPO_API_SECRET,
	targets: {
		chrome: new RemoteBrowserTarget('chrome', {
			viewport: '1200x1200',
			maxHeight: 10000
		}),
		firefox: new RemoteBrowserTarget('firefox', {
			viewport: '1200x1200',
			maxHeight: 10000
		}),
		edge: new RemoteBrowserTarget('edge', {
			viewport: '1200x1200',
			maxHeight: 10000
		})

		// happo.io is running Safari v10.0, which doesn't support CSS Grid,
		// and it's not supported by Tradeshift officially.

		// Until this is fixed, they will not be used for screenshot testing.

		// safari: new RemoteBrowserTarget('safari', {
		// 	viewport: '1024x768'
		// }),
		// 'ios-safari': new RemoteBrowserTarget('ios-safari', {
		// 	viewport: '750x1334'
		// })
	},
	plugins: [
		happoPluginStorybook({
			configDir: './.storybook-happo',
			outputDir: './.happo'
		})
	]
};
