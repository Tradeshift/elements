import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './pager.css';
import { perPageSelectValues } from './utils';
import translations from './utils/translations';

import '@tradeshift/elements.icon';
import '@tradeshift/elements.tooltip';

export class TSPager extends TSElement {
	constructor() {
		super();
		this.activePage = 1;
		this._translations = Object.assign({}, translations);
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Total number of pages */
			totalPages: { type: Number, reflect: true, attribute: 'total-pages' },
			/** Currently active page */
			activePage: { type: Number, reflect: true, attribute: 'active-page' },
			/** Determining maximum number of items in the page, should be 10,20,30,40,50 */
			perPage: { type: Number, reflect: true, attribute: 'per-page' },
			/** Translated messages for the user locale */
			translations: { type: Object, reflect: true }
		};
	}

	get translations() {
		return this._translations;
	}

	set translations(val) {
		const oldVal = this._translations;
		this._translations = Object.assign(oldVal, val);
		this.requestUpdate('translations', oldVal);
	}

	get toStart() {
		return this.navigationButton({
			className: 'first-page',
			disabled: this.activePage === 1,
			tooltip: this.translations.first_page_tooltip,
			icon: html`
				<ts-icon icon="arrow-left-skip" size="large"></ts-icon>
			`,
			callback: () => (this.activePage = 1)
		});
	}

	get toEnd() {
		return this.navigationButton({
			className: 'last-page',
			tooltip: this.translations.last_page_tooltip,
			icon: html`
				<ts-icon icon="arrow-left-skip" size="large" flip="h"></ts-icon>
			`,
			disabled: this.activePage === this.totalPages,
			callback: () => (this.activePage = this.totalPages)
		});
	}

	get prev() {
		return this.navigationButton({
			className: 'prev-page',
			disabled: this.activePage === 1,
			tooltip: this.translations.first_page_tooltip,
			icon: html`
				<ts-icon icon="arrow-down-short" size="large" rotate="90"></ts-icon>
			`,
			callback: () => (this.activePage -= 1)
		});
	}

	get next() {
		return this.navigationButton({
			className: 'prev-page',
			disabled: this.activePage === this.totalPages,
			tooltip: this.translations.last_page_tooltip,
			icon: html`
				<ts-icon icon="arrow-down-short" size="large" rotate="270"></ts-icon>
			`,
			callback: () => (this.activePage += 1)
		});
	}

	get pageInput() {
		// add 5 extra pixels for each extra digit of numbers over 2 digits
		const inputWidth = 40 + (this.totalPages.toString().length - 2) * 5;
		return html`
			<li class="page-input-wrapper">
				<label for="activPage">${this.translations.page}</label>
				<input
					id="activPage"
					class="page-input"
					type="number"
					style="width: ${inputWidth}px"
					min="1"
					max="${this.totalPages}"
					.value="${this.activePage}"
					@change="${this.handleInputChange}"
				/>
				<span>${this.translations.of} ${this.totalPages}</span>
			</li>
		`;
	}

	get itemsPerPageSelector() {
		if (!this.perPage) {
			return;
		}
		if (perPageSelectValues.indexOf(this.perPage) === -1) {
			const errorMessage = `Wrong items per page value: ${
				this.perPage
			}. per-page should be either of these ${perPageSelectValues.join()}`;
			throw new Error(errorMessage);
		}

		return html`
			<label class="item-per-page-container">
				${this.translations.items_per_page}
				<select id="itemsPerPage" @change="${this.handlePerPageChange}">
					${perPageSelectValues.map(
						value =>
							html`
								<option value="${value}" ?selected="${value === this.perPage}">${value}</option>
							`
					)}
				</select>
			</label>
		`;
	}

	navigationButton({ className, disabled, tooltip, icon, callback }) {
		return html`
			<li class="${className}">
				<ts-tooltip ?disabled="${!disabled}" tooltip="${tooltip}" position="top">
					<button ?disabled=${disabled} @click="${callback}">
						${icon}
					</button>
				</ts-tooltip>
			</li>
		`;
	}

	handleInputChange(e) {
		let newPageNumber = Number(e.target.value);
		// blur the input to stop changing the page with arrow multiple times in a row
		e.target.blur();
		// if the input was empty, don't change the page
		if (!e.target.value) {
			newPageNumber = this.activePage;
		}
		if (newPageNumber < 1) {
			newPageNumber = 1;
		} else if (newPageNumber > this.totalPages) {
			newPageNumber = this.totalPages;
		}
		this.activePage = newPageNumber;
		// for those cases changing the input to out of range two time in a row
		e.target.value = newPageNumber;
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		if (name === 'active-page') {
			// TODO: make this reusable
			if (!this.hasUpdated) {
				// do not trigger events on initialization.
				return;
			}
			if (newVal === oldVal) {
				// do not trigger events on re-render with the same value (it happens in React).
				return;
			}
			this.dispatchCustomEvent('page-change', { oldVal: Number(oldVal), newVal: Number(newVal) });
		}
	}

	handleNavigation(page) {
		this.activePage = page;
	}

	handlePerPageChange(e) {
		this.perPage = Number(e.target.value);
		this.dispatchCustomEvent('per-page-change', { per_page: this.perPage });
	}

	render() {
		return html`
			<div class="container">
				${this.itemsPerPageSelector}
				<menu>
					${this.toStart} ${this.prev} ${this.pageInput} ${this.next} ${this.toEnd}
				</menu>
			</div>
		`;
	}
}

customElementDefineHelper('ts-pager', TSPager);
