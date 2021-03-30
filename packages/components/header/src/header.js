import { customElementDefineHelper, html, TSElement, unsafeCSS } from '@tradeshift/elements';
import '@tradeshift/elements.app-icon';
import '@tradeshift/elements.icon';
import css from './header.css';

export class TSHeader extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the button `rtl`, `ltr` */
			dir: { type: String, reflect: true },
			/** Icon shows in the header */
			icon: { type: String, reflect: true },
			/** Title shows in the header */
			title: { type: String, reflect: true },
			/** Colors of the header */
			color: { type: String, reflect: true }
		};
	}

	constructor() {
		super();
		// Make the color when we use it.
		this.color = 'white';
	}

	get getMenuSwitch() {
		return html`
			<ts-icon
				@click="${this.openChromeMenu}"
				class="menu-switch"
				icon="menu-switch"
				size="large"
				tabindex="0"
			></ts-icon>
		`;
	}

	getIcon() {
		if (!this.icon) {
			return '';
		}
		return html` <ts-app-icon class="icon" src="${this.icon}" alt="${this.title}"></ts-app-icon> `;
	}

	openChromeMenu() {
		const msg = 'app-broadcast:{"appIds": "Tradeshift.Chrome", "key": "ts-broadcast-chrome-menu-open"}';
		window.top.postMessage(msg, '*');
	}

	getTitle() {
		if (!this.title) {
			return '';
		}
		return html` <span class="title">${this.title}</span> `;
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	render() {
		return html`
			<header dir=${this.direction}>
				<div class="title-icon-container">${this.getMenuSwitch} ${this.getIcon()} ${this.getTitle()}</div>
				<div class="slot-container">
					<!-- Extra items on the opposite side of the header goes here, like button group. 	-->
					<slot></slot>
				</div>
			</header>
		`;
	}
}

customElementDefineHelper('ts-header', TSHeader);
