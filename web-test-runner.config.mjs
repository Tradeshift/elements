import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
	rootDir: '.',
	files: ['packages/components/*/test/*.test.js'],
	nodeResolve: true,
	browsers: [playwrightLauncher({ product: 'chromium' })],
	concurrency: 4,
	testFramework: {
		config: {
			ui: 'bdd',
			timeout: 5000
		}
	}
};
