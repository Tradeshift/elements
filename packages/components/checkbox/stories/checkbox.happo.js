import '@tradeshift/elements';
import '@tradeshift/elements.checkbox';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-checkbox'
};

export const Test = () => {
	const properties = {
		label: { label: 'Checkbox label' },
		disabled: { true: true },
		checked: { true: true },
		readonly: { true: true },
		dir: { rtl: 'rtl' }
	};

	const options = {
		columns: 4
	};

	return createHappoStories('checkbox', properties, 'text <a href="#test">slotted link</a>', options);
};
