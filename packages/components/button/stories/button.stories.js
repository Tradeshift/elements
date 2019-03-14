import { storiesOf } from '@storybook/html';
import '@tradeshift/elements';
import '@tradeshift/elements.button';

storiesOf('ts-button', module)
	.add('type=""', () => {
		const button = document.createElement('ts-button');
		button.innerHTML = 'Default Button';
		return button;
	})
	.add('type="primary"', () => {
		const button = document.createElement('ts-button');
		button.type = 'primary';
		button.innerHTML = 'Primary Button';
		return button;
	})
	.add('type="secondary"', () => {
		const button = document.createElement('ts-button');
		button.type = 'secondary';
		button.innerHTML = 'Secondary Button';
		return button;
	})
	.add('type="text"', () => {
		const button = document.createElement('ts-button');
		button.type = 'text';
		button.innerHTML = 'Text Button';
		return button;
	});
