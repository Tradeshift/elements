var travis = process.env.TRAVIS_BRANCH === 'master';

module.exports = {
	projectRepo: 'Tradeshift/elements',
	baseBranch: 'master',
	storybookConfigDir: '.storybook',
	storybookStaticDir: './static',
	storybookApp: 'html',
	storybookVersion: 4,
	apiKey: process.env.SCREENER_API_KEY,
	resolution: '1024x768',
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
		travis && {
			browserName: 'safari',
			version: '11.1'
		},
		travis && {
			browserName: 'microsoftedge',
			version: '17.17134'
		}
	].filter(Boolean)
};
