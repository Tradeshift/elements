import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';

import css from './typography.css';

export class TSTypography extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			text: { type: String },
			tooltip: { type: String },
			variant: { type: String },
			type: { type: String },
			inline: { type: Boolean },
			noWrap: { type: Boolean, attribute: 'no-wrap' },
			noTooltip: { type: Boolean, attribute: 'no-tooltip' }
		};
	}

	textChangeHandler(event) {
		const slot = event.currentTarget;
		this.tooltip = this.tooltip || this.text || slot.assignedNodes()[0].data;
	}

	render() {
		return this.noTooltip
			? html`
					<div class="text-wrapper">
						<slot>${this.text}</slot>
					</div>
			  `
			: html`
					<div class="text-wrapper" title="${this.tooltip || this.text}">
						<slot @slotchange="${this.textChangeHandler}">${this.text}</slot>
					</div>
			  `;
	}
}

customElementDefineHelper('ts-typography', TSTypography);
