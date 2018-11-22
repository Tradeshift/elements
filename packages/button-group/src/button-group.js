import { Base } from '@tradeshift/ui';

const [
	$template,
	$groupButtons
] = [
	Symbol('template'),
	Symbol('groupButtons')
];

class ButtonGroup extends Base(HTMLElement, 'ButtonGroup') {
	static get observedAttributes() { return []; }
	constructor() {
		super();
		this.styles('/button-group/button-group.css');
		this.template(`
			<section>
				<slot></slot>
			</section>
		`, $template);
		this[$groupButtons] = this[$groupButtons].bind(this);
		this.shadowRoot.querySelector('slot')
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
