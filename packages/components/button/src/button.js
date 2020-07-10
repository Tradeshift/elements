import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import css from './button.css';
import { types } from './utils';

export { sizes, types } from './utils';

export class TSButton extends TSElement {
	constructor() {
		super();
		this.grouped = false;
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			type: { type: String, reflect: true },
			size: { type: String, reflect: true },
			busy: { type: Boolean, reflect: true },
			icon: { type: String, reflect: true },
			disabled: { type: Boolean, reflect: true },
			grouped: { type: Boolean, reflect: true },
			focused: { type: Boolean, reflect: true },
			dir: { type: String, reflect: true }
		};
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	get iconType() {
		if (this.icon && this.type === types.TEXT) {
			return 'action';
		}
		const colorBackgroundTypes = [types.DANGER, types.WARNING, types.ACCEPT, types.PRIMARY];
		return colorBackgroundTypes.indexOf(this.type) > -1 ? 'inverted' : 'default';
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		if (name === 'focused' && this.focused) {
			// set focus only when component is defined.
			window.customElements.whenDefined('ts-button').then(() => this.shadowRoot.getElementById('button').focus());
		}
	}

	clickHandler(event) {
		if (!this.disabled && !this.busy) {
			this.dispatchCustomEvent('button-click', event);
		}
	}

	render() {
		return html`
			<button id="button" ?disabled="${this.disabled}" dir="${this.direction}" @click="${this.clickHandler}">
				${this.icon
					? html`
							<ts-icon icon="${this.icon}" size="large" type="${this.iconType}"></ts-icon>
					  `
					: ''}
				<span><slot></slot></span>
			</button>
		`;
	}
}

customElementDefineHelper('ts-button', TSButton);
