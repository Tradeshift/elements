import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';
import '@tradeshift/elements.icon';
import '@tradeshift/elements.list-item';
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
			/** Allow users to select several options or not. */
			multiselect: { type: Boolean, reflect: true },
			/** Do not show the apply button and directly emit select-menu-changed when the selection changes.
			 * Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior. */
			noApplyButton: { type: Boolean, reflect: true, attribute: 'no-apply-button' },
			/** List of selected items' ids */
			selected: { type: Array, reflect: true },
			/** Translated messages for the user locale */
			translations: { type: Object, reflect: true },
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
		this._translations = Object.assign({}, translations);
	}

	get translations() {
		return this._translations;
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
		return html`<div class="show-selection" @click="${this.showSelectedClick}">
			<ts-icon icon="${this.showSelectedOnly ? 'checkbox' : 'checkbox-on'}" size="large" type="disabled-checked">
			</ts-icon>
			${this.showSelectedOnly
				? this.translations.show_all
				: `${this.translations.view_selection} (${this.currentSelection.length})`}
		</div>`;
	}

	/** @private */
	get selectButton() {
		return html`
			<ts-button-group>
				<ts-button type="primary" @click=${this.applySelection}
					>${this.translations.select} ${this.currentSelection.length}</ts-button
				>
			</ts-button-group>
		`;
	}

	render() {
		const searchString = this.filterValue.toLowerCase();
		const filteredItems = this.items.filter(
			item =>
				item.title.toLowerCase().indexOf(searchString) > -1 &&
				(this.showSelectedOnly ? this.currentSelection.indexOf(item.id) > -1 : true)
		);
		const showApplyButtonContainer = !this.noApplyButton && this.multiselect && this.dirty;
		return html`<div id="listContainer">
				<ul>
					${filteredItems.length > 0
						? filteredItems.map(
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
						: html`<li class="no-items">${this.translations.no_items}</li>`}
				</ul>
			</div>
			<div class="apply-button-container ${showApplyButtonContainer ? 'show' : 'hide'}">
				${this.showSelectedButton} ${this.selectButton}
			</div>`;
	}
}

customElementDefineHelper('ts-select-menu', TSSelectMenu);
