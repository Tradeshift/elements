import { Base } from '@tradeshift/ui';

const [$template, $type, $grouped] = [
	Symbol('template'),
	Symbol('type'),
	Symbol('grouped')
];

class Button extends Base(HTMLElement, 'Button') {
	static get observedAttributes() {
		return ['type', 'grouped'];
	}
	constructor() {
		super();
		this.styles('button.css');
		this.template(
			`
			<button>
				<span>
					<slot></slot>
				</span>
			</button>
		`,
			$template
		);
		this.type = this.getAttribute('type');
		this.grouped = this.getAttribute('grouped');
	}
	get type() {
		return this[$type];
	}
	set type(type) {
		if (type === this[$type]) {
			return;
		}

		this[$type] = type;
		this[type ? 'setAttribute' : 'removeAttribute']('type', type);
		this.shadowRoot
			.querySelector('button > span')
			.classList.toggle('title', this.type !== 'text');
	}
	get grouped() {
		return this[$grouped];
	}
	set grouped(grouped) {
		if (grouped === this[$grouped]) {
			return;
		}

		this[$grouped] = grouped;
		this[grouped ? 'setAttribute' : 'removeAttribute']('grouped', grouped);
	}
}

customElements.define('ts-button', Button);
