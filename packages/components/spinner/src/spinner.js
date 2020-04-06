import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './spinner.css';
import { sizes, colors } from './utils';

customElementDefineHelper(
	'ts-spinner',
	class extends TSElement {
		constructor() {
			super();
			this.color = colors.BLUE;
			this.size = sizes.LARGE;
		}

		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				color: { type: String, attribute: 'data-color', reflect: true },
				message: { type: String, attribute: 'data-message', reflect: true },
				size: { type: String, attribute: 'data-size', reflect: true },
				visible: { type: Boolean, attribute: 'data-visible', reflect: true }
			};
		}

		get messageHtml() {
			if (!this.message) {
				return '';
			}
			return html`
				<div class="message">${this.message}</div>
			`;
		}

		render() {
			if (!this.visible) {
				return html``;
			}
			return html`
				<div class="spinner"></div>
				${this.messageHtml}
			`;
		}
	}
);
