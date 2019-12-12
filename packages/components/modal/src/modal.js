import { TSElement, unsafeCSS, html, customElementDefineHelper, helpers } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.cover';
import '@tradeshift/elements.header';
import { customEventNames, sizes } from './utils';
import css from './modal.css';

customElementDefineHelper(
	'ts-modal',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				dir: { type: String, reflect: true, attribute: 'data-dir' },
				size: { type: String, reflect: true, attribute: 'data-size' },
				title: { type: String, reflect: true, attribute: 'data-title' },
				visible: { type: Boolean, reflect: true, attribute: 'data-visible' },
				noCloseOnEscKey: { type: Boolean, attribute: 'no-close-on-esc-key' }
			};
		}

		constructor() {
			super();
			this.size = sizes.LARGE;
			this.title = '';
			this.noCloseOnEscKey = false;
			this.onKeyDown = this.onKeyDown.bind(this);
		}

		get direction() {
			return this.dir ? this.dir : this.bodyDir;
		}

		get hidden() {
			return this.visible ? 'fade-in' : 'fade-out';
		}

		open() {
			this.visible = true;
		}

		close() {
			this.visible = false;
		}

		handleTransition(e) {
			if (e.propertyName !== 'opacity') {
				return;
			}
			this.dispatchCustomEvent(this.visible ? customEventNames.OPENED : customEventNames.CLOSED);
		}

		attributeChangedCallback(name, oldVal, newVal) {
			super.attributeChangedCallback(name, oldVal, newVal);
			if (name !== 'data-visible') {
				return;
			}
			this.dispatchCustomEvent(newVal ? customEventNames.OPEN : customEventNames.CLOSE);
		}

		render() {
			return html`
				<div
					dir="${this.direction}"
					class="container ${this.size} ${this.hidden}"
					@transitionend="${this.handleTransition}"
				>
					<ts-header .title="${this.title}" dir="${this.direction}">
						<ts-button class="no-border" icon="close-clear" size="large" @click="${this.close}"></ts-button>
					</ts-header>
					<div class="note">
						<slot name="note"></slot>
					</div>
					<main>
						<slot name="main"></slot>
					</main>
					<footer>
						<slot name="footer"></slot>
					</footer>
				</div>
				<ts-cover class="ts-dialog-cover" ?data-visible=${this.visible} @click="${this.close}"></ts-cover>
			`;
		}

		firstUpdated() {
			document.addEventListener('keydown', this.onKeyDown);
		}

		disconnectedCallback() {
			document.removeEventListener('keydown', this.onKeyDown);
			super.disconnectedCallback();
		}

		onKeyDown(event) {
			if (!this.visible || this.noCloseOnEscKey) {
				return;
			}

			// Ignore all keys fired during IME composition
			if (event.isComposing) {
				return;
			}

			if (helpers.isEscapeEvent(event)) {
				this.close();
			}
		}
	}
);
