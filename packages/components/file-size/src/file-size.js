import { TSElement, unsafeCSS, html } from '@tradeshift/elements';
import '@tradeshift/elements.typography';

import css from './file-size.css';

customElements.define(
	'ts-file-size',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				size: { type: Number, reflect: true },
				decimalPoint: {
					type: Number,
					reflect: true,
					attribute: 'decimal-point'
				},
				variant: { type: String, reflect: true },
				color: { type: String, reflect: true }
			};
		}

		constructor() {
			super();
			this.size = 0;
			this.decimalPoint = 2;
			this.variant = 'subtitle';
			this.color = 'default';
		}

		get formatFileSize() {
			const bytes = this.size;
			const decimalPoint = this.decimalPoint;
			if (bytes === 0) return '0 Bytes';
			const k = 1000;
			const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
			const i = Math.floor(Math.log(bytes) / Math.log(k));
			return (
				parseFloat((bytes / Math.pow(k, i)).toFixed(decimalPoint)) +
				' ' +
				sizes[i]
			);
		}

		render() {
			return html`
				<ts-typography
					text="${this.formatFileSize}"
					variant="${this.variant}"
					color="${this.color}"
				></ts-typography>
			`;
		}
	}
);
