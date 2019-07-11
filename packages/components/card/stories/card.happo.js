import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.card';

import { createHappoStories, createComponent } from '../../../../.storybook-happo/utils';

import { types, sizes, orientations } from '../src/utils';

storiesOf('ts-card', module).add('test', () => {
	const properties = {
		noPadding: { true: true },
		rtl: { true: true },
		orientation: {
			HORIZONTAL: orientations.HORIZONTAL,
			VERTICAL: orientations.VERTICAL
		},
		size: sizes,
		type: types
	};

	const div1 = createComponent('div', '1', [], true);
	const div2 = createComponent('div', '2', [], true);
	const div3 = createComponent('div', '3', [], true);
	const content = createComponent('div', '', [], true);
	content.appendChild(div1);
	content.appendChild(div2);
	content.appendChild(div3);

	return createHappoStories('card', properties, content.innerHTML, { columns: 5 });
});
