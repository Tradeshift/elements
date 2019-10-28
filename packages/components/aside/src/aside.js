import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './aside.css';
import '@tradeshift/elements.button';
import '@tradeshift/elements.cover';
import '@tradeshift/elements.spinner';
import { customEventNames } from './utils';

customElementDefineHelper(
	'ts-aside',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				title: { type: String, attribute: 'data-title' },
				visible: { type: Boolean, attribute: 'data-visible', reflect: true },
				busy: { type: String, attribute: 'data-busy', reflect: true },
				hasFoot: { type: Boolean },
				hasPlatformObject: { type: Boolean }
			};
		}

		constructor() {
			super();
			this.title = '';
			this.visible = false;
			this.hasFoot = false;
			this.hasPlatformObject = false;
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

		get direction() {
			return this.bodyDir;
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
						<slot name="note" class="note-in-aside"></slot>
					</div>
					<div class="aside-platform-object ${this.hasPlatformObject ? '' : 'hidden'}">
						<slot name="platform-object" @slotchange="${this.platformObjectSlot}"></slot>
					</div>
					<main class="aside-main">
						<slot name="main"></slot>
					</main>
					<footer>
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
					this.dispatchCustomEvent(customEventNames.OPEN);
				} else if (oldVal === true) {
					this.dispatchCustomEvent(customEventNames.CLOSE);
				}
			}
		}

		updated(changedProperties) {
			super.updated(changedProperties);
			if (changedProperties.has('visible')) {
				const oldVal = changedProperties.get('visible');
				if (oldVal === false) {
					this.dispatchCustomEvent(customEventNames.OPENED);
				} else if (oldVal === true) {
					this.dispatchCustomEvent(customEventNames.CLOSED);
				}
			}
		}
	}
);
