const bs = require('browserstack');

const browserStackCredentials = {
	username: process.env.BROWSER_STACK_USERNAME,
	password: process.env.BROWSER_STACK_ACCESS_KEY
};

try {
	const bsClient = bs.createClient(browserStackCredentials);
	const browsers = [];
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
			browsers.push(
				latest[Math.floor(Math.random() * Math.floor(latest.length))]
			);
			if (previous) {
				browsers.push(
					previous[Math.floor(Math.random() * Math.floor(previous.length))]
				);
			}
		});
		console.log(JSON.stringify(browsers, null, 2));
	});
} catch (e) {
	console.error(e);
	process.exit(1);
}
