module.exports = {
	verbose: true,
	plugins: {
		local: {
			disabled: true,
			browsers: ['chrome', 'firefox']
		},
		sauce: {
			browsers: [
				// {
				// 	browserName: 'chrome',
				// 	version: 'latest'
				// },
				// {
				// 	browserName: 'chrome',
				// 	version: 'latest-1'
				// },
				// {
				// 	browserName: 'firefox',
				// 	version: 'latest'
				// },
				// {
				// 	browserName: 'firefox',
				// 	version: 'latest-1'
				// },
				// {
				// 	browserName: 'safari',
				// 	version: 'latest'
				// },
				// {
				// 	browserName: 'safari',
				// 	version: 'latest-1'
				// },
				{
					browserName: 'MicrosoftEdge',
					version: 'latest'
				},
				{
					browserName: 'MicrosoftEdge',
					version: 'latest-1'
				},
				{
					browserName: 'internet explorer',
					version: '11'
				}
			]
		}
	}
};
