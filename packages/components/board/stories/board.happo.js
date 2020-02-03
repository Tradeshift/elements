import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.board';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-board', module).add('test', () => {
	const properties = {
		dir: { rtl: 'rtl' },
		title: { Title: 'Title' }
	};

	const options = {
		columns: 5
	};

	return createHappoStories('board', properties, 'Board', options);
});
