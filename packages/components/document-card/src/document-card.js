import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './document-card.css';
import fileIcon from './assets/document.svg';
import marketplaceIcon from './assets/marketplace.svg';
import offerIcon from './assets/offer.svg';
import privateIcon from './assets/private.svg';
import { IconsEnum } from './utils';

const icons = {
	[IconsEnum.MARKETPLACE]: marketplaceIcon,
	[IconsEnum.PRIVATE]: privateIcon,
	[IconsEnum.DOCUMENT]: fileIcon,
	[IconsEnum.DEFAULT]: fileIcon,
	[IconsEnum.OFFER]: offerIcon
};

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
				mobileDescription: { attribute: 'mobile-description', type: String, reflect: true },
				type: { type: String, reflect: true }
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

		get icon() {
			const icon = icons[this.type] || icons[IconsEnum.DEFAULT];
			return html`
				<span class="card-icon">
					${html([icon])}
				</span>
			`;
		}

		get selectedClass() {
			return this.selected ? 'selected' : '';
		}

		render() {
			return html`
				<div class="document-card" dir=${this.direction}>
					${this.icon}
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
