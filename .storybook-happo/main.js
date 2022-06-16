const path = require('path');

module.exports = {
	stories: ['../packages/components/**/*.happo.js'],
	framework: '@storybook/web-components',
	staticDirs: ['../static'],
	features: {
		postcss: false
	},
	webpackFinal: async config => {
		// explicitly set the icons assets folder to correctly resolve it
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
