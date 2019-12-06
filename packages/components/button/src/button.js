import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import css from './button.css';
import { types } from './utils';

export class TSButton extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			type: { type: String, reflect: true },
			size: { type: String, reflect: true },
			busy: { type: String, reflect: true },
			icon: { type: String, reflect: true },
			disabled: { type: Boolean, reflect: true },
			grouped: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.grouped = false;
	}

	get iconType() {
		const colorBackgroundTypes = [types.DANGER, types.WARNING, types.ACCEPT, types.PRIMARY];
		return colorBackgroundTypes.indexOf(this.type) > -1 ? 'inverted' : 'default';
	}

	get iconWithText() {
		return html`
			<ts-icon icon="${this.icon}" size="large" type="${this.iconType}"></ts-icon><span><slot></slot></span>
		`;
	}

	get normalIcon() {
		return html`
			<ts-icon icon="${this.icon}" size="large" type="${this.iconType}"></ts-icon>
		`;
	}

	render() {
		return html`
			<button ?disabled="${this.disabled}">
				${this.icon
					? html`
							${this.type === types.TEXT ? this.iconWithText : this.normalIcon}
					  `
					: html`
							<span><slot></slot></span>
					  `}
			</button>
		`;
	}
}

customElementDefineHelper('ts-button', TSButton);
