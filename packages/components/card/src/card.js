import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './card.css';
import { sizes, orientations, classNames } from './utils';

export class TSCard extends TSElement {
	constructor() {
		super();
		this.type = '';
		this.size = sizes.FULL;
		this.orientation = orientations.VERTICAL;
		this.rtl = false;
		this.noPadding = false;
		this.noHorizontalPadding = false;
		this.noVerticalPadding = false;
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			type: { type: String, reflect: true },
			orientation: { type: String, reflect: true },
			rtl: { type: Boolean, reflect: true },
			size: { type: String, reflect: true },
			noPadding: { type: Boolean, reflect: true, attribute: 'no-padding' },
			noHorizontalPadding: {
				type: Boolean,
				reflect: true,
				attribute: 'no-horizontal-padding'
			},
			noVerticalPadding: {
				type: Boolean,
				reflect: true,
				attribute: 'no-vertical-padding'
			}
		};
	}

	render() {
		return html`
			<div class="card-wrapper" data-size="${this.size}">
				<div
					class="${classNames.CARD}"
					data-orientation="${this.orientation}"
					data-type="${this.type}"
					?data-no-padding="${this.noPadding}"
					?data-no-horizontal-padding="${this.noHorizontalPadding}"
					?data-no-vertical-padding="${this.noVerticalPadding}"
					?data-rtl="${this.rtl}"
				>
					<slot></slot>
				</div>
			</div>
		`;
	}
}

customElementDefineHelper('ts-card', TSCard);
