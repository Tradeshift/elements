import { Base } from '/core/component.js';

const [
	$template,
	$type
] = [
	Symbol('template'),
	Symbol('type')
];

class Button extends Base(HTMLElement) {
	static get observedAttributes() { return ['type']; }
	constructor(...args) {
		const self = super(...args);
		this.styles('/button/button.css');
		this.template(`
			<button>
				<span>
					<slot></slot>
				</span>
			</button>
		`, $template);
		this.type = this.getAttribute('type');
		return self;
	}
	get type() {
		return this[$type];
	}
	set type(type) {
		this[$type] = type;
		this.shadowRoot.querySelector('button > span')
			.classList.toggle('ts-title', this.type !== 'text');
	}
}

customElements.define('ts-button', Button);
