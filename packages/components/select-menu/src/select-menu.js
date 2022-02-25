import { customElementDefineHelper, html, TSElement, unsafeCSS } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';
import '@tradeshift/elements.icon';
import '@tradeshift/elements.list-item';
import '@tradeshift/elements.spinner';
import css from './select-menu.css';
import translations from './utils/translations';

export class TSSelectMenu extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr'. */
			dir: { type: String, reflect: true },
			/** Is component disabled or not. */
			disabled: { type: Boolean, reflect: true },
			/** List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon */
			items: { type: Array, reflect: true },
			/** List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items. */
			filteredItems: { type: Array, reflect: true, attribute: 'filtered-items' },
			/** Allow users to select several options or not. */
			multiselect: { type: Boolean, reflect: true },
			/** Do not show the apply button and directly emit select-menu-changed when the selection changes.
			 * Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior. */
			noApplyButton: { type: Boolean, reflect: true, attribute: 'no-apply-button' },
			/** List of selected items' ids */
			selected: { type: Array, reflect: true },
			/** Translated messages for the user locale */
			translations: { type: Object, reflect: true },
			/** Set component in loading state and render a spinner instead of list of items */
			loading: { type: Boolean, reflect: true },
			/** Make client side filtering case sensitive which by default is case-insensitive */
			caseSensitive: { type: Boolean, reflect: true, attribute: 'case-sensitive' },
			/** INTERNAL Does component has uncommited changes or not. */
			dirty: { type: Boolean, reflect: true },
			/** INTERNAL List of currently selected changes that user not commited yet. */
			currentSelection: { type: Array, attribute: false },
			/** INTERNAL Latest input value that was used to filter. */
			filterValue: { type: String, attribute: false },
			/** INTERNAL Filter to show only selected items. */
			showSelectedOnly: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.multiselect = false;
		this.noApplyButton = false;
		this.dirty = false;
		this.currentSelection = [];
		this.selected = [];
		this.filterValue = '';
		this.showSelectedOnly = false;
		this.loading = false;
		this._translations = Object.assign({}, translations);
	}

	get translations() {
		return this._translations;
	}

	set translations(val) {
		const oldVal = this._translations;
		this._translations = Object.assign(oldVal, val);
		this.requestUpdate('translations', oldVal);
	}

	/**
	 * Updates the current selection and dispatches 'select-changed' event if component is in single selection mode.
	 * @private
	 * @param {Event} event
	 */
	handleSelection = event => {
		if (this.disabled) {
			return;
		}
		event.stopPropagation();
		const item = event.target;
		const itemId = item['item-id'];
		const index = this.currentSelection.indexOf(itemId);
		if (index > -1) {
			this.currentSelection.splice(index, 1);
		} else if (this.multiselect) {
			this.currentSelection.push(itemId);
		} else {
			this.currentSelection = [itemId];
		}
		if (!this.multiselect || this.noApplyButton) {
			this.applySelection();
		} else {
			this.dirty = true;
		}
		this.requestUpdate();
	};

	/**
	 * Updates the current selection and dispatches 'select-menu-changed' event.
	 * @private
	 */
	applySelection() {
		this.selected = [...this.currentSelection];
		/**
		 * Emitted when user applies the selected changes
		 */
		this.dispatchCustomEvent('select-menu-changed', { selected: this.selected });
		this.dirty = false;
	}

	/** @private */
	showSelectedClick() {
		this.showSelectedOnly = !this.showSelectedOnly;
	}

	/** @private */
	get showSelectedButton() {
		return html`<div
			class="show-selection ${this.isVisibleShowSelectedButton ? 'show' : 'hide'}"
			@click="${this.showSelectedClick}"
		>
			<ts-icon icon="${this.showSelectedOnly ? 'checkbox' : 'checkbox-on'}" size="large" type="disabled-checked">
			</ts-icon>
			${this.showSelectedOnly
				? this.translations.show_all
				: `${this.translations.view_selection} (${this.currentSelection.length})`}
		</div>`;
	}

	get isVisibleShowSelectedButton() {
		return this.multiselect && (this.dirty || this.currentSelection.length > 0);
	}

	/** @private */
	get selectButton() {
		return html`
			<ts-button-group class="apply-button-container ${this.showApplyButtonContainer ? 'show' : 'hide'}">
				<ts-button type="primary" @click=${this.applySelection}>
					${this.translations.select} ${this.currentSelection.length}
				</ts-button>
			</ts-button-group>
		`;
	}

	get showApplyButtonContainer() {
		return !this.noApplyButton && this.multiselect && (this.dirty || this.currentSelection.length > 0);
	}

	get displayedItems() {
		// it should only show selected items, without applying any filter
		if (this.showSelectedOnly) {
			return this.items.filter(item => this.currentSelection.indexOf(item.id) > -1);
		}
		// it should show the filtered items if they are provided and the filter field is not empty
		if (this.filteredItems && this.filterValue) {
			return this.filteredItems;
		}
		const searchString = this.caseSensitive ? this.filterValue : this.filterValue?.toLowerCase();
		return this.items.filter(item => {
			const itemTitle = this.caseSensitive ? item.title : item.title.toLowerCase();
			return itemTitle.indexOf(searchString) > -1;
		});
	}

	update(changedProperties) {
		super.update(changedProperties);
		if (changedProperties.has('selected')) {
			this.addSelectedToCurrentSelection();
		}
	}

	connectedCallback() {
		super.connectedCallback();
		this.addSelectedToCurrentSelection();
	}

	addSelectedToCurrentSelection() {
		this.currentSelection = [
			...this.currentSelection,
			...this.selected.filter(item => this.currentSelection.indexOf(item) === -1)
		];
	}

	render() {
		const displayedItems = this.displayedItems;
		return html`<div id="listContainer">
			${this.loading
				? html`<div class="loading-container">
						<ts-spinner data-visible data-message="${this.translations.loading}" data-size="medium"></ts-spinner>
				  </div>`
				: html`
				<ul>
					${
						displayedItems.length > 0
							? displayedItems.map(
									item => html`<ts-list-item
										class="items-list"
										selectable
										?disabled="${this.disabled}"
										?selected="${this.currentSelection.indexOf(item.id) > -1}"
										.item-id=${item.id}
										dir="${this.dir}"
										title="${item.title}"
										icon="${item.icon || ''}"
										icon-right="${this.multiselect ? 'checkbox' : ''}"
										icon-selected="checkbox-on"
										@click="${this.handleSelection}"
									></ts-list-item>`
							  )
							: html`<li class="no-items">${this.translations.no_items}</li>`
					}
				</ul>
			</div>
			<div class="footer-container">
				${this.showSelectedButton} ${this.selectButton}
			</div>`}
		</div>`;
	}
}

customElementDefineHelper('ts-select-menu', TSSelectMenu);
