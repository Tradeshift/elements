module.exports = {
	stories: ['../packages/components/**/*.happo.js'],
	framework: '@storybook/web-components',
	staticDirs: ['../static'],
	features: {
		postcss: false
	}
};
