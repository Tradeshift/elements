import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './{{kebabCase name}}.css';

customElementDefineHelper(
	'ts-{{kebabCase name}}',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				type: { type: String, reflect: true }
			};
		}

		constructor() {
			super();
			this.type = '';
		}

		render() {
			return html`
				<div>
					<slot></slot>
				</div>
			`;
		}
	}
);
