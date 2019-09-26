import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.cover';
import css from './spinner.css';
import { types, sizes, colors } from './utils';

customElementDefineHelper(
	'ts-spinner',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				color: { type: String, attribute: 'data-color', reflect: true },
				message: { type: String, attribute: 'data-message' },
				size: { type: String, attribute: 'data-size', reflect: true },
				type: { type: String, attribute: 'data-type', reflect: true },
				visible: { type: Boolean, attribute: 'data-visible' }
			};
		}

		constructor() {
			super();
			this.color = colors.BLUE;
			this.message = '';
			this.size = sizes.LARGE;
			this.type = types.LIGHT;
			this.visible = false;
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
				return '';
			}
			return html`
				<div class="spinner"></div>
				${this.messageHtml}
			`;
		}
	}
);
