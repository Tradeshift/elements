import { html } from 'lit-html';
import '../lib/icon.esm';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { types, sizes } from '../src/utils';
import { iconList } from '../lib/assets/icons';

export default {
	title: 'ts-icon'
};

export const Test = () => {
	const properties = {
		icon: { 'arrow-up': 'arrow-up' },
		size: {
			[sizes.SMALL]: sizes.SMALL,
			[sizes.LARGE]: sizes.LARGE
		},
		type: {
			[types.PRIMARY]: types.PRIMARY,
			[types.WARNING]: types.WARNING,
			[types.ERROR]: types.ERROR,
			[types.SUCCESS]: types.SUCCESS,
			[types.DISABLED]: types.DISABLED,
			[types.INVERTED]: types.INVERTED,
			[types.SUGGESTED]: types.SUGGESTED
		}
	};

	const options = {
		columns: 4,
		persistent_props: {
			icon: 'download'
		}
	};

	return createHappoStories('icon', properties, '', options);
};

export const TestAllIcons = () => {
	return html`
		<style>
			.render-block {
				flex: 0 0 var(--ts-unit-triple);
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; gap: 1rem;">
			${iconList.map(
				icon =>
					html`<ts-icon
						class="render-block"
						type="${types.PRIMARY}"
						icon="${icon}"
						size="${sizes.EXTRA_LARGE}"
					></ts-icon>`
			)}
		</div>
	`;
};
