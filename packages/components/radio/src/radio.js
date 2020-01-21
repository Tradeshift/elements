import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './radio.css';
import { customEventNames } from './utils/constants';

customElementDefineHelper(
	'ts-radio',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				value: { type: String, reflect: true },
				label: { type: String, reflect: true },
				checked: { type: Boolean, reflect: true },
				disabled: { type: Boolean, reflect: true }
			};
		}

		get direction() {
			return this.parentElement.dir ? this.parentElement.dir : this.bodyDir;
		}

		handleClick(e) {
			e.preventDefault();
			e.stopPropagation();
			this.dispatchCustomEvent(customEventNames.RADIO_CLICK);
		}

		handleFocus() {
			this.dispatchCustomEvent(customEventNames.RADIO_FOCUS);
		}

		handleBlur() {
			this.dispatchCustomEvent(customEventNames.RADIO_BLUR);
		}

		firstUpdated() {
			this.shadowRoot.host.addEventListener('focus', this.handleFocus);
			this.shadowRoot.host.addEventListener('blur', this.handleBlur);
			this.shadowRoot.host.addEventListener('click', this.handleClick);
		}

		disconnectedCallback() {
			this.shadowRoot.host.removeEventListener('focus', this.handleFocus);
			this.shadowRoot.host.removeEventListener('blur', this.handleBlur);
			this.shadowRoot.host.removeEventListener('click', this.handleClick);
		}

		render() {
			return html`
				<label tabindex="-1" dir="${this.direction}">
					${this.label}
					<span
						class="checkbox"
						tabindex="-1"
						type="radio"
						role="radio"
						.value="${this.value}"
						?checked="${this.checked}"
						?disabled="${this.disabled}"
					></span>
				</label>
			`;
		}
	}
);
