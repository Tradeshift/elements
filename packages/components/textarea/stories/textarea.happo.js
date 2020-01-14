import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.textarea';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-textarea', module).add('test', () => {
	const properties = {
		dir: { rtl: 'rtl' },
		disabled: { true: true }
	};

	const options = {
		persistent_props: {
			title: 'Text',
			value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		}
	};

	return createHappoStories('textarea', properties, '', options);
});
