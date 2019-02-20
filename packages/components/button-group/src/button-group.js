import { TSElement, unsafeCSS, html } from '@tradeshift/elements';
import css from './button-group.css';

customElements.define(
	'ts-button-group',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		render() {
			return html`
				<section>
					<slot @slotchange="${this.handleSlotChange}"></slot>
				</section>
			`;
		}

		firstUpdated() {
			super.firstUpdated();
			this.handleSlotChange();
		}

		handleSlotChange() {
			Array.from(this.querySelectorAll('ts-button')).forEach(button => {
				button.grouped = true;
			});
		}
	}
);
