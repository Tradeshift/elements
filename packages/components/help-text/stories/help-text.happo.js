import '@tradeshift/elements';
import '@tradeshift/elements.help-text';

import { createHappoStories } from '../../../../.storybook-happo/utils';

export default {
	title: 'ts-help-text'
};

export const Test = () => {
	const properties = {
		title: { title: 'Title message' },
		type: { error: 'error' },
		rtl: { true: true }
	};

	const options = {
		columns: 3,
		persistent_props: {
			messages: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur culpa doloremque enim est illum.',
				'Sit amet, consectetur dolor elit. 2',
				'Amet, aspernatur autem consectetur consequun 3'
			]
		}
	};

	return createHappoStories('help-text', properties, '', options);
};
