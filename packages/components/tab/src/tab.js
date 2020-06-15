import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './tab.css';

export class TSTab extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** The label text for the header */
			label: { type: String, reflect: true },
			/** Make the tab selected */
			selected: { type: Boolean, reflect: true },
			/** Icon name from the available icons in the ts-icon component */
			icon: { type: String, reflect: true },
			/** Number for counter badge next to the label */
			counter: { type: Number, reflect: true }
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

customElementDefineHelper('ts-tab', TSTab);
