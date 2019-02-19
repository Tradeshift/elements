import {
	TSElement,
	customElement,
	unsafeCSS,
	html
} from '@tradeshift/elements';
import css from './button-group.css';

@customElement('ts-button-group')
export class TSButtonGroup extends TSElement {
	static styles = [TSElement.styles, unsafeCSS(css)];

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
