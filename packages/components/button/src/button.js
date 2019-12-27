import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import css from './button.css';
import { kinds, types } from './utils';

export class TSButton extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			type: { type: String, reflect: true },
			dir: { type: String, reflect: true },
			size: { type: String, reflect: true },
			busy: { type: String, reflect: true },
			icon: { type: String, reflect: true },
			disabled: { type: Boolean, reflect: true },
			grouped: { type: Boolean, reflect: true },
			kind: { type: String, reflect: true }
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
		return (
			this.type === types.ACTION_PRIMARY || this.type === types.ACTION_SECONDARY || this.type === types.ACTION_INVERTED
		);
	}

	get iconType() {
		if (this.kind === kinds.ICON_TEXT) {
			return this.type;
		}

		const colorBackgroundTypes = [types.DANGER, types.WARNING, types.ACCEPT, types.PRIMARY];
		return colorBackgroundTypes.indexOf(this.type) > -1 ? 'inverted' : 'default';
	}

	get buttonByKind() {
		switch (this.kind) {
			case kinds.TEXT:
				return html`
					<span><slot></slot></span>
				`;
			case kinds.ICON:
				return html`
					<ts-icon icon="${this.icon}" size="large" type="${this.iconType}"></ts-icon>
				`;
			case kinds.ICON_TEXT:
				return html`
					<ts-icon icon="${this.icon}" size="large" type="${this.iconType}"></ts-icon><span><slot></slot></span>
				`;
		}
	}

	get buttonKind() {
		if (this.isIconWithTextType()) {
			return kinds.ICON_TEXT;
		} else if (this.icon) {
			return kinds.ICON;
		} else {
			return kinds.TEXT;
		}
	}

	firstUpdated() {
		this.kind = this.buttonKind;
		console.log('first updated');
	}

	render() {
		return html`
			<button ?disabled="${this.disabled}" dir="${this.direction}">
				${this.buttonByKind}
			</button>
		`;
	}
}

customElementDefineHelper('ts-button', TSButton);
