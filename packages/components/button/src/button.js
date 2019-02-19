import {
	TSElement,
	customElement,
	property,
	unsafeCSS,
	html
} from '@tradeshift/elements';
import css from './button.css';

@customElement('ts-button')
export class TSButton extends TSElement {
	static styles = [TSElement.styles, unsafeCSS(css)];

	@property({ type: String, reflect: true })
	type = '';

	@property({ type: Boolean, reflect: true })
	grouped = false;

	render() {
		return html`
			<button>
				<span>
					<slot></slot>
				</span>
			</button>
		`;
	}
}
