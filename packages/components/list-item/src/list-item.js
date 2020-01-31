import { TSElement, unsafeCSS, html, customElementDefineHelper, validateSlottedNodes } from '@tradeshift/elements';
import css from './list-item.css';

import '@tradeshift/elements.typography';
import '@tradeshift/elements.icon';

customElementDefineHelper(
	'ts-list-item',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				title: { type: String, reflect: true },
				subtitle: { type: String, reflect: true },
				disabled: { type: Boolean, reflect: true },
				selectable: { type: Boolean, reflect: true },
				selected: { type: Boolean, reflect: true },
				dir: { type: String, reflect: true },
				icon: { type: String, reflect: true },
				iconLeft: { type: String, attribute: 'icon-left', reflect: true },
				iconRight: { type: String, attribute: 'icon-right', reflect: true },
				noWrap: { type: Boolean, attribute: 'no-wrap' }
			};
		}
		constructor() {
			super();
			this.hasSlottedIcon = false;
		}

		get direction() {
			return this.dir ? this.dir : this.bodyDir;
		}

		get colorType() {
			let colorType = this.selected ? 'inverted' : 'default';
			if (this.disabled) {
				colorType = this.selected ? 'disabled-checked' : 'disabled';
			}
			return colorType;
		}

		slotChangeHandler(e) {
			this.hasSlottedIcon = true;
			const slottedNodes = e.currentTarget.assignedNodes();
			validateSlottedNodes(this.tagName, slottedNodes, ['TS-APP-ICON']);
			this.requestUpdate();
		}

		get iconLeftTemplate() {
			const icon = this.icon || this.iconLeft;
			const slotClass = this.hasSlottedIcon ? 'icon-left' : '';

			return icon
				? html`
						<ts-icon class="icon-left" icon="${icon}" size="large" type="${this.colorType}"></ts-icon>
				  `
				: html`
						<span class="${slotClass}">
							<slot name="icon-left" @slotchange="${this.slotChangeHandler}"></slot>
						</span>
				  `;
		}

		get iconRightTemplate() {
			const icon = this.selected ? 'checkmark' : this.iconRight;
			if (icon) {
				return html`
					<ts-icon class="icon-right" icon="${icon}" size="large" type="${this.colorType}"></ts-icon>
				`;
			}
		}

		get textWrapper() {
			return html`
				<div class="text-wrapper">
					<ts-typography variant="title" type="${this.colorType}" text="${this.title}"></ts-typography>
					${this.subtitle
						? html`
								<ts-typography
									variant="subtitle"
									type="${this.colorType}"
									text="${this.subtitle}"
									?no-wrap="${this.noWrap}"
								></ts-typography>
						  `
						: null}
				</div>
			`;
		}

		get content() {
			return html`
				${this.iconLeftTemplate} ${this.textWrapper} ${this.iconRightTemplate}
			`;
		}

		render() {
			return html`
				<li ?selected="${this.selected}" dir="${this.direction}">
					${this.selectable
						? html`
								<button ?disabled="${this.disabled}" class="content-wrapper">${this.content}</button>
						  `
						: html`
								<div class="content-wrapper">${this.content}</div>
						  `}
				</li>
			`;
		}
	}
);
