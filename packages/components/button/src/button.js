import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import css from './button.css';
import { types } from './utils';

export class TSButton extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	static get properties() {
		return {
			type: { type: String, reflect: true },
			size: { type: String, reflect: true },
			busy: { type: String, reflect: true },
			icon: { type: String, reflect: true },
			disabled: { type: Boolean, reflect: true },
			grouped: { type: Boolean, reflect: true },
			dir: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		this.grouped = false;
	}

	get iconType() {
		if (this.icon && this.type === types.TEXT) {
			return 'action';
		}
		const colorBackgroundTypes = [types.DANGER, types.WARNING, types.ACCEPT, types.PRIMARY];
		return colorBackgroundTypes.indexOf(this.type) > -1 ? 'inverted' : 'default';
	}

	render() {
		return html`
			<button ?disabled="${this.disabled}" dir="${this.direction}">
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
