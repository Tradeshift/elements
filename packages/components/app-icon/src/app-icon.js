import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './app-icon.css';

customElementDefineHelper(
	'ts-app-icon',
	class extends TSElement {
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

		constructor() {
			super();
			this.size = '';
		}

		render() {
			return html`
				<img .src="${this.src}" .alt="${this.alt}" size="${this.size}"></img>
			`;
		}
	}
);
