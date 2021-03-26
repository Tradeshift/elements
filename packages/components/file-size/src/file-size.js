import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.typography';

import css from './file-size.css';

export class TSFileSize extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Size of the file */
			size: { type: Number },
			/** How many decimal points should be shown */
			decimalPoint: { type: Number, attribute: 'decimal-point' },
			/** Typography variant */
			variant: { type: String },
			/** Typography type */
			type: { type: String }
		};
	}

	constructor() {
		super();
		this.size = 0;
		this.decimalPoint = 2;
		this.variant = 'subtitle';
		this.type = 'default';
	}

	get formatFileSize() {
		const bytes = this.size;
		const decimalPoint = this.decimalPoint;
		if (bytes === 0) {
			return '0 Bytes';
		}
		const k = 1000;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(decimalPoint)) + ' ' + sizes[i];
	}

	render() {
		return html`
			<ts-typography text="${this.formatFileSize}" variant="${this.variant}" type="${this.type}"></ts-typography>
		`;
	}
}

customElementDefineHelper('ts-file-size', TSFileSize);
