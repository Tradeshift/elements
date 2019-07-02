import { storiesOf } from '@storybook/html';
import '@tradeshift/elements';
import '@tradeshift/elements.{{kebabCase name}}';

storiesOf('ts-{{kebabCase name}}', module)
	.add('type=""', () => {
		const {{camelCase name}} = document.createElement('ts-{{kebabCase name}}');
		return {{camelCase name}};
	})
