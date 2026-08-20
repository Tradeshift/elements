import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import css from './app-icon.css';

export class TSIcon extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Size of the app icon, available variants: ''(default), 'large' */
			size: { type: String, reflect: true },
			/** Specifies the URL of an image */
			src: { type: String, reflect: true },
			/** Specifies an alternate text for an image */
			alt: { type: String, reflect: true }
		};
	}

	render() {
		return html` <img src="${ifDefined(this.src)}" alt="${ifDefined(this.alt)}" /> `;
	}
}
customElementDefineHelper('ts-app-icon', TSIcon);
