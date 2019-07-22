import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './cover.css';

customElementDefineHelper(
	'ts-cover',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				visible: { type: Boolean, reflect: true }
			};
		}

		constructor() {
			super();
			this.visible = false;
		}

		render() {
			return html`
				<div class="${this.visible ? 'ts-fadeIn' : 'ts-fadeOut'}"></div>
			`;
		}
	}
);
