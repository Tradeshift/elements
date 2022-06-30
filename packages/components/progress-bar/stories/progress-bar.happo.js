import '../lib/progress-bar.esm';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-progress-bar'
};

export const Test = () => {
	const properties = {
		done: {
			0: 0,
			5: 5,
			100: 100,
			600: 600
		},
		total: {
			10: 10,
			1000: 1000
		}
	};

	const options = {
		columns: 2
	};

	return createHappoStories('progress-bar', properties, '', options);
};
