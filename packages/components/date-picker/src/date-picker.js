import { customElementDefineHelper, html, TSElement, unsafeCSS } from '@tradeshift/elements';
import '@tradeshift/elements.date-picker-overlay';
import '@tradeshift/elements.text-field';
// eslint-disable-next-line import/no-duplicates
import '@tradeshift/elements.overlay';
// eslint-disable-next-line import/no-duplicates
import { TSOverlay } from '@tradeshift/elements.overlay';
import css from './date-picker.css';
import { translations } from './utils';

export class TSDatePicker extends TSElement {
	constructor() {
		super();
		this._translations = Object.assign({}, translations);
		this.pageDate = new Date().toISOString();
		this.opened = false;
		this.notTypeable = false;
		this.firstDay = 1;
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Can be used for customizing placeholder, days abbreviations, months abbreviations and providing translations for them
			 * see the structure in its storybook knobs section.
			 * */
			translations: { type: Object, reflect: true },
			/** Direction of the component 'rtl' or 'ltr'. */
			dir: { type: String, reflect: true },
			/** For setting the date of the date picker you can use this prop/attribute. It will get update after the user changes the date. */
			selectedDate: { type: String, reflect: true, attribute: 'selected-date' },
			/** This date can be used as a way to customize the month that date picker dropdown will be opened in,
			 *  by default it's the current month. You can pass any date in the preferred month. */
			pageDate: { type: String, reflect: true, attribute: 'page-date' },
			/** INTERNAL */
			selectedDateObj: { type: String, reflect: false },
			/** Label of the date picker. */
			label: { type: String, reflect: true },
			/** Is the date picker disabled? */
			disabled: { type: Boolean, reflect: false },
			/** Is the date picker readonly? */
			readonly: { type: Boolean, reflect: false },
			/** You can pass a function to this prop, which will get js Date object of the days in the calendar view as input,
			 *  and expect a boolean to make the day disabled or not. */
			isDisabledDate: { type: Function, reflect: false, attribute: false },
			/** Minimum date which can be selected by the user. Dates before this will be shown as disabled. Supports ISO 8601 format */
			min: { type: String, reflect: true },
			/** Maximum date which can be selected by the user. Dates after this will be shown as disabled. Supports ISO 8601 format */
			max: { type: String, reflect: true },
			/** Is the dropdown part opened or not? */
			opened: { type: Boolean, reflect: true },
			/** Disable the typing a new date */
			notTypeable: { type: Boolean, reflect: true, attribute: 'not-typeable' },
			/** Which day should be shown as the first day of the week. A number between 0-6 (0 = Sunday, 6 = Saturday) */
			firstDay: { type: Number, reflect: true, attribute: 'first-day' },
			/** Array of messages to pass to help-text component. See help-text component for more info */
			helpTextMessages: { type: Array, reflect: true, attribute: 'help-text-messages' },
			/** If you have more than one help text message , you should pass a title to it. See help-text component for more info */
			helpTextTitle: { type: String, reflect: true, attribute: 'help-text-title' },
			/** To change the help text icon and style if needed. See help-text component for more info */
			helpTextType: { type: String, reflect: true, attribute: 'help-text-type' },
			/** Error messages to show underneath of the input when it has error */
			errorMessages: { type: Array, reflect: true, attribute: 'error-messages' },
			/** Error title, if there are more than one error message */
			errorTitle: { type: String, reflect: true, attribute: 'error-title' },
			/** If the text field has an error, to show error messages and change the style of the input */
			hasError: { type: Boolean, reflect: true, attribute: 'has-error' },
			/** To remove the deselect button and show the asterisk in the label. Not doing the validation, you should set the has-error and error messages yourself */
			required: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get translations() {
		return this._translations;
	}

	set translations(val) {
		const oldVal = this._translations;
		this._translations = Object.assign(oldVal, val);
		this.requestUpdate('translations', oldVal);
	}

	open() {
		if (this.disabled || this.readonly) {
			return;
		}
		this.opened = true;
	}

	close() {
		this.opened = false;
	}

	update(changedProperties) {
		if (changedProperties.has('selectedDate')) {
			if (!isNaN(Date.parse(this.selectedDate))) {
				// update value of selected date object
				this.selectedDateObj = new Date(this.selectedDate);
				this.pageDate = this.selectedDateObj.toISOString();
			} else {
				this.selectedDateObj = undefined;
				this.pageDate = new Date().toISOString();
			}
		}
		super.update(changedProperties);
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		switch (name) {
			case 'opened':
				if (newVal === null) {
					this.removeOverlay();
				} else {
					window.customElements.whenDefined('ts-date-picker').then(() => {
						this.createOverlay();
					});
				}
				break;

			default:
			// do nothing
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeOverlay();
	}

	createOverlay() {
		const anchor = this.renderRoot.getElementById('dateInput');
		if (!anchor) {
			return;
		}
		const overlay = this.renderRoot.getElementById('overlay');
		if (!overlay) {
			return;
		}

		this.closeOverlay = TSOverlay.open(overlay, anchor);
	}

	removeOverlay() {
		if (this.closeOverlay) {
			this.closeOverlay();
			delete this.closeOverlay;
		}
	}

	onOverlayCloseListener = () => {
		this.opened = null;
	};

	disabledDateCheck(dateObj, timestamp) {
		if (this.min) {
			const minDateTime = new Date(this.min).getTime();

			if (timestamp < minDateTime) {
				return true;
			}
		}
		if (this.max) {
			const maxDateTime = new Date(this.max).getTime();
			if (timestamp > maxDateTime) {
				return true;
			}
		}
		if (this.isDisabledDate && this.isDisabledDate(dateObj)) {
			return true;
		}
	}

	get displaySelectedDate() {
		const date = this.selectedDateObj;
		if (!date || isNaN(Date.parse(this.selectedDateObj))) {
			return '';
		}
		const monthAbbr = this.translations.monthsAbbreviations[date.getMonth()];
		return `${date.getDate()} ${monthAbbr} ${date.getFullYear()}`;
	}

	dateInputKeyDown(event) {
		if (
			[
				27, // escape
				13 // enter
			].includes(event.keyCode)
		) {
			this.opened = false;
			this.blur();
		}
	}

	dateInputChange(event) {
		// deselecting by deleting the input
		if (!this.notTypeable && !this.required && event.target.value === '') {
			this.selectedDateObj = undefined;
			this.selectedDate = undefined;
			this.pageDate = new Date();
			this.dispatchDateSelect(undefined);
		}
		const typedDate = Date.parse(event.target.value);
		const typedDateObj = new Date(event.target.value);
		if (this.notTypeable || isNaN(typedDate) || this.disabledDateCheck(typedDateObj, typedDateObj.getTime())) {
			this.selectedDateObj = new Date(this.selectedDate);
			this.shadowRoot.getElementById('dateInput').value = this.displaySelectedDate;
			return;
		}
		if (!isNaN(typedDate)) {
			this.selectedDateObj = new Date(event.target.value);
			this.selectedDate = this.selectedDateObj.toISOString();
			this.pageDate = this.selectedDate;
			this.dispatchDateSelect(this.selectedDate);
		}
		this.opened = false;
	}

	/**
	 * Updates the current selected date and dispatches 'date-select' event
	 * @private
	 */
	onSelectedDateChange = event => {
		const selectedDate = event.detail.selected;
		this.selectedDate = selectedDate ? selectedDate.toISOString() : undefined;
		this.pageDate = selectedDate ? selectedDate.toISOString() : new Date().toISOString();
		this.dispatchDateSelect(selectedDate);
		this.opened = false;
	};

	dispatchDateSelect(selectedDate) {
		/**
		 * Emitted when user select a new date
		 * @payload {selectedDate}
		 */
		this.dispatchCustomEvent('date-select', { selectedDate });
	}

	render() {
		return html`
			<div class="date-picker-container">
				<ts-text-field
					@focus="${this.open}"
					@click="${this.open}"
					label="${this.label ? this.label : ''}"
					.value=${this.displaySelectedDate}
					dir="${this.direction}"
					?disabled="${this.disabled}"
					?readonly="${this.readonly}"
					?required="${this.required}"
					.hasError="${this.hasError}"
					.helpTextType="${this.helpTextType}"
					.helpTextTitle="${this.helpTextTitle}"
					.helpTextMessages="${this.helpTextMessages}"
					.errorTitle="${this.errorTitle}"
					.errorMessages="${this.errorMessages}"
				>
					<ts-input
						slot="ts-input"
						?disabled="${this.disabled}"
						?readonly="${this.readonly}"
						.hasError="${this.hasError}"
						icon-end="calendar"
					>
						<input
							id="dateInput"
							?readonly="${this.readonly}"
							.value=${this.displaySelectedDate}
							placeholder=${this.translations.placeholder}
							@keydown="${this.dateInputKeyDown}"
							@change="${this.dateInputChange}"
						/>
					</ts-input>
				</ts-text-field>
				${this.opened
					? html`
							<ts-overlay id="overlay" autoWidth dir="${this.direction}" @overlay-close=${this.onOverlayCloseListener}>
								<ts-date-picker-overlay
									.translations="${this.translations}"
									.firstDay="${this.firstDay}"
									.pageDate="${new Date(this.pageDate)}"
									.selectedDate="${this.selectedDate}"
									?required="${this.required}"
									?disabled="${this.disabled}"
									.disabledDateCheck="${(dateObj, timestamp) => this.disabledDateCheck(dateObj, timestamp)}"
									.dir="${this.direction}"
									@selected-date-change=${this.onSelectedDateChange}
								></ts-date-picker-overlay>
							</ts-overlay>
					  `
					: ''}
			</div>
		`;
	}
}

customElementDefineHelper('ts-date-picker', TSDatePicker);
