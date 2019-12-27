import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './document-card.css';
import fileIcon from './assets/document.svg';

customElementDefineHelper(
	'ts-document-card',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				dir: { type: String, reflect: true },
				name: { type: String, reflect: true },
				description: { type: String, reflect: true },
				selected: { type: Boolean, reflect: true },
				mobileDescription: { attribute: 'mobile-description', type: String, reflect: true }
			};
		}

		constructor() {
			super();
			this.name = '';
			this.description = '';
			this.mobileDescription = '';
		}

		get direction() {
			return this.dir || this.bodyDir;
		}

		get fileIcon() {
			return html`
				<span class="card-icon">
					${html([fileIcon])}
				</span>
			`;
		}

		get selectedClass() {
			return this.selected ? 'selected' : '';
		}

		render() {
			return html`
				<div class="document-card" dir=${this.direction}>
					${this.fileIcon}
					<div class="card-container ${this.selectedClass}">
						<div class="card-title">${this.name}</div>
						<div class="card-description">${this.description}</div>
						<div class="card-mobile-description">${this.mobileDescription}</div>
					</div>
				</div>
			`;
		}
	}
);
