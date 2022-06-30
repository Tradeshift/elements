import { html } from 'lit-html';
import '../lib/select.esm';

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
				<ts-select
					placeholder="Placeholder"
					.items="${items}"
					help-text-title="Lorem ipsum dolor sit amet"
					help-text-messages='["consectetur adipisicing elit","Asperiores commodi debitis dolor, dolorem et inventore iste minima modi perspiciatis quas quibusdam quisquam quo reiciendis sapiente, sed?"]'
				>
					<label slot="label">Closed:</label>
				</ts-select>
				<br />
				<ts-select opened placeholder="Placeholder" .items="${items}">
					<label slot="label">Opened:</label>
				</ts-select>
			</div>

			<div class="render-block">
				<p>Simple select with selected value</p>
				<ts-select label="Closed:" placeholder="Placeholder" .items="${items}" .selected="${[1]}"></ts-select>
				<br />
				<ts-select label="Opened:" opened placeholder="Placeholder" .items="${items}" .selected="${[1]}"></ts-select>
			</div>

			<div class="render-block">
				<p>Disabled select</p>
				<ts-select
					label="Closed:"
					disabled
					placeholder="Placeholder"
					.items="${items}"
					help-text-title="Lorem ipsum dolor sit amet"
					help-text-messages='["consectetur adipisicing elit","Asperiores commodi debitis dolor, dolorem et inventore iste minima modi perspiciatis quas quibusdam quisquam quo reiciendis sapiente, sed?"]'
				></ts-select>
				<br />
				<ts-select label="Opened:" disabled opened placeholder="Placeholder" .items="${items}"></ts-select>
			</div>

			<div class="render-block">
				<p>Simple select with icons</p>
				<ts-select
					label="Closed:"
					placeholder="Placeholder"
					.items="${itemsWithIcons}"
					has-error
					error-title="Lorem ipsum dolor sit amet"
					error-messages='["consectetur adipisicing elit","Asperiores commodi debitis dolor, dolorem et inventore iste minima modi perspiciatis quas quibusdam quisquam quo reiciendis sapiente, sed?"]'
				></ts-select>
				<br />
				<ts-select label="Opened:" opened placeholder="Placeholder" .items="${itemsWithIcons}"></ts-select>
			</div>

			<div class="render-block">
				<p>Simple select with icons and selected value</p>
				<ts-select label="Closed:" placeholder="Placeholder" .items="${itemsWithIcons}" .selected="${[1]}"></ts-select>
				<br />
				<ts-select
					label="Opened:"
					opened
					placeholder="Placeholder"
					.items="${itemsWithIcons}"
					.selected="${[1]}"
				></ts-select>
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
				<ts-select
					label="Closed:"
					multiselect
					placeholder="Placeholder"
					.items="${items}"
					error-title="Lorem ipsum dolor sit amet"
					error-messages='["consectetur adipisicing elit","Asperiores commodi debitis dolor, dolorem et inventore iste minima modi perspiciatis quas quibusdam quisquam quo reiciendis sapiente, sed?"]'
				></ts-select>
				<br />
				<ts-select label="Opened:" multiselect opened placeholder="Placeholder" .items="${items}"></ts-select>
			</div>

			<div class="render-block">
				<p>Multiselect with selected item</p>
				<ts-select
					label="Closed:"
					multiselect
					placeholder="Placeholder"
					.items="${items}"
					.selected="${[1]}"
				></ts-select>
				<br />
				<ts-select
					label="Opened:"
					multiselect
					opened
					placeholder="Placeholder"
					.items="${items}"
					.selected="${[1]}"
				></ts-select>
			</div>

			<div class="render-block">
				<p>Multiselect with selected items</p>
				<ts-select
					label="Closed:"
					multiselect
					placeholder="Placeholder"
					.items="${items}"
					.selected="${[1, 2]}"
				></ts-select>
				<br />
				<ts-select
					label="Opened:"
					multiselect
					opened
					placeholder="Placeholder"
					.items="${items}"
					.selected="${[1, 2]}"
				></ts-select>
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
