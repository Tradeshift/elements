import { TSElement, unsafeCSS, html, css, customElementDefineHelper } from '@tradeshift/elements';
import styles from './icon.css';

import { typeColors, types, classNames, sizes } from './utils';

export { typeColors, types, classNames, sizes } from './utils';

export class TSIcon extends TSElement {
	constructor() {
		super();
		this.size = sizes.MEDIUM;
		this.iconCache = new Map();
		this.svgContent = '';
	}

	static get styles() {
		const colorTypesStyle = Object.keys(types).map(typeKey => {
			const type = types[typeKey];
			const typeColor = typeColors[type];
			return css`
				:host([type='${unsafeCSS(type)}']) {
					--ts-icon-color: var(--ts-color-${unsafeCSS(typeColor)});
				}
			`;
		});
		return [TSElement.styles, unsafeCSS(styles), ...colorTypesStyle];
	}

	static get properties() {
		return {
			/** Icon name, ex: 'arrow-up' or inline svg string */
			icon: { type: String, reflect: true },
			/** Url to svg for icon. It will override the icon property */
			src: { type: String, reflect: true },
			/** 'small' or 'medium' or 'large' */
			size: { type: String, reflect: true },
			/** Determining icon color, ex: 'error', 'focus' */
			type: { type: String, reflect: true },
			/** Add circular background for icon */
			circular: { type: Boolean, reflect: true },
			/** 90, 180, 270 */
			rotate: { type: Number, reflect: true },
			/** 'h', 'horizontal', 'v', 'vertical' */
			flip: { type: String, reflect: true },
			/** INTERNAL svg content to be rendered inside icon */
			svgContent: { type: String, attribute: false }
		};
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		switch (name) {
			case 'icon':
				if (!this.src && newVal) {
					window.customElements.whenDefined('ts-icon').then(() => {
						this.getIcon();
					});
				}
				break;
			case 'src':
				if (newVal) {
					window.customElements.whenDefined('ts-icon').then(() => {
						this.getSrc();
					});
				}
				break;
			// do nothing
		}
	}

	async getIcon() {
		if (this.icon.indexOf('<svg') > -1 && this.icon.indexOf('</svg>') > -1) {
			this.svgContent = this.parseSvg(this.icon);
			return;
		}
		if (!this.iconCache.has(this.icon)) {
			try {
				const { default: svgUrl } = await import(`@tradeshift/elements.icon/lib/assets/icons/${this.icon}.svg`);
				const res = await fetch(svgUrl);
				if (!res.ok) {
					// cannot fetch the icon svg, set the content to empty string
					this.svgContent = '';
					return;
				}
				const content = await this.extractSvgContent(res);
				this.iconCache.set(this.icon, content);
			} catch (e) {
				console.error(e);
				this.svgContent = '';
				return;
			}
		}
		this.svgContent = this.iconCache.get(this.icon);
	}

	async getSrc() {
		if (!this.iconCache.has(this.src)) {
			try {
				const res = await fetch(this.src);
				if (!res.ok) {
					// cannot fetch the icon svg, set the content to empty string
					this.svgContent = '';
					return;
				}
				const content = await this.extractSvgContent(res);
				this.iconCache.set(this.src, content);
			} catch (e) {
				console.error(e);
				this.svgContent = '';
				return;
			}
		}
		this.svgContent = this.iconCache.get(this.src);
	}

	parseSvg(svgString) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(svgString, 'image/svg+xml');
		return doc.firstChild;
	}

	async extractSvgContent(response) {
		const svgString = await response.text();
		return this.parseSvg(svgString);
	}

	render() {
		return html`<span class="${classNames.ICON_WRAPPER}">${this.svgContent}</span>`;
	}
}

customElementDefineHelper('ts-icon', TSIcon);
