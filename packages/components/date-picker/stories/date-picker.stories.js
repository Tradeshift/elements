import { html } from 'lit-html';
import { array, boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '@tradeshift/elements.date-picker';
import readme from '../README.md';

export default {
	title: 'ts-date-picker',
	decorators: [withKnobs]
};

export const Default = () => {
	const dir = select(
		'dir',
		{
			ltr: 'ltr',
			rtl: 'rtl'
		},
		'ltr'
	);
	const firstDay = select(
		'first-day',
		{
			0: 0,
			1: 1
		},
		1
	);
	const disabled = boolean('disabled', false);
	const readonly = boolean('readonly', false);
	const opened = boolean('opened', false);
	const required = boolean('required', false);
	const notTypeable = boolean('not-typeable', false);
	const pageDate = text('page-date', null);
	const selectedDate = text('selected-date', '2021-09-10');
	const min = text('min', '2015-09-10');
	const max = text('max', '2025-09-10');
	const label = text('label', 'Label of the date picker');
	const helpTextType = text('help-text-type', 'warning');
	const helpTextTitle = text('help-text-title', 'Please see the following help text:');
	const helpTextMessages = array('help-text-messages', ['First help text', 'Second help text']);
	const errorTitle = text('error-title', 'Please see the following errors:');
	const errorMessages = array('error-messages', ['First error message', 'Second error message']);
	const hasError = boolean('has-error', false);
	const translation = object('translations', {
		placeholder: 'Select date',
		deselectButton: 'Deselect',
		daysAbbreviations: {
			monday: 'Mo',
			tuesday: 'Tu',
			wednesday: 'We',
			thursday: 'Th',
			friday: 'Fr',
			saturday: 'Sa',
			sunday: 'Su'
		},
		monthsAbbreviations: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	});

	return html`
		<div style="max-width: 500px;">
			<ts-date-picker
				id="datepickerId"
				?readonly="${readonly}"
				?disabled="${disabled}"
				?opened="${opened}"
				?required="${required}"
				?notTypeable="${notTypeable}"
				.translations="${translation}"
				page-date="${pageDate}"
				first-day="${firstDay}"
				selected-date="${selectedDate}"
				min="${min}"
				max="${max}"
				label="${label}"
				help-text-type="${helpTextType}"
				help-text-title="${helpTextTitle}"
				.helpTextMessages="${helpTextMessages}"
				?has-error="${hasError}"
				error-title="${errorTitle}"
				.errorMessages="${errorMessages}"
				.dir="${dir}"
				@date-select="${action('date-select')}"
			></ts-date-picker>
		</div>
	`;
};

Default.story = {
	name: 'default',
	parameters: {
		notes: readme
	}
};
