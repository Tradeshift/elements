import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.button';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { sizes, types } from '../src/utils';

storiesOf('ts-button', module).add('test', () => {
	const properties = {
		icon: { 'arrow-up': 'arrow-up' },
		disabled: { true: true },
		busy: { true: true },
		size: sizes,
		type: types
	};
	return createHappoStories('button', properties, 'Button', { columns: 5 });
});
