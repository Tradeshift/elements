import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.select';
import '@tradeshift/elements/src/vars.css';

export default {
	title: 'ts-select'
};

const items = [
	{ id: 1, title: 'option one' },
	{ id: 2, title: 'option two' },
	{ id: 3, title: 'option three' }
];

const itemsWithIcons = [
	{ id: 1, title: 'option one', icon: 'ada' },
	{ id: 2, title: 'option two', icon: 'ada' },
	{ id: 3, title: 'option three', icon: 'ada' }
];

export const TestSingleSelect = () => {
	return html`
		<style>
			.render-block {
				flex: 0 0 16%;
				height: 400px;
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
			<div class="render-block">
				<p>Simple select</p>
				Closed:
				<ts-select placeholder="Placeholder" .items="${items}"></ts-select>
				<br />
				Opened:
				<ts-select opened placeholder="Placeholder" .items="${items}"></ts-select>
			</div>

			<div class="render-block">
				<p>Simple select with selected value</p>
				Closed:
				<ts-select placeholder="Placeholder" .items="${items}" .selected="${[1]}"></ts-select>
				<br />
				Opened:
				<ts-select opened placeholder="Placeholder" .items="${items}" .selected="${[1]}"></ts-select>
			</div>

			<div class="render-block">
				<p>Disabled select</p>
				Closed:
				<ts-select disabled placeholder="Placeholder" .items="${items}"></ts-select>
				<br />
				Opened:
				<ts-select disabled opened placeholder="Placeholder" .items="${items}"></ts-select>
			</div>

			<div class="render-block">
				<p>Simple select with icons</p>
				Closed:
				<ts-select placeholder="Placeholder" .items="${itemsWithIcons}"></ts-select>
				<br />
				Opened:
				<ts-select opened placeholder="Placeholder" .items="${itemsWithIcons}"></ts-select>
			</div>

			<div class="render-block">
				<p>Simple select with icons and selected value</p>
				Closed:
				<ts-select placeholder="Placeholder" .items="${itemsWithIcons}" .selected="${[1]}"></ts-select>
				<br />
				Opened:
				<ts-select opened placeholder="Placeholder" .items="${itemsWithIcons}" .selected="${[1]}"></ts-select>
			</div>
			<div class="render-block">
				<p>Simple select in loading state</p>
				<ts-select opened placeholder="Placeholder" .items="${itemsWithIcons}" loading></ts-select>
			</div>
		</div>
	`;
};

export const TestMultipleSelect = () => {
	return html`
		<style>
			.render-block {
				flex: 0 0 16%;
				height: 600px;
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
			<div class="render-block">
				<p>Multiselect</p>
				Closed:
				<ts-select multiselect placeholder="Placeholder" .items="${items}"></ts-select>
				<br />
				Opened:
				<ts-select multiselect opened placeholder="Placeholder" .items="${items}"></ts-select>
			</div>

			<div class="render-block">
				<p>Multiselect with selected item</p>
				Closed:
				<ts-select multiselect placeholder="Placeholder" .items="${items}" .selected="${[1]}"></ts-select>
				<br />
				Opened:
				<ts-select multiselect opened placeholder="Placeholder" .items="${items}" .selected="${[1]}"></ts-select>
			</div>

			<div class="render-block">
				<p>Multiselect with selected items</p>
				Closed:
				<ts-select multiselect placeholder="Placeholder" .items="${items}" .selected="${[1, 2]}"></ts-select>
				<br />
				Opened:
				<ts-select multiselect opened placeholder="Placeholder" .items="${items}" .selected="${[1, 2]}"></ts-select>
			</div>

			<div class="render-block">
				<p>RTL Multiselect with selected items</p>
				<ts-select
					dir="rtl"
					multiselect
					opened
					placeholder="Placeholder"
					.items="${items}"
					.selected="${[1, 2]}"
				></ts-select>
			</div>

			<div class="render-block">
				<p>Multiselect without apply selection button</p>
				<ts-select multiselect noapply opened placeholder="Placeholder" .items="${items}"></ts-select>
			</div>

			<div class="render-block">
				<p>Multiselect select in loading state</p>
				<ts-select opened placeholder="Placeholder" .items="${itemsWithIcons}" loading></ts-select>
			</div>
		</div>
	`;
};
