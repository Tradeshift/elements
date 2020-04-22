import { html, storiesOf } from '@open-wc/demoing-storybook';
import { select, withKnobs } from '@storybook/addon-knobs';
import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import { sizes, types } from '../src/utils';
import icons from '../src/assets/icons';
import readme from '../README.md';

storiesOf('ts-icon', module)
	.addDecorator(withKnobs)
	.add(
		'type',
		() => {
			const size = select('Size', helpers.objectKeysChangeCase(sizes), sizes.MEDIUM);

			const type = select('Type', helpers.objectKeysChangeCase(types), types.DEFAULT);

			const icon = select('Icon', Object.keys(icons), 'remove');

			return html`
				<ts-icon type="${type}" icon="${icon}" size="${size}"></ts-icon>
			`;
		},
		{ notes: readme }
	);
