import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './help-text.css';
import '@tradeshift/elements.icon';

customElementDefineHelper(
	'ts-help-text',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				messages: { type: Array },
				title: { type: String },
				size: { type: String },
				rtl: { type: Boolean }
			};
		}

		constructor() {
			super();
			this.size = 'full';
		}

		get infoIcon() {
			return html`
				<ts-icon class="info-icon" icon="info" size="medium" type="info"></ts-icon>
			`;
		}

		render() {
			const isSingleMessage = this.messages.length === 1;

			const rtl = this.rtl || this.bodyHasRTL;

			return html`
				<dl ?data-rtl="${rtl}" data-size="${this.size}">
					${!isSingleMessage && this.title
						? html`
								<dt>
									${this.infoIcon}
									<slot name="title">
										${this.title}
									</slot>
								</dt>
						  `
						: ''}

					<slot name="messages">
						${this.messages.map(
							message => html`
								<dd class="${isSingleMessage ? 'single-message' : ''}">
									${isSingleMessage ? this.infoIcon : ''} ${message}
								</dd>
							`
						)}
					</slot>
				</dl>
			`;
		}
	}
);
