import { TSElement, unsafeCSS, html, css, customElementDefineHelper } from '@tradeshift/elements';
import styles from './icon.css';

import icons from './assets/icons';
import { typeColors, types, classNames, sizes } from './utils';

export { default as icons } from './assets/icons';
export { typeColors, types, classNames, sizes } from './utils';

export class TSIcon extends TSElement {
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
			/** Icon name, ex: 'arrow-up' */
			icon: { type: String, reflect: true },
			/** 'small' or 'medium' or 'large' */
			size: { type: String, reflect: true },
			/** Determining icon color, ex: 'error', 'focus' */
			type: { type: String, reflect: true },
			/** Add circular background for icon */
			circular: { type: Boolean, reflect: true },
			/** 90, 180, 270 */
			rotate: { type: Number, reflect: true },
			/** 'h', 'horizontal', 'v', 'vertical' */
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

customElementDefineHelper('ts-icon', TSIcon);
