import { TSElement } from '@tradeshift/elements';
import { html, css, customElement } from 'lit-element';
import styles from './button-group.css';

@customElement('ts-button-group')
export class ButtonGroup extends TSElement {
	static styles = [super.styles, css(styles)];

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
