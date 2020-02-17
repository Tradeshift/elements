import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './label.css';

customElementDefineHelper(
	'ts-label',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				for: { type: String, reflect: true }
			};
		}

		handleClick(e) {
			if (!this.for) {
				return;
			}
			const el = document.getElementById(this.for);
			if (el) {
				el.focus();
			}
		}

		render() {
			return html`
				<label @click="${this.handleClick}">
					<slot></slot>
				</label>
			`;
		}
	}
);
