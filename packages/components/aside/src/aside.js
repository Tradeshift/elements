import { TSElement, unsafeCSS, html, customElementDefineHelper, CloseOnEscBehavior } from '@tradeshift/elements';
import css from './aside.css';
import '@tradeshift/elements.button';
import '@tradeshift/elements.cover';
import '@tradeshift/elements.spinner';

export class TSAside extends TSElement {
	constructor() {
		super();
		this.title = '';
		this.visible = false;
		this.hasFoot = false;
		this.hasPlatformObject = false;
		this.noCloseOnEscKey = false;
		this.closeBehavior = new CloseOnEscBehavior(this);
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Aside header title */
			title: { type: String, attribute: 'data-title' },
			/** Show/hide aside */
			visible: { type: Boolean, attribute: 'data-visible', reflect: true },
			/** If it exist as an attribute, the aside would show a spinner in it with the provided value of this attribute as the message of it */
			busy: { type: String, attribute: 'data-busy', reflect: true },
			/** Disable closing the aside with escape key */
			noCloseOnEscKey: { type: Boolean, attribute: 'no-close-on-esc-key' },
			/** INTERNAL */
			hasFoot: { type: Boolean },
			/** INTERNAL */
			hasPlatformObject: { type: Boolean }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get slide() {
		const pre = 'ts-slide';
		const mid = this.visible ? 'in' : 'out';
		const dir = this.direction === 'rtl' ? 'left' : 'right';
		return `${pre}-${mid}-${dir}`;
	}

	get spinner() {
		if (this.busy === undefined || this.busy === null) {
			return '';
		}
		return html`
			<div class="spinner-overlay">
				<ts-spinner data-visible data-message="${this.busy}"></ts-spinner>
			</div>
		`;
	}

	close(e) {
		this.visible = false;
	}

	footerSlot(e) {
		this.hasFoot = true;
	}

	platformObjectSlot(e) {
		const slot = e.currentTarget;
		const assignedNodes = slot.assignedNodes();
		this.hasPlatformObject = assignedNodes && assignedNodes.length;
	}

	render() {
		return html`
			<div dir="${this.direction}" class="aside-container ${this.slide} ${this.hasFoot ? 'has-footer' : ''}">
				<header>
					<div class="aside-title">${this.title}</div>
					<div class="aside-close">
						<ts-button class="no-border" icon="close-clear" @click="${this.close}"></ts-button>
					</div>
				</header>
				<div class="aside-note">
					<!-- Use this slot name on the \`ts-note\` in the aside	-->
					<slot name="note" class="note-in-aside"></slot>
				</div>
				<div class="aside-platform-object ${this.hasPlatformObject ? '' : 'hidden'}">
					<!-- The section between aside header and content that platform object should be shown with different background color	-->
					<slot name="platform-object" @slotchange="${this.platformObjectSlot}"></slot>
				</div>
				<main class="aside-main">
					<!-- Main content of the aside that doesn't fit into any other available slots	-->
					<slot name="main"></slot>
				</main>
				<footer>
					<!-- Footer content and action buttons goes. You should use the ts-button-group here.	-->
					<slot name="footer" @slotchange="${this.footerSlot}"></slot>
				</footer>
				${this.spinner}
			</div>
			<ts-cover class="ts-aside-cover" ?data-visible=${this.visible} @click="${this.close}"></ts-cover>
		`;
	}

	update(changedProperties) {
		super.update(changedProperties);
		if (changedProperties.has('visible')) {
			const oldVal = changedProperties.get('visible');
			if (oldVal === false) {
				/**
				 * Emitted when the aside is about to be opened
				 */
				this.dispatchCustomEvent('open');
			} else if (oldVal === true) {
				/**
				 * Emitted when the aside is about to be closed
				 */
				this.dispatchCustomEvent('close');
			}
		}
	}

	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has('visible')) {
			const oldVal = changedProperties.get('visible');
			if (oldVal === false) {
				/**
				 * Emitted when the aside has been opened
				 */
				this.dispatchCustomEvent('opened');
			} else if (oldVal === true) {
				/**
				 * Emitted when the aside has been closed
				 */
				this.dispatchCustomEvent('closed');
			}
		}
	}

	firstUpdated() {
		this.closeBehavior.start();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.closeBehavior.stop();
	}
}

customElementDefineHelper('ts-aside', TSAside);
