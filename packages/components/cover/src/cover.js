import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './cover.css';

export class TSCover extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			visible: { type: Boolean, attribute: 'data-visible', reflect: true }
		};
	}

	constructor() {
		super();
		this.visible = false;
	}

	render() {
		return html`
			<div class="cover ${this.visible ? 'ts-fadeIn' : 'ts-fadeOut'}"></div>
		`;
	}
}

customElementDefineHelper('ts-cover', TSCover);
