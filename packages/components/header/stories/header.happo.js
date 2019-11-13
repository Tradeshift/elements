import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.header';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-header', module).add('test', () => {
	const properties = {
		icon: { 'no icon': '', icon: '/icon.svg' },
		title: { 'no title': '', 'with title': 'Title' }
	};

	return createHappoStories('header', properties, '');
});
