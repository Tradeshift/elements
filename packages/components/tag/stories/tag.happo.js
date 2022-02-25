import '@tradeshift/elements';
import '@tradeshift/elements.tag';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { types, labels, values } from './constants';

export default {
	title: 'ts-tag'
};

export const Test = () => {
	const properties = {
		dir: { rtl: 'rtl' },
		deletable: { true: true },
		clickable: { true: true },
		locked: { true: true },
		busy: { true: true },
		type: types,
		labels,
		values
	};

	const options = {
		columns: 5
	};

	return createHappoStories('tag', properties, '', options);
};
