import { TSElement, unsafeCSS, html, customElementDefineHelper, helpers } from '@tradeshift/elements';
import '@tradeshift/elements.icon';
// eslint-disable-next-line import/no-duplicates
import '@tradeshift/elements.overlay';
// eslint-disable-next-line import/no-duplicates
import { TSOverlay } from '@tradeshift/elements.overlay';
import '@tradeshift/elements.select-menu';
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
		this._translations = Object.assign({}, translations);
		this.handleInputDebounced = helpers.debounceEvent(() => {
			this.filterValue = this.inputValue;
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
			/** Make client side filtering case sensitive which by default is case-insensitive */
			caseSensitive: { type: Boolean, reflect: true, attribute: 'case-sensitive' },
			/** INTERNAL Current value in input. */
			inputValue: { type: String, attribute: false },
			/** INTERNAL Latest input value that was used to filter. */
			filterValue: { type: String, attribute: false }
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
		 */
		this.dispatchCustomEvent('select-changed', { selected: this.selected });
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

	render() {
		return html`
			<div id="container">
				<div id="selectInput" @click="${this.open}">
					<input
						class="filter-input"
						placeholder="${this.getPlaceholder()}"
						.value="${this.inputValue}"
						@input="${this.handleInput}"
					/>
					<ts-icon
						class="icon-end"
						icon="arrow-down-short"
						size="large"
						type="gray-darker"
						rotate="${this.opened ? '180' : '0'}"
						@click="${this.arrowClick}"
					></ts-icon>
				</div>
				${this.opened
					? html`<ts-overlay id="overlay" @overlay-close=${this.onOverlayCloseListener}>
							<ts-select-menu
								.items="${this.items}"
								.dir="${this.dir}"
								?disabled="${this.disabled}"
								?multiselect="${this.multiselect}"
								?no-apply-button="${this.noApplyButton}"
								.filterValue="${this.filterValue}"
								.currentSelection="${[...this.selected]}"
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
