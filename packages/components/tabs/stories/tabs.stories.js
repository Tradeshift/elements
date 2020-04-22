import { html, storiesOf } from '@open-wc/demoing-storybook';
import { object, radios, withKnobs } from '@storybook/addon-knobs';
import { ifDefined } from 'lit-html/directives/if-defined';

import '@tradeshift/elements.tabs';
import '@tradeshift/elements.tab';
import readme from '../README.md';

storiesOf('ts-tabs', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const dir = radios('dir', ['ltr', 'rtl'], 'ltr');

			const tabsData = [
				{ label: 'One', icon: 'ada' },
				{ label: 'Two', counter: 12 },
				{ label: 'Three' },
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
							>
								<h1>${tabData.label} content</h1>
							</ts-tab>
						`
					)}
				</ts-tabs>
			`;
		},
		{ note: readme }
	);
