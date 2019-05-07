import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';

storiesOf('ts-button-group', module).add(
	'default',
	() => html`
		<ts-button-group>
			${['Primary', 'Secondary', 'Secondary', 'Secondary', 'Text', 'Text'].map(
				type => html`
					<ts-button type=${type.toLowerCase()}
						>${type} Button – Grouped</ts-button
					>
				`
			)}
		</ts-button-group>
	`
);
