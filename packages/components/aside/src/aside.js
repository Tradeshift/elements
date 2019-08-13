import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './aside.css';
import '@tradeshift/elements.button';
import '@tradeshift/elements.cover';
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
				hasFoot: { type: Boolean }
			};
		}

		constructor() {
			super();
			this.title = '';
			this.visible = false;
			this.hasFoot = false;
		}

		close(e) {
			this.dispatchCustomEvent(customEventNames.ON_CLOSE);
			this.visible = false;
			this.dispatchCustomEvent(customEventNames.ON_CLOSED, {}, true);
		}

		footerSlot(e) {
			this.hasFoot = true;
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

		render() {
			return html`
				<div dir="${this.direction}" class="aside-container ${this.slide} ${this.hasFoot ? 'has-footer' : ''}">
					<header>
						<div class="aside-title">${this.title}</div>
						<div class="aside-close">
							<ts-button class="no-border" icon="remove" @click="${this.close}"></ts-button>
						</div>
					</header>
					<main class="aside-main">
						<slot name="main"></slot>
					</main>
					<footer>
						<slot name="footer" @slotchange="${this.footerSlot}"></slot>
					</footer>
				</div>
				<ts-cover class="ts-aside-cover" ?data-visible=${this.visible} @click="${this.close}"></ts-cover>
			`;
		}
	}
);
