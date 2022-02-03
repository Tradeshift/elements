import { html } from 'lit-html';
import { object, radios, withKnobs } from '@storybook/addon-knobs';
import { ifDefined } from 'lit-html/directives/if-defined';

import '@tradeshift/elements.tabs';
import '@tradeshift/elements.tab';
import readme from '../README.md';

export default {
	title: 'ts-tabs',
	decorators: [withKnobs]
};

export const Default = () => {
	const dir = radios('dir', ['ltr', 'rtl'], 'ltr');

	const tabsData = [
		{ label: 'One', icon: 'ada' },
		{ label: 'Two', counter: 12 },
		{ label: 'Three', id: 'the-third-one' },
		{ label: 'Four', selected: true },
		{ label: 'Five', icon: 'ada', counter: 9 },
		{ label: 'Six' }
	];

	const tabs = object('Slotted tabs data', tabsData);
	return html`
		<ts-tabs dir="${dir}">
			${tabs.map(
				tabData => html`
					<ts-tab
						label="${tabData.label}"
						icon="${ifDefined(tabData.icon)}"
						?selected="${tabData.selected}"
						counter="${ifDefined(tabData.counter)}"
						id="${ifDefined(tabData.id)}"
					>
						<h1>${tabData.label} content</h1>
					</ts-tab>
				`
			)}
		</ts-tabs>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
