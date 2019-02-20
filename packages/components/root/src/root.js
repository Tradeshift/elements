import { TSElement, unsafeCSS, html } from '@tradeshift/elements';
import css from './root.css';

const CLASS_HIDDEN = 'hidden';

customElements.define(
	'ts-root',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		constructor() {
			super();
			this.slotClasses = {
				header: CLASS_HIDDEN,
				'sidebar-left': CLASS_HIDDEN,
				'sidebar-inner-left': CLASS_HIDDEN,
				'sidebar-inner-right': CLASS_HIDDEN,
				'sidebar-right': CLASS_HIDDEN,
				footer: CLASS_HIDDEN
			};
		}

		render() {
			return html`
				<slot
					name="header"
					class="${this.slotClasses.header}"
					@slotchange="${this.decorateSlot}"
				></slot>
				<slot
					name="sidebar-left"
					class="${this.slotClasses['sidebar-left']}"
					@slotchange="${this.decorateSlot}"
				></slot>
				<section class="content">
					<slot
						name="sidebar-inner-left"
						class="${this.slotClasses['sidebar-inner-left']}"
						@slotchange="${this.decorateSlot}"
					></slot>
					<main>
						<slot></slot>
					</main>
					<slot
						name="sidebar-inner-right"
						class="${this.slotClasses['sidebar-inner-right']}"
						@slotchange="${this.decorateSlot}"
					></slot>
				</section>
				<slot
					name="sidebar-right"
					class="${this.slotClasses['sidebar-right']}"
					@slotchange="${this.decorateSlot}"
				></slot>
				<slot
					name="footer"
					class="${this.slotClasses.footer}"
					@slotchange="${this.decorateSlot}"
				></slot>
			`;
		}
		decorateSlot(e) {
			const slot = e.currentTarget;
			const assignedNodes = slot.assignedNodes();
			const showSlot = assignedNodes && assignedNodes.length;
			slot.classList[showSlot ? 'remove' : 'add']('hidden');
			this.classList[showSlot ? 'add' : 'remove'](
				`ts-has-${slot.getAttribute('name')}`
			);
		}
	}
);
