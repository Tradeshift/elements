import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.help-text';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-help-text', module).add('test', () => {
	const properties = {
		rtl: { true: true },
		title: { title: 'Title message' },
		messages: {
			multipleMessage: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur deserunt excepturi expedita maiores natus, perferendis. Alias assumenda delectus eveniet illo illum, ipsa, laborum ratione reiciendis repellat repellendus totam voluptates!1',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. 2',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aspernatur autem consectetur consequuntur dolores dolorum, ducimus exercitationem fuga illum neque nulla placeat provident quas quo suscipit vitae voluptatem voluptates voluptatum. 3'
			]
		},
		size: {
			full: 'full',
			medium: 'medium',
			small: 'small'
		}
	};

	const options = {
		columns: 4,
		persistent_props: {
			messages: [
				'Some very very long long help text to give user more information about the input that they need to provide'
			]
		}
	};

	return createHappoStories('help-text', properties, '', options);
});
