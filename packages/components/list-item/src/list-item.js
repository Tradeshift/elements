import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
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
				title: { type: String },
				subtitle: { type: String },
				disabled: { type: Boolean },
				selectable: { type: Boolean },
				selected: { type: Boolean },
				dir: { type: String },
				icon: { type: String },
				iconLeft: { type: String, attribute: 'icon-left' },
				iconRight: { type: String, attribute: 'icon-right' }
			};
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

		get iconLeftTemplate() {
			const icon = this.icon || this.iconLeft;
			if (icon) {
				return html`
					<ts-icon class="icon-left" icon="${icon}" size="large" type="${this.colorType}"></ts-icon>
				`;
			}
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
								<ts-typography variant="subtitle" type="${this.colorType}" text="${this.subtitle}"></ts-typography>
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
