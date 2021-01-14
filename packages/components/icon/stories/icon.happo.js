import '@tradeshift/elements';
import '@tradeshift/elements.icon';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { types, sizes } from '../src/utils';

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
