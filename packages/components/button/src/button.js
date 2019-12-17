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
			spirit: { type: String },
			dir: { type: String },
			size: { type: String, reflect: true },
			busy: { type: String, reflect: true },
			icon: { type: String, reflect: true },
			disabled: { type: Boolean, reflect: true },
			grouped: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	constructor() {
		super();
		this.grouped = false;
	}

	isIconWithTextType() {
		return this.type === types.TEXT;
	}

	get iconType() {
		if (this.spirit) {
			return this.spirit;
		}

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

	get normalText() {
		return html`
			<span><slot id="text-slot"></slot></span>
		`;
	}

	get buttonKind() {
		if (this.icon && this.isIconWithTextType()) {
			return this.iconWithText;
		} else if (this.icon) {
			return this.normalIcon;
		} else {
			return this.normalText;
		}
	}

	render() {
		return html`
			<button ?disabled="${this.disabled}" dir="${this.direction}">
				${this.buttonKind}
			</button>
		`;
	}
}

customElementDefineHelper('ts-button', TSButton);
