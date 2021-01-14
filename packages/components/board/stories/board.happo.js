import '@tradeshift/elements';
import '@tradeshift/elements.board';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-board'
};

export const Test = () => {
	const properties = {
		dir: { rtl: 'rtl' },
		title: { Title: 'Title' }
	};

	const options = {
		columns: 5
	};

	return createHappoStories('board', properties, 'Board', options);
};
