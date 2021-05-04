import '@tradeshift/elements.icon';
import { customElementDefineHelper, html, TSElement, unsafeCSS } from '@tradeshift/elements';
import css from './input.css';

export class TSInput extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Show error style */
			hasError: { type: Boolean, reflect: true },
			/** Disable state of the input */
			disabled: { type: Boolean, reflect: true },
			/** Readonly state of the input */
			readonly: { type: Boolean, reflect: true },
			/** Direction 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Icon that appears at the beginning of the input (left in ltr direction) */
			iconStart: { type: String, reflect: true, attribute: 'icon-start' },
			/** Icon that appears at the ending part of the input (right in ltr direction). Readonly and disabled state will show a lock icon instead. */
			iconEnd: { type: String, reflect: true, attribute: 'icon-end' }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get iconEndHtml() {
		const iconEnd = this.readonly || this.disabled ? 'lock' : this.iconEnd;
		return iconEnd ? html`<ts-icon class="icon-end" icon=${iconEnd} size="large" type="action"></ts-icon>` : '';
	}

	attributeChangedCallback(name, oldVal, newVal) {
		const input = this.getSlotInput();
		if (name === 'disabled' && input) {
			input.disabled = newVal !== undefined && newVal !== null;
		}
		if (name === 'readonly' && input) {
			input.readonly = newVal !== undefined && newVal !== null;
		}
		super.attributeChangedCallback(name, oldVal, newVal);
	}

	firstUpdated() {
		const input = this.getSlotInput();
		if (this.disabled !== undefined && this.disabled !== null && input) {
			input.disabled = true;
		}
		if (this.readonly !== undefined && this.readonly !== null && input) {
			input.readonly = true;
		}
		if (input.tagName === 'TEXTAREA') {
			input.addEventListener('input', this.calcTextareaHeight);
		}
	}

	disconnectedCallback() {
		const input = this.getSlotInput();
		if (input.tagName === 'TEXTAREA') {
			input.removeEventListener('input', this.calcTextareaHeight);
		}
	}

	calcTextareaHeight(event) {
		const el = event.target;
		el.style.cssText = 'height:auto; padding: 10px;'; // to let it get scroll, so we can find the value
		el.style.cssText = `height: ${el.scrollHeight + 2}px`; // 2 is the border width
	}

	getSlotInput() {
		const slot = this.shadowRoot.querySelector('slot');
		if (!slot) {
			return null;
		}
		const elements = slot
			.assignedNodes()
			.filter(el => ['HTMLInputElement', 'HTMLTextAreaElement'].includes(el.constructor.name));
		if (elements.length < 1) {
			console.warn('We need one input or textarea element in the slot');
		}
		if (elements.length > 1) {
			console.warn('We need only one input or one textarea element in the slot');
		}
		return elements[0];
	}

	render() {
		return html`
			<div dir=${this.direction}>
				${this.iconStart &&
				html`<ts-icon class="icon-start" icon=${this.iconStart} size="large" type="action"></ts-icon>`}
				<!--	Put an input tag inside ts-input, so it's included in the light dom which let's the form to include its data in form data -->
				<slot></slot>
				${this.iconEndHtml}
			</div>
		`;
	}
}

customElementDefineHelper('ts-input', TSInput);
