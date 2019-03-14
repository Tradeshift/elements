import { storiesOf } from '@storybook/html';
import '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';

storiesOf('ts-button-group', module).add('default', () => {
	const buttonGroup = document.createElement('ts-button-group');
	['Primary', 'Secondary', 'Secondary', 'Secondary', 'Text', 'Text'].forEach(
		type => {
			const button = document.createElement('ts-button');
			button.type = type.toLowerCase();
			button.innerHTML = `${type} Button – Grouped`;
			buttonGroup.appendChild(button);
		}
	);
	return buttonGroup;
});
