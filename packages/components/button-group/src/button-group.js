import { TSElement } from '@tradeshift/elements';
import css from './button-group.css';

const [$template, $groupButtons] = [Symbol('template'), Symbol('groupButtons')];

class ButtonGroup extends TSElement('ButtonGroup') {
	static get observedAttributes() {
		return [];
	}
	constructor() {
		super();
		this.styles(css);
		this.template(
			`
			<section>
				<slot></slot>
			</section>
		`,
			$template
		);
		this[$groupButtons] = this[$groupButtons].bind(this);
		this.shadowRoot
			.querySelector('slot')
			.addEventListener('slotchange', this[$groupButtons]);
	}
	connectedCallback() {
		if (this.isConnected) {
			this[$groupButtons]();
		}
	}
	[$groupButtons]() {
		Array.from(this.querySelectorAll('ts-button')).forEach(button => {
			button.grouped = true;
		});
	}
}

customElements.define('ts-button-group', ButtonGroup);
