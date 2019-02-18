import { TSElement, styles, html } from '@tradeshift/elements';
import css from './root.css';

customElements.define(
	'ts-root',
	class extends TSElement {
		static get styles() {
			return [super.styles, styles(css)];
		}
		render() {
			return html`
				<slot
					name="header"
					class="hidden"
					@slotchange="${this.decorateSlot}"
				></slot>
				<slot
					name="sidebar-left"
					class="hidden"
					@slotchange="${this.decorateSlot}"
				></slot>
				<section class="content">
					<slot
						name="sidebar-inner-left"
						class="hidden"
						@slotchange="${this.decorateSlot}"
					></slot>
					<main>
						<slot></slot>
					</main>
					<slot
						name="sidebar-inner-right"
						class="hidden"
						@slotchange="${this.decorateSlot}"
					></slot>
				</section>
				<slot
					name="sidebar-right"
					class="hidden"
					@slotchange="${this.decorateSlot}"
				></slot>
				<slot
					name="footer"
					class="hidden"
					@slotchange="${this.decorateSlot}"
				></slot>
			`;
		}
		decorateSlot(e) {
			console.log(e);
			// const assignedNodes = slot.assignedNodes();
			// const showSlot = assignedNodes && assignedNodes.length;
			// slot.classList.toggle('hidden', !showSlot);
			// this.classList.toggle(`ts-has-${slot.getAttribute('name')}`, showSlot);
		}
	}
);
