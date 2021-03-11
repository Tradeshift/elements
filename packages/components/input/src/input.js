import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './input.css';

export class TSInput extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Disable status of input */
			disabled: { type: Boolean, attribute: 'disabled', reflect: true }
		};
	}

	attributeChangedCallback(name, oldVal, newVal) {
		const input = this.getSlotInput();
		if (name === 'disabled' && input) {
			input.disabled = newVal !== undefined && newVal !== null;
		}
		super.attributeChangedCallback(name, oldVal, newVal);
	}

	firstUpdated() {
		const input = this.getSlotInput();
		if (this.disabled !== undefined && this.disabled !== null && input) {
			input.disabled = true;
		}
	}

	getSlotInput() {
		const slot = this.shadowRoot.querySelector('slot');
		if (!slot) {
			return null;
		}
		const elements = slot.assignedNodes().filter(el => el.constructor.name === 'HTMLInputElement');
		if (elements.length < 1) {
			console.warn('We need one input element in the slot');
		}
		if (elements.length > 1) {
			console.warn('We need only one input element in the slot');
		}
		return elements[0];
	}

	render() {
		return html`
			<div>
				<!--	Put an input tag inside ts-input, so it's included in the light dom which let's the form to include its data in form data -->
				<slot></slot>
			</div>
		`;
	}
}

customElementDefineHelper('ts-input', TSInput);
