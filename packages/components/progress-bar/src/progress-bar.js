import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './progress-bar.css';

customElementDefineHelper(
	'ts-progress-bar',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				total: { type: Number, reflect: true },
				done: { type: Number, reflect: true },
				indeterminate: { type: Boolean, reflect: true }
			};
		}

		constructor() {
			super();
			this.total = 100;
			this.done = 0;
			this.indeterminate = false;
		}

		get doneWidthStyle() {
			if (!this.indeterminate) {
				return `width: ${(this.done / this.total) * 100}%`;
			}
		}

		render() {
			return html`
				<div class="progress-bar-wrapper" ?data-indeterminate="${this.indeterminate}">
					<div class="progress-bar-total">
						<div style="${this.doneWidthStyle}" class="progress-bar-done"></div>
					</div>
				</div>
			`;
		}
	}
);
