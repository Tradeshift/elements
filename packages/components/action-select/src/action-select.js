import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';
// eslint-disable-next-line import/no-duplicates
import '@tradeshift/elements.overlay';
// eslint-disable-next-line import/no-duplicates
import { TSOverlay } from '@tradeshift/elements.overlay';
import '@tradeshift/elements.select-menu';
import css from './action-select.css';

export class TSActionSelect extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr'. */
			dir: { type: String, reflect: true },
			/** Is component disabled or not. */
			disabled: { type: Boolean, reflect: true },
			/** Is the action select opened or not */
			opened: { type: Boolean, reflect: true },
			/** Array of action items. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon */
			items: { type: Array, reflect: true }
		};
	}

	constructor() {
		super();
		this.opened = false;
	}

	toggle() {
		this.opened = !this.opened;
	}

	/** @private */
	menuClick() {
		this.toggle();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeOverlay();
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		switch (name) {
			case 'opened':
				if (newVal === null) {
					this.removeOverlay();
				} else {
					window.customElements.whenDefined('ts-action-select').then(() => {
						this.addOverlay();
					});
				}
				break;

			default:
			// do nothing
		}
	}

	/** @private */
	addOverlay() {
		const container = this.renderRoot.getElementById('container');
		if (!container) {
			return;
		}

		const slot = this.renderRoot.querySelector('slot');
		const childElements = Array.prototype.filter.call(
			slot.assignedNodes({ flatten: true }),
			node => node.nodeType === Node.ELEMENT_NODE
		);
		const anchor = childElements[0];
		if (!anchor) {
			return;
		}
		const dropout = this.renderRoot.getElementById('dropout');
		if (!dropout) {
			return;
		}

		this.closeOverlay = TSOverlay.open(dropout, anchor);
	}

	/** @private */
	removeOverlay() {
		if (this.closeOverlay) {
			this.closeOverlay();
		}
	}

	/**
	 * Updates the current selection and dispatches 'select-changed' event if component is in single selection mode.
	 * @private
	 * @param {Event} event
	 */
	handleSelection(event) {
		if (this.disabled) {
			return;
		}
		event.stopPropagation();
		const item = event.target;
		const itemId = item['item-id'];
		/**
		 * Emitted when user clicks on the item
		 * @payload { selected }
		 */
		this.dispatchCustomEvent('action-select-click', { selected: itemId });
		this.opened = false;
	}

	/** @private */
	get dropout() {
		return html`
			<ts-overlay id="dropout" autoWidth .dir="${this.dir}" @overlay-close=${this.onOverlayCloseListener}>
				<ts-select-menu
					.items="${this.items}"
					.dir="${this.dir}"
					?disabled="${this.disabled}"
					@select-menu-changed=${this.handleSelection}
				></ts-select-menu>
			</ts-overlay>
		`;
	}

	/** @private */
	onOverlayCloseListener() {
		this.opened = false;
	}

	render() {
		return html`
			<div id="container">
				<div @click="${this.menuClick}" style="position: relative;">
					<!-- Element in this slot becomes the anchor for the action menu. When empty, it will render a menu icon -->
					<slot>
						<ts-icon
							icon="more"
							size="large"
							type="${this.disabled ? 'disabled' : 'gray-darker'}"
							?disabled="${this.disabled}"
						></ts-icon>
					</slot>
					${this.opened ? this.dropout : ''}
				</div>
			</div>
		`;
	}
}

customElementDefineHelper('ts-action-select', TSActionSelect);
