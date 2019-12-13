import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.status';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { STATUS_TYPE } from '../src/utils/constants';

storiesOf('ts-status', module).add('test', () => {
	const properties = {
		status: STATUS_TYPE,
		text: {
			text: 'test صصثث'
		},
		dir: { rtl: 'rtl' }
	};

	return createHappoStories('status', properties, '');
});
