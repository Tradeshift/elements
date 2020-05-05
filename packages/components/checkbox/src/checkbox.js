import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './checkbox.css';

export class TSCheckbox extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			name: { type: String },
			value: { type: String },
			dir: { type: String },
			label: { type: String, attribute: 'data-label' },
			checked: { type: Boolean, reflect: true },
			disabled: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.name = '';
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	onClick(e) {
		e.stopPropagation();
		if (this.disabled) {
			return;
		}
		this.checked = !this.checked;
	}

	render() {
		return html`
			<div dir="${this.dir}" class="checkbox-container" @click="${this.onClick}">
				<input
					type="checkbox"
					.name="${this.name}"
					.value="${this.value}"
					?checked="${this.checked}"
					?disabled="${this.disabled}"
				/>
				<div class="checkbox"></div>
				${this.label}
			</div>
		`;
	}
}

customElementDefineHelper('ts-checkbox', TSCheckbox);
