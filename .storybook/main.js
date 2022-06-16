const path = require('path');

module.exports = {
	stories: ['../packages/components/**/*.stories.{js,mdx}'],
	features: {
		postcss: false
	},
	addons: [
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
		'@storybook/addon-actions',
		'@storybook/addon-notes',
		'@storybook/addon-viewport'
	],
	webpackFinal: async config => {
		// explicitly set the folder to correctly resolve icons assets
		config.resolve.alias = {
			...config.resolve.alias,
			'@tradeshift/elements.icon/lib/assets/icons': path.resolve(
				__dirname,
				'../packages/components/icon/lib/assets/icons'
			)
		};

		// Return the altered config
		return config;
	}
};
