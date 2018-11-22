import { Base } from '/core/component.js';

const [
	$template
] = [
	Symbol('template')
];

class Tmp extends Base(HTMLElement, 'Tmp') {
	static get observedAttributes() { return []; }
	constructor(...args) {
		const self = super(...args);
		this.styles('/tmp/tmp.css');
		this.template(`
			<div>
				<slot></slot>
			</div>
		`, $template);
		return self;
	}
}

customElements.define('ts-tmp', Tmp);
