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
			counter: { type: Number, reflect: true },
			/** Id of the tab which will be added to the tab button in the header of tabs. It can also be used for identifying the tab on tab-click event  */
			id: { type: String, reflect: true }
		};
	}

	attributeChangedCallback(name, oldValue, newValue) {
		/**
		 * (Internal) Emitted when property of the tab is changed, it's used to let the ts-tabs know about the attribute changes.
		 * @payload {name}
		 */
		this.dispatchCustomEvent('tab-prop-change', { name });
		super.attributeChangedCallback(name, oldValue, newValue);
	}

	render() {
		return html`
			<div class="tab-content" ?selected="${this.selected}">
				<!-- Content of the tab should be wrapped in \`ts-tab\` element	-->
				<slot></slot>
			</div>
		`;
	}
}

customElementDefineHelper('ts-tab', TSTab);
