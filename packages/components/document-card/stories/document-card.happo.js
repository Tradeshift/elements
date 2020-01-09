import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.document-card';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-document-card', module).add('test', () => {
	const properties = {
		dir: { rtl: 'rtl' },
		selected: { true: true },
		mobileDescription: { mobileDescription: 'Nice phone you have' }
	};

	const options = {
		columns: 2,
		persistent_props: {
			description: 'Subtitle',
			name: 'Title'
		}
	};

	return createHappoStories('document-card', properties, '', options);
});
