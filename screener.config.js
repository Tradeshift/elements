module.exports = {
	projectRepo: 'Tradeshift/elements',
	storybookConfigDir: '.storybook',
	storybookStaticDir: './',
	storybookApp: 'html',
	storybookVersion: 4,
	apiKey: process.env.SCREENER_API_KEY,
	resolution: '1024x768',
	excludeRules: [/(Gallery|Attributes)$/],
	browserStack: {
		username: process.env.BROWSERSTACK_USERNAME,
		accessKey: process.env.BROWSERSTACK_KEY,
		maxConcurrent: 5
	},
	browsers: [
		{ browserName: 'chrome' },
		{ browserName: 'firefox' },
		{
			browserName: 'internet explorer',
			version: '11'
		},
		{
			browserName: 'safari',
			version: '11.1'
		},
		{
			browserName: 'microsoftedge',
			version: '17.17134'
		}
	]
};
