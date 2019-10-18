import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './tab.css';

customElementDefineHelper(
	'ts-tab',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				label: { type: String, reflect: true },
				selected: { type: Boolean, reflect: true },
				icon: { type: String, reflect: true },
				counter: { type: String, reflect: true }
			};
		}

		attributeChangedCallback(name, oldValue, newValue) {
			this.dispatchCustomEvent('tab-prop-change', { name });
			super.attributeChangedCallback(name, oldValue, newValue);
		}

		render() {
			return html`
				<div class="tab-content" ?selected="${this.selected}">
					<slot></slot>
				</div>
			`;
		}
	}
);
