import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './spinner.css';
import { sizes, colors } from './utils';

export class TSSpinner extends TSElement {
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
			/** Spinner color, `blue`, `mono`, `white` */
			color: { type: String, attribute: 'data-color', reflect: true },
			/** Text to show below the spinner */
			message: { type: String, attribute: 'data-message', reflect: true },
			/** Size of the spinner, `large`, `medium`, `small` */
			size: { type: String, attribute: 'data-size', reflect: true },
			/** Show/hide the spinner */
			visible: { type: Boolean, attribute: 'data-visible', reflect: true }
		};
	}

	get messageHtml() {
		if (!this.message) {
			return '';
		}
		return html` <div class="message">${this.message}</div> `;
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

customElementDefineHelper('ts-spinner', TSSpinner);
