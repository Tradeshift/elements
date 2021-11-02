import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './board.css';

export class TSBoard extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Board header title */
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
				<!--
						To add action items like buttons and action-select to the header (opposite side of the title).
						For having header-actions, it is required for the board to have a title.
				-->
				<slot name="header-actions"></slot>
			</header>
		`;
	}

	render() {
		return html`
			<div dir="${this.direction}">
				${this.header}
				<div class="board-main">
					<!-- Content of the board should be wrapped around \`ts-board\` element -->
					<slot></slot>
				</div>
			</div>
		`;
	}
}

customElementDefineHelper('ts-board', TSBoard);
