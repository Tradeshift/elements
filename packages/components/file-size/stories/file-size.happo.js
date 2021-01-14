import '@tradeshift/elements';
import '@tradeshift/elements.file-size';
import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-file-size'
};

export const Test = () => {
	const properties = {
		size: { small: 12345, medium: 12345678, large: 9999 * 1234567 },
		decimalPoint: {
			zero: 0,
			one: 1,
			two: 2
		},
		variant: {
			default: 'default',
			title: 'title',
			subtitle: 'subtitle'
		},
		type: {
			default: 'default',
			danger: 'danger',
			primary: 'primary',
			warning: 'warning',
			success: 'success',
			disabled: 'disabled'
		}
	};

	const options = {
		columns: 4,
		persistent_props: {
			size: 123456789
		}
	};
	return createHappoStories('file-size', properties, 'Button', options);
};
