// import { TSElement, defineElement } from '@tradeshift/elements';
import { LitElement, html, css } from 'lit-element';
import commonStyles from '@tradeshift/elements/src/common.css';
import styles from './button.css';

export class Button extends LitElement {
	static styles = [css(commonStyles), css(styles)];
	static get properties() {
		return {
			type: String,
			grouped: Boolean
		};
	}

	constructor() {
		super();
		this.type = '';
		this.grouped = false;
	}

	render() {
		return html`
			<button>
				<span class="${this.type !== text ? 'title' : ''}">
					<slot></slot>
				</span>
			</button>
		`;
	}
}

customElements.define('ts-button', Button);
