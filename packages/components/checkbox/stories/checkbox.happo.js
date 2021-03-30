import '@tradeshift/elements';
import '@tradeshift/elements.checkbox';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-checkbox'
};

export const Test = () => {
	const properties = {
		dir: { rtl: 'rtl' },
		label: { label: 'Checkbox label' },
		disabled: { true: true },
		checked: { true: true }
	};

	const options = {
		columns: 4
	};

	return createHappoStories('checkbox', properties, 'text <a href="#test">slotted link</a>', options);
};
