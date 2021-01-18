import { TSElement, unsafeCSS, html, customElementDefineHelper, CloseOnEscBehavior } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.cover';
import '@tradeshift/elements.header';
import { customEventNames, sizes } from './utils';
import css from './modal.css';

export { customEventNames, sizes } from './utils';

export class TSModal extends TSElement {
	constructor() {
		super();
		this.size = sizes.LARGE;
		this.title = '';
		this.noCloseOnEscKey = false;
		this.closeBehavior = new CloseOnEscBehavior(this);
		this.hideHeader = false;
		this.noPadding = false;
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction 'rtl' or 'ltr' */
			dir: { type: String, reflect: true, attribute: 'data-dir' },
			/** Size of the modal. Available variants: 'large', 'medium', 'small' */
			size: { type: String, reflect: true, attribute: 'data-size' },
			/** Modal header text */
			title: { type: String, reflect: true, attribute: 'data-title' },
			/** Show/hide the modal */
			visible: { type: Boolean, reflect: true, attribute: 'data-visible' },
			/** Disable the functionality to close the modal on press of escape key */
			noCloseOnEscKey: { type: Boolean, attribute: 'no-close-on-esc-key' },
			/** Show/hide the title of the modal */
			hideHeader: { type: Boolean, attribute: 'hide-header' },
			/** Add/remove standard paddings to the main content */
			noPadding: { type: Boolean, attribute: 'no-padding' }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get hidden() {
		return this.visible ? 'fade-in' : 'fade-out';
	}

	get header() {
		if (this.hideHeader) {
			return '';
		}
		return html`
			<ts-header .title="${this.title}" dir="${this.direction}">
				<ts-button class="no-border" icon="close-clear" size="large" @click="${this.close}"></ts-button>
			</ts-header>
		`;
	}

	open() {
		this.visible = true;
	}

	close() {
		this.visible = false;
	}

	handleTransition(e) {
		if (e.propertyName !== 'opacity') {
			return;
		}
		this.dispatchCustomEvent(this.visible ? customEventNames.OPENED : customEventNames.CLOSED);
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		if (name !== 'data-visible') {
			return;
		}
		this.dispatchCustomEvent(newVal ? customEventNames.OPEN : customEventNames.CLOSE);
	}

	render() {
		return html`
			<div
				dir="${this.direction}"
				class="container ${this.size} ${this.hidden}"
				@transitionend="${this.handleTransition}"
			>
				${this.header}
				<div class="note">
					<!-- Use this slot name on the \`ts-note\` in the modal	-->
					<slot name="note"></slot>
				</div>
				<main>
					<!-- Content in the main section of the modal	-->
					<slot name="main"></slot>
				</main>
				<footer>
					<!-- Content in the footer section of the modal, most of the time \`ts-button-group\`	-->
					<slot name="footer"></slot>
				</footer>
			</div>
			<ts-cover class="ts-modal-cover" ?data-visible=${this.visible} @click="${this.close}"></ts-cover>
		`;
	}

	firstUpdated() {
		this.closeBehavior.start();
	}

	disconnectedCallback() {
		this.closeBehavior.stop();
		super.disconnectedCallback();
	}
}

customElementDefineHelper('ts-modal', TSModal);
