import { TSElement, unsafeCSS, html, customElementDefineHelper, helpers } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';
import '@tradeshift/elements.icon';
import '@tradeshift/elements.list-item';
import translations from './utils/translations';
import css from './select.css';

const MAX_HEIGHT = 600; // max height of the dropdown part.
const APPLY_CONTAINER_HEIGHT = 115; // max height of the dropdown part.

export class TSSelect extends TSElement {
	constructor() {
		super();
		this.opened = false;
		this.multiselect = false;
		this.dirty = false;
		this.currentSelection = [];
		this.selected = [];
		this.inputValue = '';
		this.filterValue = '';
		this.showSelectedOnly = false;
		this._translations = Object.assign({}, translations);
		this.resizeListener = this.updatePosition.bind(this);
		this.clickOutsideListener = this.handleOutsideClick.bind(this);
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
			/** List of selected items' ids */
			selected: { type: Array, reflect: true },
			/** Default placeholder when there is no selection. */
			placeholder: { type: String, reflect: true },
			/** Translated messages for the user locale */
			translations: { type: Object, reflect: true },
			/** INTERNAL Does component has uncommited changes or not. */
			dirty: { type: Boolean, reflect: true },
			/** INTERNAL List of curently selected changes that user not commited yet. */
			currentSelection: { type: Array, attribute: false },
			/** INTERNAL Current value in input. */
			inputValue: { type: String, attribute: false },
			/** INTERNAL Latest input value that was used to filter. */
			filterValue: { type: String, attribute: false },
			/** INTERNAL Filter to show only selected. */
			showSelectedOnly: { type: Boolean, reflect: true }
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

	disconnectedCallback() {
		window.removeEventListener('resize', this.resizeListener);
		window.removeEventListener('click', this.clickOutsideListener);
	}

	update(changedProperties) {
		if (changedProperties.has('selected')) {
			// initialise a current selection with selected items.
			this.currentSelection = [...this.selected];
		}
		if (changedProperties.has('opened') && !changedProperties.get('opened')) {
			// clean filter values on every opening.
			this.inputValue = '';
			this.filterValue = '';
			this.showSelectedOnly = false;
		}
		super.update(changedProperties);
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		switch (name) {
			case 'opened':
				console.log('opened');
				if (newVal === null) {
					// discard changes by assigning previously selected items to current selection
					this.currentSelection = [...this.selected];
					this.dirty = false;
					window.removeEventListener('resize', this.resizeListener);
					window.removeEventListener('click', this.clickOutsideListener);
				} else {
					window.customElements.whenDefined('ts-select').then(() => {
						this.updatePosition();
						window.addEventListener('resize', this.resizeListener);
						window.addEventListener('click', this.clickOutsideListener);
					});
				}
				break;

			default:
			// do nothing
		}
	}

	/** @private */
	updateInputValue() {
		if (this.selected.length === 0) {
			return '';
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
	handleOutsideClick(event) {
		if (!('composedPath' in event)) {
			return;
		}
		const paths = event.composedPath();
		const container = this.shadowRoot.getElementById('container');
		if (paths.indexOf(container) === -1) {
			this.opened = false;
			this.updateInputValue();
		}
	}

	/**
	 * Calculates the size and position of the dropdown part.
	 * @private
	 */
	updatePosition() {
		requestAnimationFrame(() => {
			const dropdown = this.shadowRoot.getElementById('dropdown');
			if (!dropdown) {
				// it could happen when element is just initialised but not rendered yet.
				return;
			}
			const selectInput = this.shadowRoot.getElementById('selectInput');
			const listContainer = this.shadowRoot.getElementById('listContainer');
			const { height, width, top, bottom } = selectInput.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const position = { top: 'auto', bottom: 'auto', width: width + 'px' };
			let maxHeight = 0;
			const paddingTop = top - 20;
			const paddingBottom = windowHeight - bottom - 20;
			if (paddingBottom < MAX_HEIGHT && paddingBottom < paddingTop) {
				// When we don't have enough space below and have more space above, we put dropdown above.
				maxHeight = top > MAX_HEIGHT ? MAX_HEIGHT : paddingTop;
				position.bottom = height + 10 + 'px';
			} else {
				position.top = height + 10 + 'px';
				maxHeight = paddingBottom > MAX_HEIGHT ? MAX_HEIGHT : paddingBottom;
			}

			maxHeight -= APPLY_CONTAINER_HEIGHT;
			maxHeight += 'px';

			Object.assign(dropdown.style, position);
			Object.assign(listContainer.style, { maxHeight });
		});
	}

	/**
	 * @private
	 * @param {Event} event
	 */
	arrowClick(event) {
		event.stopPropagation();
		this.toggle();
	}

	/** @private */
	showSelectedClick() {
		this.showSelectedOnly = !this.showSelectedOnly;
	}

	/**
	 * @private
	 * @param {Event} event
	 */
	handleInput(event) {
		this.inputValue = event.target.value;
		this.handleInputDebounced();
	}

	/**
	 * Updates the current selection and dispatches 'select-changed' event if component is in single selection mode.
	 * @private
	 * @param {Event} event
	 */
	handleSelection(event) {
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
		if (!this.multiselect) {
			this.applySelection();
		} else {
			this.dirty = true;
		}
		this.requestUpdate();
	}

	/**
	 * Updates the current selection and dispatches 'select-changed' event if component is in multi selection mode.
	 * @private
	 */
	applySelection() {
		this.selected = [...this.currentSelection];
		/**
		 * Emitted when user applies the selected changes
		 */
		this.dispatchCustomEvent('select-changed', { selected: this.selected });
		this.opened = false;
		this.dirty = false;
		this.updateInputValue();
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
	get dropdown() {
		const searchString = this.filterValue.toLowerCase();
		const filteredItems = this.items.filter(
			item =>
				item.title.toLowerCase().indexOf(searchString) > -1 &&
				(this.showSelectedOnly ? this.currentSelection.indexOf(item.id) > -1 : true)
		);
		return html`<div id="dropdown">
			<ul id="listContainer">
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
			${this.multiselect && this.dirty
				? html`<div class="apply-button-container">${this.showSelectedButton} ${this.selectButton}</div>`
				: ''}
		</div>`;
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
				${this.dropdown}
			</div>
		`;
	}
}

customElementDefineHelper('ts-select', TSSelect);
