import { html } from 'lit-html';
import { array, boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '../lib/select.esm';
import readme from '../README.md';

export default {
	title: 'ts-select',
	decorators: [withKnobs]
};

const items = [
	{ id: 0, title: 'Item 1' },
	{ id: 1, title: 'Item 2' },
	{ id: 2, title: 'Item 3' },
	{ id: 3, title: 'Item 4' },
	{ id: 4, title: 'Item 5' },
	{ id: 5, title: 'Item 6' },
	{ id: 6, title: 'Item 7' },
	{ id: 7, title: 'Item 8' },
	{ id: 8, title: 'Item 9' }
];

function getKnobs() {
	return {
		disabled: boolean('disabled', false),
		opened: boolean('opened', false),
		placeholder: text('placeholder', 'placeholder'),
		caseSensitive: boolean('case-sensitive', false),
		dir: select('dir', { ltr: 'ltr', rtl: 'rtl' }, 'ltr'),
		loading: boolean('loading', false),
		label: text('label', null),
		helpTextTitle: text('help-text-title', 'Sample help text title which shows only when there are multiple messages'),
		errorTitle: text('error-title', 'Something is wrong with this field value:'),
		helpTextMessages: array('help-text-messages', [
			'Some information to help the user know what is this field about',
			'Some extra information about validation of this field'
		]),
		hasError: boolean('has-error', false),
		errorMessages: array('error-messages', [
			'Something is wrong with the value you put in the field',
			'Maybe you need couple of more characters in there?'
		]),
		translations: object('translations', {
			select: 'Select',
			selected: 'Selected',
			show_all: 'Show all',
			no_items: 'No items',
			view_selection: 'View selection',
			loading: 'Loading...'
		})
	};
}

export const Default = () => {
	const multiselect = boolean('multiselect', false);
	const id = text('id', null);
	const noApplyButton = boolean('no-apply-button', false);
	let selected = array('selected', [3]);
	const withIcons = boolean('with icons', false);

	selected = selected.map(item => Number(item));
	const selectItems = [...items];
	if (withIcons) {
		for (const item of selectItems) {
			item.icon = 'ada';
		}
	}
	const knobs = getKnobs();

	return html`
		<div style="max-width: 500px;">
			<ts-select
				.id="${id}"
				.label="${knobs.label}"
				.dir="${knobs.dir}"
				?disabled="${knobs.disabled}"
				?opened="${knobs.opened}"
				?multiselect="${multiselect}"
				?no-apply-button="${noApplyButton}"
				.placeholder="${knobs.placeholder}"
				.selected="${selected}"
				.items="${selectItems}"
				?case-sensitive="${knobs.caseSensitive}"
				?loading="${knobs.loading}"
				.translations="${knobs.translations}"
				@filter-value-change="${action('"filter-value-change" event being called!')}"
				@select-changed="${action('"select-changed" event being called!')}"
				.helpTextTitle="${knobs.helpTextTitle}"
				.errorTitle="${knobs.errorTitle}"
				.helpTextMessages="${knobs.helpTextMessages}"
				.hasError="${knobs.hasError}"
				.errorMessages="${knobs.errorMessages}"
			></ts-select>
		</div>
	`;
};

Default.story = {
	name: 'default',
	parameters: {
		notes: readme
	}
};

export const CustomFiltering = () => {
	const multiselect = boolean('multiselect', false);
	const noApplyButton = boolean('no-apply-button', false);
	const knobs = getKnobs();

	return html`
		<style>
			li {
				margin-bottom: 10px;
			}
		</style>
		<div style="font-family: 'Open Sans';">
			<div style="max-width: 500px;">
				<ts-select
					id="tsSelect"
					.label="${knobs.label}"
					?disabled="${knobs.disabled}"
					?opened="${knobs.opened}"
					?multiselect="${multiselect}"
					?no-apply-button="${noApplyButton}"
					.placeholder="${knobs.placeholder}"
					.items="${items}"
					?case-sensitive="${knobs.caseSensitive}"
				></ts-select>
			</div>
			<script>
				const tsSelectEl = document.getElementById('tsSelect');
				tsSelectEl.addEventListener('filter-value-change', function(event) {
					const filterValue = event.detail.filterValue;
					tsSelectEl.loading = true;
					window.setTimeout(function() {
						const filteredItems = [
							{ id: 8, title: 'Item 9' },
							{ id: 666, title: filterValue + ' 666' },
							{ id: 777, title: filterValue + ' 777' },
							{ id: 888, title: filterValue + ' 888' },
							{ id: 999, title: filterValue + ' 999' },
						];
						tsSelectEl.items = [
							...tsSelectEl.items,
							...filteredItems.filter(item => !tsSelectEl.items.some(innerItem => innerItem.id === item.id ))
						];
							tsSelectEl.filteredItems = filteredItems;
							tsSelectEl.loading = false;
					}, 1000);
				});
			</script>
			<br/>
			<hr/>
			<h4>How to implement?*</h4>
			<p style="line-height: 20px;">
				You can have custom filtering with the select component and override the default select component filtering.
				<ol>
					<li>Listen to the "filter-value-change" and get the user inputted value in select search input</li>
					<li>Based on the filter value, you can do your own custom filtering including serverside search</li>
					<li>If it is going to be asynchronous, you should set the "loading" property/attribute during that process</li>
					<li>You should set the result list of the filtered items to "filteredItems" property/"filtered-items" attribute and remove the loading prop</li>
					<li>Remember the items list needs to include the filter items as well, so if you search for items from server side remember to add them to items list.</li>
				</ol>
			<i>* You can see the example code in "story" tab.</i>
			</p>
		</div>
	`;
};

CustomFiltering.story = {
	name: 'Custom Filtering',
	parameters: {
		notes: readme
	}
};

export const noApplyButton = () => {
	const knobs = getKnobs();

	return html`
		<style>
			li {
				margin-bottom: 10px;
			}
		</style>
		<div style="font-family: 'Open Sans';">
			<div style="max-width: 500px;">
				<ts-select
					id="tsSelect"
					?disabled="${knobs.disabled}"
					?opened="${knobs.opened}"
					.placeholder="${knobs.placeholder}"
					.items="${items}"
					?case-sensitive="${knobs.caseSensitive}"
					?loading="${knobs.loading}"
					multiselect
					no-apply-button
				></ts-select>
			</div>

			<script>
				const tsSelectEl = document.getElementById('tsSelect');
				tsSelectEl.addEventListener('select-changed', function(event) {
					console.log('select-changed called', event.detail.selected);
				});
			</script>
			<br/>
			<hr/>
			<h4>How does it work?</h4>
			<p style="line-height: 20px;">
				You can make the select component in the multiselect mode to not have the apply selection button.
			this means:
				<ul>
					<li>the item that the user selects or deselects would be applied instantly to the selected items</li>
					<li>'select-changed' will be emitted right after the user select each item instead of only being emitted once the user applied the current selection</li>
				</ul>
			<i>* You can see the example code in "story" tab.</i>
			</p>
		</div>
	`;
};

noApplyButton.story = {
	name: 'Multiselect Without Apply Button',
	parameters: {
		notes: readme
	}
};
