import { TSElement, styles, html } from '@tradeshift/elements';
import css from './button.css';

customElements.define(
	'ts-button',
	class extends TSElement {
		static get styles() {
			return [super.styles, styles(css)];
		}

		static get properties() {
			return {
				type: { type: String },
				grouped: { type: Boolean }
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
					<span class="${this.type !== 'text' ? 'title' : ''}">
						<slot></slot>
					</span>
				</button>
			`;
		}
	}
);
