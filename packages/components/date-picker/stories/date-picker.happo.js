import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.date-picker';
import '@tradeshift/elements/src/vars.css';

export default {
	title: 'ts-date-picker'
};

export const TestDatePickerSuite1 = () => {
	return html`
		<style>
			.render-block {
				flex: 0 0 19%;
				height: 400px;
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
			<div class="render-block">
				<p>Date picker</p>
				<div style="margin-bottom: 400px">
					Closed:
					<ts-date-picker></ts-date-picker>
				</div>

				<div>
					Opened:
					<ts-date-picker opened page-date="2001-04-03"></ts-date-picker>
				</div>
			</div>

			<div class="render-block">
				<p>Date picker with selected date</p>
				<div style="margin-bottom: 400px">
					Closed:
					<ts-date-picker selected-date="2021-05-03"></ts-date-picker>
				</div>

				<div>
					Opened:
					<ts-date-picker opened selected-date="2021-05-03"></ts-date-picker>
				</div>
			</div>

			<div class="render-block">
				<p>Disabled date picker</p>
				<div style="margin-bottom: 400px">
					Without selected date:
					<ts-date-picker disabled></ts-date-picker>
				</div>

				<div>
					With selected date:
					<ts-date-picker disabled selected-date="2021-05-03"></ts-date-picker>
				</div>
			</div>
		</div>
	`;
};

export const TestDatePickerSuite2 = () => {
	const translations = {
		placeholder: 'Custom placeholder',
		daysAbbreviations: {
			monday: 'M1',
			tuesday: 'T2',
			wednesday: 'W3',
			thursday: 'T4',
			friday: 'F5',
			saturday: 'S6',
			sunday: 'S0'
		},
		monthsAbbreviations: ['J01', 'F02', 'M03', 'A04', 'M05', 'J06', 'J07', 'A08', 'S09', 'O10', 'N11', 'D12']
	};
	return html`
		<style>
			.render-block {
				flex: 0 0 19%;
				height: 600px;
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
			<div class="render-block">
				<p>Page Date</p>
				<div style="margin-bottom: 400px">
					without selected date it should show 2021-04:
					<ts-date-picker opened page-date="2021-04-03"></ts-date-picker>
				</div>
				<div>
					With selected date (2021-05-03) it should ignore page date and show (2021-05)
					<ts-date-picker opened page-date="2021-04-03" selected-date="2021-05-03"></ts-date-picker>
				</div>
			</div>

			<div class="render-block">
				<p>required</p>
				<div style="margin-bottom: 400px">
					Without selected date:
					<ts-date-picker opened required label="is required date" page-date="2021-04-03"></ts-date-picker>
				</div>

				<div>
					With selected date:
					<ts-date-picker opened required label="is required date" selected-date="2021-04-03"></ts-date-picker>
				</div>
			</div>

			<div class="render-block">
				<p>Translations</p>
				<div style="margin-bottom: 400px">
					<ts-date-picker opened .translations="${translations}" selected-date="2021-05-03"></ts-date-picker>
				</div>
				<p>first day: 0 = sunday</p>
				<div style="margin-bottom: 400px">
					<ts-date-picker opened first-day="0" page-date="2021-04-03"></ts-date-picker>
				</div>
			</div>
		</div>
	`;
};

export const TestDatePickerSuite3 = () => {
	const isDisabledDate = date => {
		return [0, 6].includes(date.getDay());
	};
	return html`
		<style>
			.render-block {
				flex: 0 0 19%;
				height: 600px;
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
			<div class="render-block">
				<p>Min & Max</p>
				<div style="margin-bottom: 400px">
					Min date:
					<ts-date-picker opened page-date="2021-04-03" min="2021-04-15"></ts-date-picker>
				</div>
				<div>
					Max date:
					<ts-date-picker opened page-date="2021-04-03" max="2021-04-15"></ts-date-picker>
				</div>
			</div>

			<div class="render-block">
				<p>Text field props</p>
				<div style="margin-bottom: 400px">
					help text
					<ts-date-picker
						label="Custom label for date picker"
						help-text-title="Custom Help Text Title"
						help-text-messages='["first help text", "second help text"]'
					></ts-date-picker>
				</div>

				<div>
					errors:
					<!-- FIXME: there's a big in text field which won't show the error unless you have help text-->
					<ts-date-picker
						label="Custom label for date picker"
						help-text-messages="[]"
						error-title="Test the Error title"
						error-messages='["Some error to help", "Other error to help"]'
						has-error
					></ts-date-picker>
				</div>
			</div>

			<div class="render-block">
				<div style="margin-bottom: 400px">
					isDisabledDate (disable weekends):
					<ts-date-picker .isDisabledDate="${isDisabledDate}" opened selected-date="2021-04-03"></ts-date-picker>
				</div>
				<div>
					Readonly:
					<ts-date-picker readonly selected-date="2021-04-03"></ts-date-picker>
				</div>
			</div>
		</div>
	`;
};
