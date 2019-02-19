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

	@property({ type: String })
	type = '';

	@property({ type: Boolean })
	grouped = false;

	render() {
		return html`
			<button>
				<span class="${this.type !== 'text' ? 'title' : ''}">
					<slot></slot>
				</span>
			</button>
		`;
	}
}
