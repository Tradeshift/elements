import { TSElement, unsafeCSS, html, customElementDefineHelper, helpers } from '@tradeshift/elements';
import css from './search.css';

import '@tradeshift/elements.icon';
import '@tradeshift/elements.select-menu';
// eslint-disable-next-line import/no-duplicates
import '@tradeshift/elements.overlay';
// eslint-disable-next-line import/no-duplicates
import { TSOverlay } from '@tradeshift/elements.overlay';
import translations from './utils/translations';

const ELEMENT_TAG = 'ts-search';

export class TSSearch extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Shoud the search be auto focused once page loaded */
			autofocus: { type: Boolean, reflect: true },
			/** Direction 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Set the focus on element */
			focused: { type: Boolean, reflect: true },
			/** timeout in ms for the 'idle' event */
			idleTime: { type: Number, attribute: 'idle-time', reflect: true },
			/** Message when an input is empty */
			placeholder: { type: String, reflect: true },
			/** The current value */
			value: { type: String, reflect: true },
			/** Translated messages for the user locale.
			 * @type {{ loading: string, no_items: string }}
			 */
			translations: { type: Object, reflect: true },
			/** Should dropdown items be rendered or not */
			hasDropdown: { type: Boolean, reflect: true, attribute: 'has-dropdown' },
			/** Show loading spinner when waiting for drodwon items */
			loading: { type: Boolean, reflect: true, attribute: 'loading' },
			/** Dropdown items to show when user clicks on search component */
			dropdownItems: { type: Array, attribute: 'dropdown-items', reflect: true },
			/** INTERNAL Opens the dropdown */
			opened: { type: Boolean, reflect: false }
		};
	}

	constructor() {
		super();
		this.idleTime = 300;
		this.placeholder = 'Search...';
		this.value = '';
		this.dropdownItems = [];
		this.opened = false;
		this.hasDropdown = false;
		this._translations = Object.assign({}, translations);
		this.updateDispatchIdleEvent();
	}

	get translations() {
		return this._translations;
	}

	set translations(val) {
		const oldVal = this._translations;
		this._translations = Object.assign(oldVal, val);
		this.requestUpdate('translations', oldVal);
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get showCancel() {
		return Boolean(this.value);
	}

	get cancelIcon() {
		return html`
			<ts-icon class="close-icon" icon="close-clear" size="medium" circular @click="${this.handleClear}"></ts-icon>
		`;
	}

	updateDispatchIdleEvent(newIdleTime) {
		const idleTime = newIdleTime || this.idleTime;
		this.dispatchIdleEvent = helpers.debounceEvent(() => {
			/**
			 * Emitted when the user not change input value for a provided timeout
			 * @payload search input value
			 */
			this.dispatchCustomEvent('idle', this.value);
		}, idleTime);
	}

	createOverlay() {
		const anchor = this.renderRoot.getElementById('searchContainer');
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
		this.opened = false;
	};

	onChangeListener = e => {
		const selectedId = e.detail.selected[0];
		this.value = this.dropdownItems.find(i => i.id === selectedId).title;
		this.opened = false;
	};

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		switch (name) {
			case 'idle-time':
				this.updateDispatchIdleEvent(newVal);
				break;
			case 'value':
				if (!this.hasUpdated) {
					// do not trigger events on initialization.
					return;
				}
				if (newVal === oldVal) {
					// do not trigger events on re-render with the same value (it happens in React).
					return;
				}
				/**
				 * Emitted on every user's change in a search input
				 * @payload search input value
				 */
				this.dispatchCustomEvent('change', newVal);
				this.dispatchIdleEvent();
				break;
			case 'focused':
				if (this.focused) {
					// set focus only when component is defined.
					window.customElements.whenDefined(ELEMENT_TAG).then(() => {
						this.shadowRoot.getElementById('input').focus();
						this.opened = this.hasDropdown && this.focused;
					});
				}
				break;
			case 'has-dropdown':
				if (this.hasDropdown && this.focused) {
					this.opened = true;
				} else {
					this.opened = null;
				}
				break;
			default:
			// do nothing
		}
	}

	updated(changedProperties) {
		changedProperties.forEach((oldValue, propName) => {
			if (propName === 'opened') {
				oldValue ? this.removeOverlay() : this.createOverlay();
			}
		});
	}

	handleInput(e) {
		this.value = e.target.value;
	}

	handleKeyDown(e) {
		if (e.key === 'Enter') {
			/**
			 * Emitted when the user press the 'Enter' key
			 * @payload search input value
			 */
			this.dispatchCustomEvent('search', this.value);
		}
	}

	handleFocus(e) {
		e.stopPropagation();
		this.focused = true;
	}

	handleBlur() {
		this.focused = false;
	}

	handleClear() {
		this.value = '';
	}

	stopEventBubbling(e) {
		e.stopPropagation();
	}

	get dropdownOverlay() {
		return html`
			<ts-overlay id="overlay" @overlay-close=${this.onOverlayCloseListener}>
				<ts-select-menu
					.items="${this.dropdownItems}"
					.dir="${this.dir}"
					?loading="${this.loading}"
					?disabled="${this.disabled}"
					?multiselect="${false}"
					.translations="${{ loading: this.translations.loading, no_items: this.translations.no_items }}"
					no-apply-button
					@select-menu-changed=${this.onChangeListener}
				></ts-select-menu>
			</ts-overlay>
		`;
	}

	render() {
		return html`
			<div>
				<div
					dir="${this.direction}"
					id="searchContainer"
					class="search-container ${this.focused ? 'focused' : ''}"
					@click="${this.stopEventBubbling}"
				>
					<div class="icon-container">
						<ts-icon icon="search" size="large"></ts-icon>
					</div>
					<input
						id="input"
						type="text"
						?autofocus="${this.autofocus}"
						.value="${this.value}"
						.placeholder="${this.placeholder}"
						@keydown="${this.handleKeyDown}"
						@input="${this.handleInput}"
						@focus="${this.handleFocus}"
						@blur="${this.handleBlur}"
					/>
					<div class="icon-container">${this.showCancel ? this.cancelIcon : ''}</div>
				</div>
				${this.opened && this.hasDropdown ? this.dropdownOverlay : ''}
			</div>
		`;
	}
}

customElementDefineHelper(ELEMENT_TAG, TSSearch);
