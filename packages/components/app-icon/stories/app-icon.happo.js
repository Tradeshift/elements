import '@tradeshift/elements';
import '@tradeshift/elements.app-icon';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { sizes } from '../src/utils';

export default {
	title: 'ts-app-icon'
};

export const Test = () => {
	const properties = {
		src: { icon: '/icon.svg' },
		size: {
			default: '',
			[sizes.LARGE]: sizes.LARGE
		}
	};

	const options = {
		columns: 2,
		persistent_props: {
			src: '/icon.svg'
		}
	};

	return createHappoStories('app-icon', properties, '', options);
};
