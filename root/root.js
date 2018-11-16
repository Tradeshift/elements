import { Base } from '/core/component.js';

const [
	$template
] = [
	Symbol('template')
];

class Root extends Base(HTMLBodyElement, 'Root') {
	static get observedAttributes() { return []; }
	constructor(...args) {
		const self = super(...args);
		this.styles('/root/root.css');
		this.template(`
			<div class="colflex">
				<div class="hstretch">
					<div class="vstretch">
						<div class="scrollable">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
		`, $template);
		return self;
	}
}

customElements.define('ts-root', Root, {extends: 'body'});
