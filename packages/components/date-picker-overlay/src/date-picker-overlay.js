import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.icon';
import { arrowDownShort } from '@tradeshift/elements.icon/lib/assets/icons';
import css from './date-picker-overlay.css';

export class TSDatePickerOverlay extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			dir: { type: String, reflect: true },
			translations: { type: Object, reflect: true },
			firstDay: { type: Number, reflect: true },
			pageDate: { type: String, reflect: true },
			selectedDate: { type: String, reflect: true },
			required: { type: Boolean, reflect: true },
			disabledDateCheck: { type: Function, reflect: false }
		};
	}

	get monthControl() {
		return html`
			<div class="month-control">
				${this.controlButton(() => this.changeMonth(-1), 90)}
				<span class="control-value">${this.translations.monthsAbbreviations[this.pageDate.getMonth()]}</span>
				${this.controlButton(() => this.changeMonth(1), 270)}
			</div>
		`;
	}

	get yearControl() {
		return html`
			<div class="year-control">
				${this.controlButton(() => this.changeYear(-1), 90)}
				<span class="control-value">${this.pageDate.getFullYear()}</span>
				${this.controlButton(() => this.changeYear(1), 270)}
			</div>
		`;
	}

	controlButton(onClick, rotation) {
		return html`
			<ts-icon
				@click="${onClick}"
				class="control-button"
				icon="${arrowDownShort}"
				rotate="${rotation}"
				size="large"
				type="gray-darker"
			></ts-icon>
		`;
	}

	daysInMonth(options = { previousMonth: false }) {
		const d = this.pageDate;
		const month = d.getMonth();
		const year = d.getFullYear();
		return new Date(year, options.previousMonth ? month : month + 1, 0).getDate();
	}

	compareDates(date1, date2) {
		const d1 = new Date(date1.getTime());
		const d2 = new Date(date2.getTime());

		d1.setHours(0, 0, 0, 0);
		d2.setHours(0, 0, 0, 0);
		return d1.getTime() === d2.getTime();
	}

	changeMonth(change) {
		const d = this.pageDate;
		this.pageDate = new Date(d.getFullYear(), d.getMonth() + change, 1);
	}

	changeYear(change) {
		const d = this.pageDate;
		this.pageDate = new Date(d.getFullYear() + change, d.getMonth(), 1);
	}

	dayCell(day, inPageMonth = false) {
		const classNames = [
			'day-cell',
			inPageMonth ? 'day-current-month' : '',
			day.isToday ? 'today' : '',
			day.isSelected ? 'selected' : '',
			day.isDisabled ? 'disabled' : ''
		].join(' ');
		return html`<span @click="${() => !day.isDisabled && this.selectDate(day.date)}" class="${classNames}">
			${day.date.getDate()}
		</span>`;
	}

	getDayObject(dateObj) {
		const timestamp = dateObj.getTime();
		return {
			date: dateObj,
			isToday: this.compareDates(dateObj, new Date()),
			isSelected: this.selectedDate && this.compareDates(new Date(dateObj), new Date(this.selectedDate)),
			isDisabled: this.disabledDateCheck(dateObj, timestamp),
			timestamp
		};
	}

	get days() {
		const days = [];
		const d = this.pageDate;
		const daysInMonth = this.daysInMonth();
		let dObj = new Date(d.getFullYear(), d.getMonth(), 1, 1, 1);
		for (let i = 0; i < daysInMonth; i++) {
			days.push(this.getDayObject(dObj));
			dObj = new Date(dObj.getFullYear(), dObj.getMonth(), dObj.getDate() + 1, 1, 1);
		}
		return days;
	}

	get previousMonthDays() {
		let blankDays;
		const days = [];
		const d = this.pageDate;
		const daysInPreviousMonth = this.daysInMonth({ previousMonth: true });
		const currentMonthFirstDay = new Date(d.getFullYear(), d.getMonth(), 1);
		let dObj = new Date(d.getFullYear(), d.getMonth() - 1, daysInPreviousMonth);

		if (this.firstDay === 1) {
			blankDays = currentMonthFirstDay.getDay() > 0 ? currentMonthFirstDay.getDay() - 1 : 6;
		} else {
			blankDays = currentMonthFirstDay.getDay();
		}

		for (let i = 0; i < blankDays; i++) {
			days.unshift(this.getDayObject(dObj));
			dObj = new Date(dObj.getFullYear(), dObj.getMonth(), dObj.getDate() - 1, 1, 1);
		}
		return days;
	}

	get nextMonthDays() {
		const days = [];
		const d = this.pageDate;
		const currentMonthLastDay = new Date(d.getFullYear(), d.getMonth(), this.daysInMonth());
		let dObj = new Date(d.getFullYear(), d.getMonth() + 1, 1);
		const blankDays = currentMonthLastDay.getDay() > 0 ? 7 - currentMonthLastDay.getDay() : 0;

		for (let i = 0; i < blankDays; i++) {
			days.push(this.getDayObject(dObj));
			dObj = new Date(dObj.getFullYear(), dObj.getMonth(), dObj.getDate() + 1, 1, 1);
		}
		return days;
	}

	selectDate(date) {
		this.dispatchCustomEvent('selected-date-change', { selected: date });
	}

	get dayNames() {
		const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
		for (let i = 0; i < this.firstDay; i++) {
			weekDays.push(weekDays.shift());
		}
		return html`${weekDays.map(
			day => html`<span class="day-name">${this.translations.daysAbbreviations[day]}</span>`
		)}`;
	}

	render() {
		// prettier-ignore
		return html`
			<div class="container">
				<div class="controls-wrapper">
					${this.monthControl}
					${this.yearControl}
				</div>
				<div class="day-picker">
					${this.dayNames}
					${this.previousMonthDays.map(day => this.dayCell(day))}
					${this.days.map(day => this.dayCell(day, true))}
					${this.nextMonthDays.map(day => this.dayCell(day))}
				</div>
				${!this.required ?
				html`
					<ts-button
						class="deselect-button"
						@button-click="${() => this.selectDate(undefined)}"
						?disabled="${!this.selectedDate}"
						type="secondary"
						full-width
					>
						${this.translations.deselectButton}
					</ts-button>
				`: ''}
			</div>
		`;
	}
}

customElementDefineHelper('ts-date-picker-overlay', TSDatePickerOverlay);
