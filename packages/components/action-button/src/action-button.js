import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';
import css from './action-button.css';
import { types } from './utils';

customElementDefineHelper(
	'ts-action-button',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				type: { type: String, reflect: true },
				title: { type: String, reflect: true },
				icon: { type: String, reflect: true },
				dir: { type: String, reflect: true }
			};
		}

		constructor() {
			super();
			this.type = types.ACTION_GRAY;
		}

		get direction() {
			return this.dir ? this.dir : this.bodyDir;
		}

		get actionTitle() {
			if (!this.title) {
				return;
			}

			return html`
				<span>
					${this.title}
				</span>
			`;
		}

		render() {
			return html`
				<button ?disabled="${this.disabled}" dir="${this.direction}">
					<ts-icon icon="${this.icon}" size="large" type="${this.type}"></ts-icon>
					${this.actionTitle}
				</button>
			`;
		}
	}
);
