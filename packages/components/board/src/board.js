import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './board.css';

export class TSBoard extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			dir: { type: String, reflect: true },
			title: { type: String, attribute: 'data-title' }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get header() {
		if (!this.title) {
			return '';
		}
		return html`
			<header class="board-header">
				<div class="board-title">${this.title}</div>
			</header>
		`;
	}

	render() {
		return html`
			<div dir="${this.direction}" class="board-container">
				${this.header}
				<main class="board-main">
					<slot name="main"></slot>
				</main>
			</div>
		`;
	}
}

customElementDefineHelper('ts-board', TSBoard);
