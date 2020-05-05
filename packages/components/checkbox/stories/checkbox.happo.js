import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.checkbox';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-checkbox', module).add('test', () => {
	const properties = {
		dir: { rtl: 'rtl' },
		label: { label: 'Checkbox label' },
		disabled: { true: true },
		checked: { true: true }
	};

	const options = {
		columns: 4
	};

	return createHappoStories('checkbox', properties, 'Checkbox', options);
});
