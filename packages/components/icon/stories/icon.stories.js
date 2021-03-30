import { html } from 'lit-html';
import { select, withKnobs } from '@storybook/addon-knobs';
import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import { sizes, types } from '../src/utils';
import icons from '../src/assets/icons';
import readme from '../README.md';

export default {
	title: 'ts-icon',
	decorators: [withKnobs]
};

export const Type = () => {
	const size = select('Size', helpers.objectKeysChangeCase(sizes), sizes.MEDIUM);

	const type = select('Type', helpers.objectKeysChangeCase(types), types.DEFAULT);

	const icon = select('Icon', Object.keys(icons), 'remove');

	return html` <ts-icon type="${type}" icon="${icon}" size="${size}"></ts-icon> `;
};

Type.story = {
	name: 'type',
	parameters: { notes: readme }
};
