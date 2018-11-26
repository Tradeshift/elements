import { TSElement } from '@tradeshift/elements';
import css from './root.css';

const [$template, $decorateSlots] = [
	Symbol('template'),
	Symbol('decorateSlots')
];

class Root extends TSElement('Root', 'HTMLBodyElement') {
	static get observedAttributes() {
		return [];
	}
	constructor() {
		super();
		this.styles(css);
		this.template(
			`
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
		`,
			$template
		);
		this[$decorateSlots] = this[$decorateSlots].bind(this);
		this.shadowRoot.querySelectorAll('slot[name]').forEach(slot => {
			slot.classList.add(slot.getAttribute('name'));
			slot.addEventListener('slotchange', e => this[$decorateSlots](slot, e));
		});
	}
	[$decorateSlots](slot, e) {
		const assignedNodes = slot.assignedNodes();
		const showSlot = assignedNodes && assignedNodes.length;
		slot.classList.toggle('hidden', !showSlot);
		this.classList.toggle(`ts-has-${slot.getAttribute('name')}`, showSlot);
	}
}

customElements.define('ts-root', Root, { extends: 'body' });
