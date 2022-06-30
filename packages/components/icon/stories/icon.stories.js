import { html } from 'lit-html';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { helpers } from '@tradeshift/elements';
import '../lib/icon.esm';

import { sizes, types } from '../src/utils';
import { iconList } from '../lib/assets/icons';
import readme from '../README.md';

export default {
	title: 'ts-icon',
	decorators: [withKnobs]
};

export const Type = () => {
	const size = select('Size', helpers.objectKeysChangeCase(sizes), sizes.MEDIUM);

	const type = select('Type', helpers.objectKeysChangeCase(types), types.DEFAULT);

	const icon = select('Icon', iconList, 'remove');

	const src = text('src', ''); // example: './static/media/static/icon.svg'

	return html`<ts-icon type="${type}" icon="${icon}" size="${size}" src="${src}"></ts-icon>`;
};

Type.story = {
	name: 'type',
	parameters: { notes: readme }
};

export const AllIcons = () => {
	const size = select('Size', helpers.objectKeysChangeCase(sizes), sizes.MEDIUM);

	const type = select('Type', helpers.objectKeysChangeCase(types), types.DEFAULT);

	return html`<style>
			.block {
				align-items: center;
				border-radius: var(--ts-radius);
				box-shadow: var(--ts-boxshadow-border-primary);
				display: flex;
				flex: 0 0 8rem;
				flex-direction: column;
				height: 8rem;
				justify-content: space-around;
				padding: var(--ts-unit);
			}
			.block:hover {
				box-shadow: var(--ts-boxshadow-border-hover);
			}
		</style>
		<div style="display: flex; flex-wrap: wrap; gap: var(--ts-unit-quarter);">
			${iconList.map(
				icon => html`<div class="block">
					<ts-icon type="${type}" icon="${icon}" size="${size}"></ts-icon>
					<span>${icon}</span>
				</div>`
			)}
		</div>`;
};

AllIcons.story = {
	name: 'all icons',
	parameters: { notes: readme }
};
