import '../lib/header.esm';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-header'
};

export const Test = () => {
	const properties = {
		icon: { 'no icon': '', icon: '/icon.svg' },
		title: { 'no title': '', 'with title': 'Title' }
	};

	return createHappoStories('header', properties, '');
};
