import { Base } from '/core/component.js';

class Button extends Base(HTMLElement) {
	constructor() {
		super();
		this.styles('/button/button.css');

		const template = document.createElement('template');
		template.innerHTML = `
			<button onclick="console.log(this);">
				<span class="ts-title">
					<slot></slot>
				</span>
			</button>
		`;
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

customElements.define('ts-button', Button);
