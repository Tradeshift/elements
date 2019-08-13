import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.list-item';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-list-item', module).add('test', () => {
	const properties = {
		dir: { rtl: 'rtl' },
		disabled: { true: true },
		selected: { true: true },
		icon: { 'arrow-up': 'arrow-up' }
	};

	const options = {
		columns: 5,
		persistent_props: {
			title: 'Title sample text',
			subtitle: 'Subtitle sample text',
			selectable: { true: true }
		}
	};
	return createHappoStories('list-item', properties, '', options);
});
