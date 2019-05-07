import { TSElement, unsafeCSS, html } from '@tradeshift/elements';
import css from './button-group.css';

export class TSButtonGroup extends TSElement {
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
		this.handleSlotChange();
	}

	handleSlotChange() {
		Array.from(this.querySelectorAll('ts-button')).forEach(button => {
			button.grouped = true;
		});
	}
}

customElements.define('ts-button-group', TSButtonGroup);
