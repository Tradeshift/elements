import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './textarea.css';
import { countLines, getRowsInRange } from './utils';

/**
 * @class TSTextArea
 * @property {string} title - The title text for the header
 * @property {string} name - Specifies the name of the input element
 * @property {boolean} disabled - Disables interaction with element
 * @property {boolean} dir - Direction of the component 'rtl' or 'ltr'
 * @private {HTMLTextAreaElement} textarea - Textarea outside of shadow DOM to support forms
 */
class TSTextArea extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			title: { type: String, reflect: true },
			name: { type: String, reflect: true },
			disabled: { type: Boolean, reflect: true },
			value: { type: String, reflect: true },
			dir: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	constructor() {
		super();
		this.textarea = null;
		this.updateChangedHandler = this.updateChangedHandler.bind(this);
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		if (!this.textarea) {
			return;
		}

		switch (name) {
			case 'disabled':
				this.updateDisabled();
				break;
			case 'value':
				this.updateValue();
				break;
			case 'name':
				this.updateName();
				break;
			default:
				break;
		}
	}

	findInput() {
		const slot = this.shadowRoot.querySelector('slot');
		const assignedNodes = slot.assignedNodes();
		const textAreaElements = assignedNodes.filter(el => el.constructor.name === 'HTMLTextAreaElement');
		if (textAreaElements.length > 1) {
			throw new Error('Slot should contain only one HTMLTextAreaElement');
		}

		if (textAreaElements.length === 0) {
			this.createInput();
			return;
		}

		const textarea = textAreaElements[0];
		if (textarea instanceof HTMLTextAreaElement) {
			this.textarea = textarea;
		}
	}

	createInput() {
		this.textarea = document.createElement('textarea');
		this.appendChild(this.textarea);
	}

	updateValue() {
		if (this.value) {
			this.textarea.value = this.value;
		}
		this.textarea.rows = getRowsInRange(countLines(this.textarea.value));
	}

	updateName() {
		if (this.name) {
			this.textarea.name = this.name;
		}
	}

	updateDisabled() {
		if (this.disabled) {
			this.textarea.setAttribute('disabled', 'true');
		} else {
			this.textarea.removeAttribute('disabled');
		}
	}

	firstUpdated() {
		this.findInput();
		this.updateValue();
		this.updateName();
		this.updateDisabled();

		if (this.textarea) {
			this.textarea.addEventListener('input', this.updateChangedHandler);
		}
	}

	updateChangedHandler() {
		this.value = this.textarea.value;
		this.textarea.rows = getRowsInRange(countLines(this.value));
	}

	render() {
		return html`
			<div class="textarea-wrapper" dir="${this.direction}">
				<label>${this.title}</label>
				<slot></slot>
			</div>
		`;
	}
}

customElementDefineHelper('ts-textarea', TSTextArea);
