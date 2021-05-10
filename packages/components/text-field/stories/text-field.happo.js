import '@tradeshift/elements';
import '@tradeshift/elements.text-field';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-text-field'
};

export const Test = () => {
	const properties = {
		disabled: { true: true },
		required: { true: true },
		readonly: { true: true },
		multiline: { true: true },
		dir: { rtl: 'rtl' },
		hasError: { true: true },
		value: { value: 'Sample value' }
	};

	const options = {
		columns: 6,
		persistent_props: {
			label: 'Label Example',
			placeholder: 'Placeholder Example',
			helpTextMessages: ['help text messages'],
			errorMessages: ['first error', 'second error'],
			errorTitle: 'Something is wrong'
		}
	};

	return createHappoStories('text-field', properties, '', options);
};
