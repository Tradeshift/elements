export default {
	'local-thing': {
		url: 'https://hub-cloud.browserstack.com/wd/hub',
		project: '@tradeshift/elements',

		force: 'true',
		forceAutomate: 'true',
		forceLocal: 'true',

		acceptSslCerts: 'true',

		activeBrowsers: [
			{
				browserName: 'ie',
				version: '11'
			}
		]
	},

	test_framework: 'mocha',
	test_path: 'test/index.html',
	browsers: ['chrome_latest'],


	'x-browsers': [
		'chrome_previous',
		'chrome_latest',
		'firefox_previous',
		'firefox_latest',
		'safari_previous',
		'safari_latest',
		'edge_previous',
		'edge_latest',
		'ie_11'
	]
};
