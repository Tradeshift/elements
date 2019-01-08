import { TSElement, defineElement } from '@tradeshift/elements';
import css from './button-group.css';

const [$groupButtons] = [Symbol('groupButtons')];

class ButtonGroup extends TSElement('ButtonGroup') {
	static get tagName() {
		return 'ts-button-group';
	}
	static get html() {
		return `
			<section>
				<slot></slot>
			</section>
		`;
	}
	static get css() {
		return css;
	}
	createdCallback() {
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

defineElement(ButtonGroup);
