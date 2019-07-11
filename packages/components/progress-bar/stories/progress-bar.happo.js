import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.progress-bar';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-progress-bar', module).add('test', () => {
	const properties = {
		done: {
			'0': 0,
			'5': 5,
			'100': 100,
			'600': 600
		},
		total: {
			'10': 10,
			'1000': 1000
		}
	};

	const options = {
		columns: 2
	};

	return createHappoStories('progress-bar', properties, '', options);
});
