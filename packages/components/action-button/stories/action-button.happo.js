import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.action-button';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { types } from '../src/utils';

storiesOf('ts-action-button', module).add('test', () => {
	const properties = {
		icon: { download: 'download' },
		dir: { rtl: 'rtl' },
		type: types
	};

	const options = {
		columns: 5,
		persistent_props: {
			icon: 'download',
			title: 'Support'
		}
	};

	return createHappoStories('action-button', properties, '', options);
});
