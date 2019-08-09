import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.typography';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { variants, colorTypes } from '../src/utils';

storiesOf('ts-typography', module).add('test', () => {
	const properties = {
		variant: variants,
		type: colorTypes
	};

	const options = {
		columns: 2
	};

	return createHappoStories('typography', properties, 'Sample Text', options);
});
