import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.typography';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { variants, colorTypes } from '../src/utils';

storiesOf('ts-typography', module).add('test', () => {
	const properties = {
		variant: variants,
		color: colorTypes
	};

	return createHappoStories('typography', properties, 'Sample Text', { columns: 2 });
});
