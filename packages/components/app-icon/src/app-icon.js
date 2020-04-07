import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './app-icon.css';

export class TSIcon extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			size: { type: String, reflect: true },
			src: { type: String, reflect: true },
			alt: { type: String, reflect: true }
		};
	}

	render() {
		return html`
			<img .src="${this.src}" .alt="${this.alt}"></img>
		`;
	}
}
customElementDefineHelper('ts-app-icon', TSIcon);
