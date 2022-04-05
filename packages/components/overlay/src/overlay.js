import { TSElement, unsafeCSS, customElementDefineHelper, html } from '@tradeshift/elements';
import css from './overlay.css';

const HALF_UNIT = 10;
const MAX_HEIGHT = 600; // max height of the dropdown part.

export class TSOverlay extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr'. */
			dir: { type: String, reflect: true },
			/** The element where the container will be rendered. */
			anchor: { type: Object, attribute: false },
			/** Should the width be based on content (true) or inherited from the anchor (false). */
			autoWidth: { type: Boolean, reflect: true }
		};
	}

	/**
	 * Reparents the overlay to document.body and returns a callback to remove it
	 * @param {!HTMLElement} overlay the overlay component
	 * @param {!HTMLElement} anchor anchor for overlay's positioning
	 * @returns close callback to remove overlay from document.body
	 */
	static open(overlay, anchor) {
		overlay.anchor = anchor;
		document.body.appendChild(overlay);
		return () => {
			document.body.removeChild(overlay);
		};
	}

	constructor() {
		super();
		this.autoWidth = false;
		this.resizeListener = this.updatePosition.bind(this);
		this.clickOutsideListener = this.handleOutsideClick.bind(this);
	}

	/** @private */
	connectedCallback() {
		super.connectedCallback();

		window.addEventListener('resize', this.resizeListener, { capture: true, passive: true });
		window.addEventListener('scroll', this.resizeListener, { capture: true, passive: true });
		window.addEventListener('click', this.clickOutsideListener);
		// we need to position the container
		this.updatePosition();
	}

	/** @private */
	disconnectedCallback() {
		super.disconnectedCallback();

		window.removeEventListener('resize', this.resizeListener, { capture: true, passive: true });
		window.removeEventListener('scroll', this.resizeListener, { capture: true, passive: true });
		window.removeEventListener('click', this.clickOutsideListener);
	}

	/**
	 * Calculates the size and position of the overlay part.
	 * @private
	 */
	updatePosition() {
		requestAnimationFrame(() => {
			const container = this.shadowRoot.getElementById('container');
			if (!container) {
				// it could happen when element is just initialised but not rendered yet.
				return;
			}

			const slot = this.shadowRoot.querySelector('slot');
			const childElements = Array.prototype.filter.call(
				slot.assignedNodes(),
				node => node.nodeType === Node.ELEMENT_NODE
			);
			const contentContainer = childElements[0];
			const anchorRect = this.anchor.getBoundingClientRect();
			const contentWidth = contentContainer.getBoundingClientRect().width;
			const contentHeight = contentContainer.getBoundingClientRect().height;

			const horizontalPosition = this.calculateHorizontalPosition(anchorRect, contentWidth);
			const { verticalPosition, maxHeight } = this.calculateVerticalPosition(anchorRect, contentHeight);

			Object.assign(container.style, horizontalPosition, verticalPosition);
			Object.assign(contentContainer.style, { maxHeight });
		});
	}

	/**
	 * Calculates horizontal position and width of the container
	 * @private
	 * @param {!DomRect} anchorRect ClientRect of the container's anchor
	 * @param {!Number} contentWidth width of the content
	 * @returns {!Object} position on left, right and width of the container
	 */
	calculateHorizontalPosition(anchorRect, contentWidth) {
		const result = { left: 'auto', right: 'auto' };
		const { width, left, right } = anchorRect;
		if (this.autoWidth) {
			// calculate horizontal position
			const { innerWidth } = window;
			const fitOnRight = left + contentWidth + HALF_UNIT <= innerWidth;
			const fitOnLeft = left + width - contentWidth - HALF_UNIT >= 0;
			if (this.dir === 'rtl') {
				if (!fitOnRight && !fitOnLeft) {
					// cannot fit on either side, align to left border
					result.right = `${Math.max(HALF_UNIT, innerWidth - HALF_UNIT - contentWidth)}px`;
				} else if (!fitOnLeft && fitOnRight) {
					// cannot fit on left, put on right side
					result.left = `${left}px`;
				} else {
					/// put on left as default
					result.right = `${innerWidth - right}px`;
				}
			} else {
				if (!fitOnRight && !fitOnLeft) {
					// cannot fit on either side, align to right border
					result.left = `${Math.max(HALF_UNIT, innerWidth - contentWidth - HALF_UNIT - left)}px`;
				} else if (fitOnLeft && !fitOnRight) {
					// cannot fit on right, put on left side
					result.right = `${innerWidth - right}px`;
				} else {
					// put on right as default
					result.left = left + 'px';
				}
			}
		} else {
			result.left = left + 'px';
			result.width = width + 'px';
		}
		return result;
	}

	/**
	 * Calculates vertical position and max height of the container
	 * @private
	 * @param {!DomRect} anchorRect
	 * @param {!Number} contentHeight
	 * @returns {!Object} position on top, bottom and max height of the container
	 */
	calculateVerticalPosition(anchorRect, contentHeight) {
		const verticalPosition = { top: 'auto', bottom: 'auto' };
		const { top, bottom, height } = anchorRect;
		const { innerHeight, pageYOffset } = window;
		let maxHeight = 0;
		const paddingTop = top - HALF_UNIT;
		const paddingBottom = innerHeight - bottom - HALF_UNIT;
		if (paddingBottom < contentHeight && paddingBottom < paddingTop) {
			// When we don't have enough space below and have more space above, we put dropdown above.
			maxHeight = top > MAX_HEIGHT ? MAX_HEIGHT : paddingTop;
			if (maxHeight < contentHeight) {
				// maxHeight will be set as a new height of a content container after position update
				contentHeight = maxHeight;
			}
			verticalPosition.bottom = window.innerHeight - top + HALF_UNIT - pageYOffset + 'px';
		} else {
			verticalPosition.top = pageYOffset + top + height + HALF_UNIT + 'px';
			maxHeight = paddingBottom > MAX_HEIGHT ? MAX_HEIGHT : paddingBottom;
		}

		maxHeight += 'px';

		return { verticalPosition, maxHeight };
	}

	/**
	 * @private
	 * @param {!Event} event
	 */
	handleOutsideClick(event) {
		if (!('composedPath' in event)) {
			return;
		}
		const paths = event.composedPath();
		const container = this.shadowRoot.getElementById('container');
		if (paths.indexOf(container) === -1 && paths.indexOf(this.anchor) === -1) {
			/**
			 * Emitted when user clicks outside of the overlay and anchor elements.
			 */
			this.dispatchCustomEvent('overlay-close');
		}
	}

	render() {
		return html`
			<div id="container">
				<!-- All content should be wrapped in one container element -->
				<slot></slot>
			</div>
		`;
	}
}

customElementDefineHelper('ts-overlay', TSOverlay);
