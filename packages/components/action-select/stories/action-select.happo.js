import { html } from 'lit-html';
import '../lib/action-select.esm';

export default {
	title: 'ts-action-select'
};

const items = [
	{ id: 1, title: 'option one' },
	{ id: 2, title: 'option two' },
	{ id: 3, title: 'option three' }
];

const itemsWithIcons = [
	{ id: 1, title: 'option one', icon: 'ada' },
	{ id: 2, title: 'option two', icon: 'apps' },
	{ id: 3, title: 'option three', icon: 'company-profile' }
];

export const TestSingleSelect = () => {
	return html`
		<style>
			.render-block {
				flex: 0 0 19%;
				height: 400px;
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
			<div class="render-block">
				<p>Simple action select</p>
				<ts-action-select opened .items="${items}"></ts-action-select>
			</div>

			<div class="render-block">
				<p>Action select with custom anchor</p>
				<ts-action-select opened .items="${items}"><button>Button</button></ts-action-select>
			</div>

			<div class="render-block">
				<p>Disabled action select</p>
				<ts-action-select opened .items="${items}" disabled></ts-action-select>
			</div>

			<div class="render-block">
				<p>RTL Action select with icons</p>
				<ts-action-select opened .items="${itemsWithIcons}" dir="rtl"></ts-action-select>
			</div>

			<div class="render-block">
				<p>Action select with icons</p>
				<ts-action-select opened .items="${itemsWithIcons}"></ts-action-select>
			</div>
		</div>
	`;
};
