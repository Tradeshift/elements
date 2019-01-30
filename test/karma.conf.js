const bsBrowsers = require('./browsers.json');

const commitId = process.env.TRAVIS_COMMIT;

module.exports = config => {
	const customLaunchers = {};
	bsBrowsers.forEach(browserEntry => {
		customLaunchers[
			`bs_${browserEntry.browser}_${browserEntry.os}_${
				browserEntry.browser_version
			}`
				.toLowerCase()
				.replace(' ', '_')
		] = {
			base: 'BrowserStack',
			...browserEntry
		};
	});

	config.set({
		frameworks: ['mocha'],
		files: ['**/test/*.html'],
		reporters: ['mocha'],

		browserStack: {
			username: process.env.BROWSER_STACK_USERNAME,
			accessKey: process.env.BROWSER_STACK_ACCESS_KEY,
			project: '@tradeshift/elements',
			build: commitId
				? `Commit-${commitId.slice(0, commitId.length / 2)}`
				: `${process.env.USER} @ ${new Date().toISOString()}`
		},
		browsers: Object.keys(customLaunchers),
		customLaunchers
	});

	return config;
};
