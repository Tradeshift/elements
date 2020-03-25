import { TSElement, unsafeCSS, html, css, customElementDefineHelper } from '@tradeshift/elements';
import styles from './icon.css';

import icons from './assets/icons';
import { typeColors, types, classNames, sizes } from './utils';

customElementDefineHelper(
	'ts-icon',
	class extends TSElement {
		constructor() {
			super();
			this.size = sizes.MEDIUM;
		}

		static get styles() {
			const colorTypesStyle = Object.keys(types).map(typeKey => {
				const type = types[typeKey];
				const typeColor = typeColors[type];
				return css`	:host([type="${unsafeCSS(type)}"]) {
						--ts-icon-color: var(--ts-color-${unsafeCSS(typeColor)});
				}`;
			});
			return [TSElement.styles, unsafeCSS(styles), ...colorTypesStyle];
		}

		static get properties() {
			return {
				icon: { type: String, reflect: true },
				size: { type: String, reflect: true },
				type: { type: String, reflect: true },
				circular: { type: Boolean, reflect: true },
				rotate: { type: Number, reflect: true },
				flip: { type: String, reflect: true }
			};
		}

		render() {
			return html`
				<span class="${classNames.ICON_WRAPPER}">
					${icons[this.icon]}
				</span>
			`;
		}
	}
);
