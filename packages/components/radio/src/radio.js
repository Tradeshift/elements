import { TSElement, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './radio.css';

customElementDefineHelper(
	'ts-radio',
	class extends TSElement {
		static get properties() {
			return {
				name: { type: String },
				value: { type: String },
				dir: { type: String },
				label: { type: String, attribute: 'data-label' },
				checked: { type: Boolean, reflect: true },
				disabled: { type: Boolean, reflect: true }
			};
		}

		constructor() {
			super();
			this.name = '';
		}

		/**
		 * Render template in light DOM. Note that shadow DOM features like
		 * encapsulated CSS are unavailable.
		 */
		createRenderRoot() {
			return this;
		}

		get direction() {
			return this.dir || this.bodyDir;
		}

		render() {
			return html`
				<style>
					${css}
				</style>
				<label class="radio-container" ?disabled="${this.disabled}" dir="${this.direction}">
					${this.label}
					<input
						type="radio"
						name="${this.name}"
						value="${this.value}"
						?checked="${this.checked}"
						?disabled="${this.disabled}"
					/>
					<span></span>
				</label>
			`;
		}
	}
);
