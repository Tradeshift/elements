import { TSElement, unsafeCSS, html, customElementDefineHelper, helpers } from '@tradeshift/elements';
import css from './search.css';

import '@tradeshift/elements.icon';

const ELEMENT_TAG = 'ts-search';

customElementDefineHelper(
	ELEMENT_TAG,
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				autofocus: { type: Boolean, reflect: true },
				dir: { type: String, reflect: true },
				focused: { type: Boolean, reflect: true },
				idleTime: { type: Number, attribute: 'idle-time', reflect: true },
				placeholder: { type: String, reflect: true },
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
);
