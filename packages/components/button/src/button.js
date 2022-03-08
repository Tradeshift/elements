import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import css from './button.css';
import { types } from './utils';

export { sizes, types } from './utils';

export class TSButton extends TSElement {
	constructor() {
		super();
		this.grouped = false;
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Button type to have different style `primary`, `secondary`, `text`, `accept`, `warning`, `danger` */
			type: { type: String, reflect: true },
			/** Size of the button, `macro`, `micro` */
			size: { type: String, reflect: true },
			/** Show busy/loading animation */
			busy: { type: Boolean, reflect: true },
			/** Icon name, see the list of available icons in ts-icon component. Also note that it will hide the slot content unless the type is text */
			icon: { type: String, reflect: true },
			/** Determine if the button is disabled. `button-click` event won't be dispatched */
			disabled: { type: Boolean, reflect: true },
			/** Make the button focused */
			focused: { type: Boolean, reflect: true },
			/** Direction of the component 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Make the button take the full width of the container */
			fullWidth: { type: Boolean, reflect: true, attribute: 'full-width' },
			/** INTERNAL For internal use in `ts-button-group` component */
			grouped: { type: Boolean, reflect: true },
			/** INTERNAL For internal use in `ts-button-group` component */
			inline: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	get iconType() {
		if (this.icon && this.type === types.TEXT) {
			return 'action';
		}
		const colorBackgroundTypes = [types.DANGER, types.WARNING, types.ACCEPT, types.PRIMARY];
		return colorBackgroundTypes.indexOf(this.type) > -1 ? 'inverted' : 'default';
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		if (name === 'focused' && this.focused) {
			// set focus only when component is defined.
			window.customElements.whenDefined('ts-button').then(() => this.shadowRoot.getElementById('button').focus());
		}
	}

	clickHandler(event) {
		if (!this.disabled && !this.busy) {
			this.dispatchCustomEvent('button-click', event);
		}
	}

	render() {
		return html`
			<button id="button" ?disabled="${this.disabled}" dir="${this.direction}" @click="${this.clickHandler}">
				${this.icon ? html` <ts-icon icon="${this.icon}" size="large" type="${this.iconType}"></ts-icon> ` : ''}
				<span>
					<!-- Text of the button should be wrapped around \`ts-button\` element -->
					<slot></slot>
				</span>
			</button>
		`;
	}
}

customElementDefineHelper('ts-button', TSButton);
