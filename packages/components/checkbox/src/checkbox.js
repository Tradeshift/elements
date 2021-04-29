import { customElementDefineHelper, html, TSElement, unsafeCSS } from '@tradeshift/elements';
import css from './checkbox.css';

export class TSCheckbox extends TSElement {
	constructor() {
		super();
		this.name = '';
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Name of checkbox */
			name: { type: String, reflect: true },
			/** Value of checkbox */
			value: { type: String, reflect: true },
			/** Direction of the component 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Label of checkbox. To customize the label and have something more than simple string, use the slot, and remove this attribute */
			label: { type: String, attribute: 'data-label' },
			/** Status of checkbox */
			checked: { type: Boolean, reflect: true },
			/** disabled */
			disabled: { type: Boolean, reflect: true },
			/** readonly, user can't change the value like disabled, but with different styling */
			readonly: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	onClick() {
		if (this.disabled || this.readonly) {
			return;
		}
		this.checked = !this.checked;
	}

	render() {
		return html`
			<div dir="${this.dir}" class="checkbox-container ${this.disabled ? 'disabled' : ''}" @click="${this.onClick}">
				<input
					type="checkbox"
					.name="${this.name}"
					.value="${this.value}"
					?checked="${this.checked}"
					?disabled="${this.disabled || this.readonly}"
				/>
				<div class="checkbox"></div>
				${this.label
					? this.label
					: html`
							<!-- To customized checkbox label (links, ...). Remember you need to remove 'data-label' attribute. -->
							<slot></slot>
					  `}
			</div>
		`;
	}
}

customElementDefineHelper('ts-checkbox', TSCheckbox);
