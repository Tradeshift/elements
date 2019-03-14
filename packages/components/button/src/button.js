import { TSElement, unsafeCSS, html } from '@tradeshift/elements';
import css from './button.css';

customElements.define(
	'ts-button',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				type: { type: String, reflect: true },
				grouped: { type: Boolean, reflect: true }
			};
		}

		constructor() {
			super();
			this.type = '';
			this.grouped = false;
		}

		render() {
			return html`
				<button>
					<span>
						<slot></slot>
					</span>
				</button>
			`;
		}
	}
);
