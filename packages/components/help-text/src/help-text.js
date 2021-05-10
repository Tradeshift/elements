import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './help-text.css';
import '@tradeshift/elements.icon';

import { classNames, sizes } from './utils';

export class TSHelpText extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** List of message(s) */
			messages: { type: Array, reflect: true },
			/** If there are multiple messages, there should be a title for the help text */
			title: { type: String, reflect: true },
			size: { type: String, reflect: true },
			rtl: { type: Boolean, reflect: true },
			/** Apply disabled style for the message */
			disabled: { type: Boolean, reflect: true },
			/** Type of the help text which changes the styling and icon: 'error' */
			type: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		this.size = sizes.FULL;
	}

	get infoIcon() {
		const iconTypes = {
			default: 'info',
			error: 'error'
		};
		let iconType = iconTypes[this.type ? this.type : iconTypes.default];
		if (this.disabled) {
			iconType = 'disabled';
		}
		return html` <ts-icon class="info-icon" icon="info" size="medium" type="${iconType}"></ts-icon> `;
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
								<!-- Customize title of the help text if there are multiple messages -->
								<slot name="title">${this.title}</slot>
							</dt>
					  `
					: ''}
				<!-- Customize message items -->
				<slot name="messages">
					${this.messages.map(
						message => html`
							<dd class="${isSingleMessage ? classNames.SINGLE_MESSAGE : ''}">
								${isSingleMessage ? this.infoIcon : ''} ${message}
							</dd>
						`
					)}
				</slot>
			</dl>
		`;
	}
}

customElementDefineHelper('ts-help-text', TSHelpText);
