import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';
import css from './popover.css';

/**
 * Placement relative to the anchor element.
 */
export const Placement = {
	TOP_LEFT: 'topLeft',
	TOP_RIGHT: 'topRight',
	BOTTOM_LEFT: 'bottomLeft',
	BOTTOM_RIGHT: 'bottomRight'
};

export class TSPopover extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Is the popover visible or not */
			opened: { type: Boolean, reflect: true },
			/** Placement, relative to the anchor. Could be 'topLeft', 'topRight', 'bottomLeft', 'bottomRight' */
			placement: { type: String, attribute: 'placement', reflect: true },
			/** Text in the title */
			header: { type: String, reflect: true },
			/** Anchor element for relative positioning. If you need to position absolutely, leave this empty */
			anchor: { type: String, reflect: true },
			/** Left offset when popover is positioned absolutely. Use any valid css syntax for the 'left' property */
			positionLeft: { type: String, attribute: 'position-left', reflect: true },
			/** Top offset when popover is positioned absolutely. Use any valid css syntax for the 'top' property */
			positionTop: { type: String, attribute: 'position-top', reflect: true }
		};
	}

	constructor() {
		super();
		this.opened = false;
	}

	onClose() {
		/**
		 * Emitted when user press the close button in popover
		 */
		this.dispatchCustomEvent('popover-close');
		this.opened = false;
	}

	stopEventBubbling(e) {
		e.stopPropagation();
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		switch (name) {
			case 'opened':
				if (newVal !== null) {
					window.customElements.whenDefined('ts-popover').then(() => {
						const container = this.shadowRoot.getElementById('container');
						if (!container) {
							// it could happen when element is just initialised but not rendered yet.
							return;
						}
						if (this.anchor) {
							this.placeWithAnchor(container);
						} else {
							this.placeAbsolutely(container);
						}
					});
				}
				break;

			default:
			// do nothing
		}
	}

	placeAbsolutely(container) {
		const position = {
			left: `${this.positionLeft}`,
			top: `${this.positionTop}`
		};
		Object.assign(container.style, position);
	}

	placeWithAnchor(container) {
		const anchor = this.getByIdFromParents(this, this.anchor);
		const containerRect = container.getBoundingClientRect();
		const { innerHeight, innerWidth } = window;
		const { left, top, width = 0, height = 0 } = anchor.getBoundingClientRect();
		const halfUnit = 10;
		const position = {
			top: 'auto',
			right: 'auto',
			bottom: 'auto',
			left: 'auto'
		};

		let translateX = 0;
		let translateY = 0;

		switch (this.placement) {
			case Placement.TOP_LEFT:
			case Placement.BOTTOM_LEFT:
				// Check, does the container will fit into window on the left side with desired offset.
				// if not, then stick it to the left side of the window.
				position.left = `${left - halfUnit}px`;
				if (left - halfUnit > containerRect.width) {
					translateX = -100;
				} else {
					position.left = `${halfUnit}px`;
				}
				break;
			case Placement.TOP_RIGHT:
			case Placement.BOTTOM_RIGHT:
				// Check, does the container will fit into window on the right side with desired offset.
				// if not, then stick it to the right side of the window.
				if (left + width + containerRect.width + halfUnit > innerWidth) {
					position.left = `${innerWidth - containerRect.width - halfUnit}px`;
				} else {
					position.left = `${left + width + halfUnit}px`;
				}
				break;
		}

		switch (this.placement) {
			case Placement.TOP_LEFT:
			case Placement.TOP_RIGHT:
				// Check, does the container will fit into window on the top with desired offset.
				// if not, then stick it to the top side of the window.
				if (top + height > containerRect.height) {
					position.top = `${top + height - halfUnit}px`;
					translateY = -100;
				} else {
					position.top = '0px';
				}
				break;
			case Placement.BOTTOM_LEFT:
			case Placement.BOTTOM_RIGHT:
				// Check, does the container will fit into window on the bottom with desired offset.
				// if not, then stick it to the bottom side of the window.
				if (top + containerRect.height + halfUnit > innerHeight) {
					position.top = `${innerHeight - containerRect.height - halfUnit}px`;
				} else {
					position.top = `${top + halfUnit}px`;
				}
				break;
		}

		position.transform = `translate(${translateX}%, ${translateY}%)`;
		Object.assign(container.style, position);
	}

	getByIdFromParents($elem, query) {
		// If a shadow root doesn't exist we don't continue the traversal
		if ($elem.shadowRoot == null) {
			return null;
		}

		// Grab the root node and query it
		const $root = $elem.shadowRoot.host.getRootNode();
		const result = $root.getElementById(query);
		if (result) {
			return result;
		}

		// We continue the traversal if there was not matches
		return this.getByIdFromParents($root, query);
	}

	render() {
		return html`
			<div id="container" class="popover-container" @click=${this.stopEventBubbling}>
				<div class="popover-header">
					<span class="popover-title">${this.header || ''}</span>
					<ts-icon
						icon="close-clear"
						size="medium"
						type="inverted"
						class="popover-close"
						@click=${this.onClose}
					></ts-icon>
				</div>
				<!-- Content in the main section of the popover	-->
				<slot name="content"></slot>
				<div class="popover-footer">
					<!-- Content in the footer section of the popover, most of the time \`ts-button-group\`	-->
					<slot name="footer"></slot>
				</div>
			</div>
		`;
	}
}

customElementDefineHelper('ts-popover', TSPopover);
