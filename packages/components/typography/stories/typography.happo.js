import '../lib/typography.esm';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { variants, colorTypes } from '../src/utils';

export default {
	title: 'ts-typography'
};

export const Test = () => {
	const properties = {
		variant: variants,
		type: colorTypes
	};

	const options = {
		columns: 2
	};

	return createHappoStories('typography', properties, 'Sample Text', options);
};
