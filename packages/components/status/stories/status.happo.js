import '../lib/status.esm';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { STATUS_TYPE } from '../src/utils/constants';

export default {
	title: 'ts-status'
};

export const Test = () => {
	const properties = {
		status: STATUS_TYPE,
		text: {
			text: 'test صصثث'
		},
		dir: { rtl: 'rtl' }
	};

	return createHappoStories('status', properties, '');
};
