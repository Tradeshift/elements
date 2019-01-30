const bs = require('browserstack');
const geminiBaseConfig = require('./gemini.base.json');

const browserStackCredentials = {
	username: process.env.BROWSER_STACK_USERNAME,
	password: process.env.BROWSER_STACK_ACCESS_KEY
};

const getRandom = max => Math.floor(Math.random() * Math.floor(max));

const getBrowserKey = browser =>
	`${browser.os.replace(' ', '')}-${browser.os_version}_${
		browser.browserName
	}-${browser.version}`
		.replace(/[ .]/gi, '-')
		.replace(/-0$/, '')
		.toLowerCase();

try {
	const bsClient = bs.createClient(browserStackCredentials);
	const browsers = {};
	const tmpBrowsers = {};
	bsClient.getBrowsers((error, allBrowsers) => {
		if (error) {
			throw new Error(error);
		}
		allBrowsers.forEach(b => {
			if (b.device) {
				return;
			}

			const { browser, browser_version } = b;

			b.browserName = b.browser;
			delete b.browser;
			b.version = b.browser_version;
			delete b.browser_version;
			delete b.real_mobile;
			delete b.device;

			if (
				browser === 'yandex' ||
				browser === 'opera' ||
				browser_version.includes('beta') ||
				browser_version.includes('Metro') ||
				(browser === 'ie' && browser_version !== '11.0')
			) {
				return;
			}

			tmpBrowsers[browser] = tmpBrowsers[browser] || {};
			tmpBrowsers[browser][browser_version] =
				tmpBrowsers[browser][browser_version] || [];

			tmpBrowsers[browser][browser_version].push(b);
		});
		Object.keys(tmpBrowsers).forEach(browser => {
			const tmpBrowsersArr = Object.values(tmpBrowsers[browser]);
			const latest = tmpBrowsersArr.pop();
			const previous = tmpBrowsersArr.pop();

			const latestBrowser = latest[getRandom(latest.length)];
			browsers[getBrowserKey(latestBrowser)] = {
				desiredCapabilities: {
					...latestBrowser
				}
			};

			if (previous) {
				const previousBrowser = previous[getRandom(previous.length)];
				browsers[getBrowserKey(previousBrowser)] = {
					desiredCapabilities: {
						...previousBrowser
					}
				};
			}
		});
		console.log(
			JSON.stringify(
				{
					...geminiBaseConfig,
					browsers
				},
				null,
				2
			)
		);
	});
} catch (e) {
	console.error(e);
	process.exit(1);
}
