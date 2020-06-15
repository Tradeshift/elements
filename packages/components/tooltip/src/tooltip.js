import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './tooltip.css';

export class TSTooltip extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			tooltip: { type: String, reflect: true },
			/** 'top', 'bottom', 'right', 'left' */
			position: { type: String, reflect: true },
			/** Determining width of thee tooltip */
			width: { type: String, reflect: true },
			/** Disable the tooltip and hide it */
			disabled: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.tooltip = '';
		this.position = 'right';
		this.width = 'max-content';
	}

	render() {
		return html`
			<style>
				:host::before {
					width: ${this.width};
				}
			</style>
			<div>
				<slot></slot>
			</div>
		`;
	}
}

customElementDefineHelper('ts-tooltip', TSTooltip);
