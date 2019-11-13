import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.app-icon';
import css from './header.css';

customElementDefineHelper(
	'ts-header',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				dir: { type: String, reflect: true },
				icon: { type: String, reflect: true },
				title: { type: String, reflect: true },
				color: { type: String, reflect: true }
			};
		}

		constructor() {
			super();
			// Make the color when we use it.
			this.color = 'white';
		}

		getIcon() {
			if (!this.icon) {
				return '';
			}
			return html`
				<ts-app-icon class="icon" src="${this.icon}" alt="${this.title}"></ts-app-icon>
			`;
		}

		getTitle() {
			if (!this.title) {
				return '';
			}
			return html`
				<span class="title">${this.title}</span>
			`;
		}

		get direction() {
			return this.dir ? this.dir : this.bodyDir;
		}

		render() {
			return html`
				<header dir=${this.direction}>
					${this.getIcon()} ${this.getTitle()}
					<slot> </slot>
				</header>
			`;
		}
	}
);
