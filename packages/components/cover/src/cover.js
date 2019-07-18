import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './cover.css';

customElementDefineHelper(
	'ts-cover',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {};
		}

		render() {
			return html`
				<div></div>
			`;
		}
	}
);
