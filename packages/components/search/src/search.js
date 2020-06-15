import { TSElement, unsafeCSS, html, customElementDefineHelper, helpers } from '@tradeshift/elements';
import css from './search.css';

import '@tradeshift/elements.icon';

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
			value: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		this.idleTime = 300;
		this.placeholder = 'Search...';
		this.value = '';
		this.dispatchIdleEvent = helpers.debounceEvent(() => this.dispatchCustomEvent('idle', this.value), this.idleTime);
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

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		switch (name) {
			case 'idle-time':
				this.dispatchIdleEvent = helpers.debounceEvent(() => this.dispatchCustomEvent('idle', this.value), newVal);
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
				this.dispatchCustomEvent('change', newVal);
				this.dispatchIdleEvent();
				break;
			case 'focused':
				if (this.focused) {
					// set focus only when component is defined.
					window.customElements.whenDefined(ELEMENT_TAG).then(() => this.shadowRoot.getElementById('input').focus());
				}
				break;
			default:
			// do nothing
		}
	}

	handleInput(e) {
		this.value = e.target.value;
	}

	handleKeyDown(e) {
		if (e.key === 'Enter') {
			this.dispatchCustomEvent('search', this.value);
		}
	}

	handleFocus() {
		this.focused = true;
	}

	handleBlur() {
		this.focused = false;
	}

	handleClear() {
		this.value = '';
	}

	render() {
		return html`
			<div dir="${this.direction}" class="search-container ${this.focused ? 'focused' : ''}">
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
		`;
	}
}

customElementDefineHelper(ELEMENT_TAG, TSSearch);
