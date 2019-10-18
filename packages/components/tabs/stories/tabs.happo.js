import { html, storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.tabs';
import '@tradeshift/elements.tab';

import { createHappoStories } from '../../../../.storybook-happo/utils';
import { ifDefined } from 'lit-html/directives/if-defined';

storiesOf('ts-tabs', module).add('test', () => {
	const properties = {
		dir: {
			rtl: 'rtl',
			ltr: 'ltr'
		}
	};

	const options = {
		columns: 1
	};

	const tabs = [
		{ label: 'One', icon: 'arrow-up' },
		{ label: 'Two', counter: 12 },
		{ label: 'Three' },
		{ label: 'Four' },
		{ label: 'Five', icon: 'ada', counter: 9, selected: true },
		{ label: 'Six' }
	];

	const slottedTabs = tabs.map(
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
	);
	return createHappoStories('tabs', properties, slottedTabs, options);
});
