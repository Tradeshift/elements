import '@tradeshift/elements';
import '@tradeshift/elements.search';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-search'
};

export const Test = () => {
	const properties = {
		placeholder: { default: '', custom: 'Please, type here' },
		value: { default: '', custom: 'some value' },
		dir: { rtl: 'rtl' },
		focused: { true: true }
	};

	const options = {
		columns: 4
	};

	return createHappoStories('search', properties, '', options);
};
