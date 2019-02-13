import { TSElement, defineElement } from '@tradeshift/elements';
import css from './root.css';

const [$decorateSlots] = [Symbol('decorateSlots')];

export class Root extends TSElement('Root') {
	static get observedAttributes() {
		return [];
	}
	static get tagName() {
		return 'ts-root';
	}
	static get html() {
		return `
			<slot name="header" class="hidden"></slot>
			<slot name="sidebar-left" class="hidden"></slot>
			<section class="content">
				<slot name="sidebar-inner-left" class="hidden"></slot>
				<main>
					<slot></slot>
				</main>
				<slot name="sidebar-inner-right" class="hidden"></slot>
			</section>
			<slot name="sidebar-right" class="hidden"></slot>
			<slot name="footer" class="hidden"></slot>
		`;
	}
	static get css() {
		return css;
	}
	constructor() {
		super();
		this[$decorateSlots] = this[$decorateSlots].bind(this);
		this.shadowRoot.querySelectorAll('slot[name]').forEach(slot => {
			slot.classList.add(slot.getAttribute('name'));
			slot.addEventListener('slotchange', e => this[$decorateSlots](slot, e));
		});
	}
	[$decorateSlots](slot, e) {
		const assignedNodes = slot.assignedNodes();
		const showSlot = assignedNodes && assignedNodes.length;
		slot.classList[!showSlot ? 'add' : 'remove']('hidden');
		this.classList[showSlot ? 'add' : 'remove'](
			`ts-has-${slot.getAttribute('name')}`
		);
	}
}

defineElement(Root);
