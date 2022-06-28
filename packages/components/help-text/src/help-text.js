import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './help-text.css';
import '@tradeshift/elements.icon';
import { alert, info } from '@tradeshift/elements.icon/lib/assets/icons';

import { sizes } from './utils';

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
			/** Type of the help text which changes the styling and icon: 'error', 'warning' */
			type: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		this.size = sizes.FULL;
	}

	get icon() {
		const iconTypes = {
			default: 'info',
			error: 'error',
			warning: 'warning'
		};
		let iconType = iconTypes[this.type ? this.type : iconTypes.default];
		if (this.disabled) {
			iconType = 'disabled';
		}
		const icons = {
			default: info,
			error: alert,
			warning: alert
		};
		const icon = icons[this.type] ? icons[this.type] : icons.default;
		return html`<ts-icon class="info-icon" icon="${icon}" size="medium" type="${iconType}"></ts-icon>`;
	}

	render() {
		const isSingleMessage = this.messages.length === 1;

		const rtl = this.rtl || this.bodyHasRTL;

		return html`
			<dl ?data-rtl="${rtl}" data-size="${this.size}">
				${this.title
					? html`
							<dt>
								${this.icon}
								<!-- You can use this slot to provide custom html as title -->
								<slot name="title">${this.title}</slot>
							</dt>
					  `
					: ''}
				<!-- Customize message items -->
				<slot name="messages">
					${this.messages.map(
						message => html`
							<dd class="${isSingleMessage && !this.title ? 'single-message' : ''}">
								${isSingleMessage && !this.title ? this.icon : ''} ${message}
							</dd>
						`
					)}
				</slot>
			</dl>
		`;
	}
}

customElementDefineHelper('ts-help-text', TSHelpText);
