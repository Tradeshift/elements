import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './radio.css';

export class TSRadio extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Value of the radio */
			value: { type: String, reflect: true },
			/** Label of the radio */
			label: { type: String, reflect: true },
			/** Check status */
			checked: { type: Boolean, reflect: true },
			/** Disabled status */
			disabled: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.parentElement.dir ? this.parentElement.dir : this.bodyDir;
	}

	handleClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.dispatchCustomEvent('radio-click');
	}

	handleFocus() {
		this.dispatchCustomEvent('radio-focus');
	}

	handleBlur() {
		this.dispatchCustomEvent('radio-blur');
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

customElementDefineHelper('ts-radio', TSRadio);
