import { TSElement, unsafeCSS, html, customElementDefineHelper, helpers } from '@tradeshift/elements';
import '@tradeshift/elements.icon';
import arrowDownShort from '@tradeshift/elements.icon/lib/assets/icons/arrow-down-short.svg';
// eslint-disable-next-line import/no-duplicates
import '@tradeshift/elements.overlay';
// eslint-disable-next-line import/no-duplicates
import { TSOverlay } from '@tradeshift/elements.overlay';
import '@tradeshift/elements.select-menu';
import '@tradeshift/elements.help-text';
import translations from './utils/translations';
import css from './select.css';

export class TSSelect extends TSElement {
	constructor() {
		super();
		this.opened = false;
		this.multiselect = false;
		this.noApplyButton = false;
		this.selected = [];
		this.inputValue = '';
		this.filterValue = '';
		this.label = '';
		this.id = 'select-input-id';
		this._translations = Object.assign({}, translations);
		this.handleInputDebounced = helpers.debounceEvent(() => {
			this.filterValue = this.inputValue;
			/**
			 * Emitted when filter value of the select changes. You can listen to this for doing custom filtering and
			 * providing filteredItems to override the default component filtering.
			 * @payload { filterValue, id }
			 */
			this.dispatchCustomEvent('filter-value-change', {
				filterValue: this.caseSensitive ? this.filterValue : this.filterValue.toLowerCase(),
				id: this.id
			});
		}, 300);
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr'. */
			dir: { type: String, reflect: true },
			/** Is component disabled or not. */
			disabled: { type: Boolean, reflect: true },
			/** Is the dropdown part opened or not. */
			opened: { type: Boolean, reflect: true },
			/** List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon */
			items: { type: Array, reflect: true },
			/** List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items.   */
			filteredItems: { type: Array, reflect: true, attribute: 'filtered-items' },
			/** Allow users to select several options or not. */
			multiselect: { type: Boolean, reflect: true },
			/** Do not show the apply button and directly emit select-changed when the selection changes.
			 * Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior. */
			noApplyButton: { type: Boolean, reflect: true, attribute: 'no-apply-button' },
			/** List of selected items' ids */
			selected: { type: Array, reflect: true },
			/** Default placeholder when there is no selection. */
			placeholder: { type: String, reflect: true },
			/** Translated messages for the user locale */
			translations: { type: Object, reflect: true },
			/** Show the loading spinner in select dropdown */
			loading: { type: Boolean, reflect: true },
			/** Make client side filtering case sensitive. This also applies on the filterValue in 'filter-value-change' event */
			caseSensitive: { type: Boolean, reflect: true, attribute: 'case-sensitive' },
			/** The label of the select input field */
			label: { type: String, reflect: true },
			/** To show the asterisk in the label, not doing validation yet */
			required: { type: Boolean, reflect: true },
			/** Id of the select component  */
			id: { type: String, reflect: true },
			/** Array of messages to pass to help-text component. See help-text component for more info  */
			helpTextMessages: { type: Array, reflect: true, attribute: 'help-text-messages' },
			/** If you have more than one help text message , you should pass a title to it. See help-text component for more info  */
			helpTextTitle: { type: String, reflect: true, attribute: 'help-text-title' },
			/** To change the help text icon and style if needed. See help-text component for more info  */
			helpTextType: { type: String, reflect: true, attribute: 'help-text-type' },
			/** Error messages to show underneath of the input when it has error */
			errorMessages: { type: Array, reflect: true, attribute: 'error-messages' },
			/** Error title, if there are more than one error message */
			errorTitle: { type: String, reflect: true, attribute: 'error-title' },
			/** If the text field has an error, to show error messages and change the style of the input */
			hasError: { type: Boolean, reflect: true, attribute: 'has-error' },
			/** INTERNAL Current value in input. */
			inputValue: { type: String, attribute: false },
			/** INTERNAL Latest input value that was used to filter. */
			filterValue: { type: String, attribute: false },
			/** INTERNAL */
			hasSlottedLabel: { type: Boolean }
		};
	}

	get translations() {
		return this._translations;
	}

	set translations(val) {
		const oldVal = this._translations;
		this._translations = Object.assign(oldVal, val);
		this.requestUpdate('translations', oldVal);
	}

	toggle() {
		this.opened = !this.opened;
	}

	open() {
		this.opened = true;
	}

	close() {
		this.opened = false;
	}

	update(changedProperties) {
		if (changedProperties.has('selected')) {
			// update displayed value of selected items
			this.updateInputValue();
		}
		if (changedProperties.has('opened') && !changedProperties.get('opened')) {
			// clean filter values on every opening.
			this.inputValue = '';
			this.filterValue = '';
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
					window.customElements.whenDefined('ts-select').then(() => {
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
		const anchor = this.renderRoot.getElementById('selectInput');
		if (!anchor) {
			return;
		}
		const overlay = this.renderRoot.getElementById('overlay');
		if (!overlay) {
			return;
		}

		this.closeOverlay = TSOverlay.open(overlay, anchor);
	}

	/**
	 * Updates the current selection and dispatches 'select-changed' event if component is in multi selection mode.
	 * @private
	 */
	onChangeListener = event => {
		const selected = event.detail.selected;
		this.selected = [...selected];
		/**
		 * Emitted when user applies the selected changes
		 * @payload { selected, id }
		 */
		this.dispatchCustomEvent('select-changed', {
			selected: this.selected,
			id: this.id
		});
		if (!this.noApplyButton) {
			this.opened = false;
		}
		this.updateInputValue();
	};

	removeOverlay() {
		if (this.closeOverlay) {
			this.closeOverlay();
			delete this.closeOverlay;
		}
	}

	onOverlayCloseListener = () => {
		this.opened = null;
		this.updateInputValue();
	};

	/** @private */
	updateInputValue() {
		if (this.opened) {
			return;
		}
		if (this.selected.length === 0) {
			this.inputValue = '';
			return;
		}

		if (this.selected.length === 1) {
			const selectedItem = this.items.filter(item => item.id === this.selected[0])[0];
			if (selectedItem) {
				this.inputValue = selectedItem.title;
			} else {
				this.inputValue = '';
			}
		} else {
			this.inputValue = `${this.translations.selected} ${this.selected.length}`;
		}
	}

	/**
	 * @private
	 * @param {Event} event
	 */
	arrowClick(event) {
		event.stopPropagation();
		this.toggle();
		this.updateInputValue();
	}

	/**
	 * @private
	 * @param {Event} event
	 */
	handleInput(event) {
		this.inputValue = event.target.value;
		this.handleInputDebounced();
	}

	/** @private */
	getPlaceholder() {
		if (this.selected.length === 0) {
			return this.placeholder || '';
		}
		if (this.selected.length === 1) {
			const selectedItem = this.items.filter(item => item.id === this.selected[0])[0];
			if (selectedItem) {
				return selectedItem.title;
			} else {
				return this.placeholder || '';
			}
		}

		return `${this.translations.selected} ${this.selected.length}`;
	}

	onLableSlotChange(e) {
		const slot = e.currentTarget;
		const assignedNodes = slot.assignedNodes();
		this.hasSlottedLabel = assignedNodes && assignedNodes.length;
	}

	get labelHtml() {
		if (!this.label && !this.hasSlottedLabel) {
			return null;
		}
		return html`
			<label for=${this.id}>
				<!-- If you want to have custom html in label, you can use this slot  -->
				<slot name="label" @slotchange="${this.onLableSlotChange}"><span>${this.label}</span></slot>
				${this.required ? html`<span title="Required" class="required-asterisk">*</span>` : ''}
			</label>
		`;
	}

	get helpText() {
		if (!this.helpTextMessages && (!this.errorMessages || !this.hasError)) {
			return;
		}

		const messages = this.hasError ? this.errorMessages : this.helpTextMessages;
		const type = this.hasError ? 'error' : undefined;
		if (messages.length > 1) {
			const title = this.hasError ? this.errorTitle : this.helpTextTitle;
			return html`
				<ts-help-text
					type=${type}
					title=${title}
					.messages=${messages}
					?rtl=${this.direction === 'rtl'}
					?disabled=${this.disabled}
				></ts-help-text>
			`;
		}

		return html`<ts-help-text
			type=${type}
			.messages=${messages}
			?rtl=${this.direction === 'rtl'}
			?disabled=${this.disabled}
		></ts-help-text>`;
	}

	render() {
		return html`
			<div id="container">
				${this.labelHtml}
				<div id="selectInput" @click="${this.open}">
					<input
						id="${this.id}"
						class="filter-input"
						placeholder="${this.getPlaceholder()}"
						.value="${this.inputValue}"
						@input="${this.handleInput}"
					/>
					<ts-icon
						class="icon-end"
						icon="${arrowDownShort}"
						size="large"
						type="gray-darker"
						rotate="${this.opened ? '180' : '0'}"
						@click="${this.arrowClick}"
					></ts-icon>
				</div>
				${this.helpText}
				${this.opened
					? html`<ts-overlay id="overlay" @overlay-close=${this.onOverlayCloseListener}>
							<ts-select-menu
								.items="${this.items}"
								.filteredItems="${this.filteredItems}"
								.dir="${this.dir}"
								?disabled="${this.disabled}"
								?multiselect="${this.multiselect}"
								?no-apply-button="${this.noApplyButton}"
								.filterValue="${this.filterValue}"
								.selected="${[...this.selected]}"
								.translations="${this.translations}"
								.loading="${this.loading}"
								.caseSensitive="${this.caseSensitive}"
								@select-menu-changed=${this.onChangeListener}
							></ts-select-menu>
					  </ts-overlay>`
					: ''}
			</div>
		`;
	}
}

customElementDefineHelper('ts-select', TSSelect);
