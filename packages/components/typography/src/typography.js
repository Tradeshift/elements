import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './typography.css';

customElementDefineHelper(
	'ts-typography',
	class extends TSElement {
		constructor() {
			super();
			this.text = '';
			this.color = 'default';
			this.variant = 'default';
			this.inline = false;
			this.noWrap = false;
		}

		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				text: { type: String, reflect: true },
				variant: { type: String, reflect: true },
				color: { type: String, reflect: true },
				inline: { type: Boolean, reflect: true },
				classNames: { type: String, reflect: true, attribute: 'class-names' },
				noWrap: { type: Boolean, reflect: true, attribute: 'no-wrap' }
			};
		}

		render() {
			return html`
				<div
					?title="${this.text}"
					class="${this.classNames}"
					data-color="${this.color}"
					data-variant="${this.variant}"
					?data-no-wrap="${this.noWrap}"
				>
					<slot>${this.text}</slot>
				</div>
			`;
		}
	}
);
