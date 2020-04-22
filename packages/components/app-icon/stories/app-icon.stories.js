import { html, storiesOf } from '@open-wc/demoing-storybook';
import { select, withKnobs } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.app-icon';

import icon from '../../../../static/icon.svg';
import { sizes } from '../src/utils';
import readme from '../README.md';

storiesOf('ts-app-icon', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const size = select(
				'Size',
				{
					default: '',
					...helpers.objectKeysChangeCase(sizes)
				},
				''
			);

			return html`
				<ts-app-icon src="${icon}" size="${size}" alt="icon"> </ts-app-icon>
			`;
		},
		{ notes: readme }
	);
