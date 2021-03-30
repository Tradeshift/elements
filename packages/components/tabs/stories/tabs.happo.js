import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.tabs';
import '@tradeshift/elements.tab';

export default {
	title: 'ts-tabs'
};

export const Test = () => {
	const slottedTabs = html`
		<ts-tab label="tab1" icon="arrow-up" counter="25">
			<h2>tab1 content</h2>
		</ts-tab>
		<ts-tab label="tab 2" icon="ada" selected counter="25">
			<h2>tab 2 content</h2>
		</ts-tab>
		<ts-tab label="tab 3" icon="ada">
			<h2>tab 3 content</h2>
		</ts-tab>
		<ts-tab label="tab 4">
			<h2>tab 4 content</h2>
		</ts-tab>
		<ts-tab counter="250" label="tab 5">
			<h2>tab 5 content</h2>
		</ts-tab>
	`;

	return html`
		<h1>dir</h1>
		<ts-tabs> ${slottedTabs} </ts-tabs>
		<ts-tabs dir="rtl"> ${slottedTabs} </ts-tabs>
	`;
};
