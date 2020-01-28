import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.app-icon';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { sizes } from '../src/utils';

storiesOf('ts-app-icon', module).add('test', () => {
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
});
