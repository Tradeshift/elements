module.exports = {
	projectRepo: 'Tradeshift/elements',
	storybookConfigDir: '.storybook',
	storybookStaticDir: './',
	apiKey: process.env.SCREENER_API_KEY,
	resolution: '1024x768',
	excludeRules: [/^(Gallery|Attributes)$/]
};
