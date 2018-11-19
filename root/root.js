import { Base } from '/core/component.js';

const [
	$template,
	$decorateSlots
] = [
	Symbol('template'),
	Symbol('decorateSlots')
];

class Root extends Base(HTMLBodyElement, 'Root') {
	static get observedAttributes() { return []; }
	constructor(...args) {
		const self = super(...args);
		this.styles('/root/root.css');
		this.template(`
			<slot name="header" class="hidden"></slot>
			<article>
				<slot name="sidebar-left" class="hidden"></slot>
				<section class="content">
					<slot name="sidebar-inner-left" class="hidden"></slot>
					<main>
						<slot></slot>
					</main>
					<slot name="sidebar-inner-right" class="hidden"></slot>
				</section>
				<slot name="sidebar-right" class="hidden"></slot>
			</article>
			<slot name="footer" class="hidden"></slot>
		`, $template);
		this[$decorateSlots] = this[$decorateSlots].bind(this);
		this.shadowRoot.querySelectorAll('slot[name]').forEach(slot => {
			slot.classList.add(slot.getAttribute('name'));
			slot.addEventListener('slotchange', (e) => this[$decorateSlots](slot, e));
		});
		return self;
	}
	[$decorateSlots](slot, e) {
		const assignedNodes = slot.assignedNodes();
		slot.classList.toggle('hidden', !(assignedNodes && assignedNodes.length));
	}
}

customElements.define('ts-root', Root, {extends: 'body'});
