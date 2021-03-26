import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './basic-table.css';
import { VISIBILITY } from './utils/constants';

export class TSBasicTable extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/**
			 * List of columns configs, including:
			 * - property: Property key of the column in data object,
			 * - value: value of the title of column',
			 * - visibility?: Which screen sizes this column should be visible -> 'always-visible'(default) or 'desktop-only' or 'mobile-only',
			 * - size?: 'small' or 'medium' or 'large',
			 * - display?: 'left' or 'right' or 'center',
			 * - renderer?: you can pass a renderer function to customize the content of the cells in this column, args: (cellValue, rowObject)
			 * */
			cols: { type: Array, reflect: true },
			/** List of selected rows ids (caveat: the row should include id property)  */
			selectedIds: { type: Array, reflect: true },
			/** List of rows data objects */
			data: { type: Array, reflect: true }
		};
	}

	constructor() {
		super();
		this.cols = [];
		this.data = [];
		this.selectedIds = [];
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	get tableHeader() {
		return this.cols.map(
			column => html`
				<th class="${this.getHeaderSizeClass(column.size) + ' ' + this.getVisibilityClass(column.visibility)}">
					<div class="${this.getHeaderClasses(column)}">${column.value}</div>
				</th>
			`
		);
	}

	getHeaderClasses(column) {
		switch (column.display) {
			case 'right':
				return 'display-right';
			case 'left':
				return 'display-left';
			case 'center':
				return 'display-center';
			default:
				return '';
		}
	}

	getVisibilityClass(visibility) {
		return [VISIBILITY.ALWAYS_VISIBLE, VISIBILITY.DESKTOP_ONLY, VISIBILITY.MOBILE_ONLY].some(vis => vis === visibility)
			? visibility
			: VISIBILITY.ALWAYS_VISIBLE;
	}

	getHeaderSizeClass(size) {
		switch (size) {
			case 'small':
				return 'col-small';
			case 'medium':
				return 'col-medium';
			case 'large':
				return 'col-large';
			default:
				return '';
		}
	}

	handleClick(row) {
		/**
		 * Emitted on table row click
		 * @payload { row }
		 */
		this.dispatchCustomEvent('row-click', row);
	}

	get tableBody() {
		/* eslint-disable lit/no-template-bind */
		return this.data.map(row => {
			return html`
				<tr
					class="${this.selectedIds.some(sel => sel === row.id) ? 'selected' : ''}"
					@click="${() => this.handleClick(row)}"
				>
					${this.tableRow(row)}
				</tr>
			`;
		});
		/* eslint-enable */
	}

	tableRow(row) {
		return this.cols.map(
			column =>
				html`
					<td class="${this.getVisibilityClass(column.visibility)}">
						${this.renderTableCell(row[column.property], column, row)}
					</td>
				`
		);
	}

	renderTableCell(item, column, row) {
		const hasCustomRender = column.renderFunction && typeof column.renderFunction === 'function';
		return html`
			<div class="cell ${this.getHeaderClasses(column)}">
				${hasCustomRender ? column.renderFunction(item, row) : item}
			</div>
		`;
	}

	render() {
		return html`
			<table dir=${this.direction}>
				<thead>
					<tr>
						${this.tableHeader}
					</tr>
				</thead>
				<tbody>
					${this.tableBody}
				</tbody>
			</table>
			<div class="pagination">PAGINATION PLACEHOLDER</div>
		`;
	}
}

customElementDefineHelper('ts-basic-table', TSBasicTable);
