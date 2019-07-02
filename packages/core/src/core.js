import { LitElement, unsafeCSS } from 'lit-element';
import commonCSS from './common.css';
import cssVariables from './vars.css';
export { constants, helpers } from './utils';

export function customElementDefineHelper(name, component) {
	if (!window.customElements.get(name)) {
		window.customElements.define(name, component);
	}
}

export class TSElement extends LitElement {
	static get styles() {
		return [unsafeCSS(cssVariables), unsafeCSS(commonCSS)];
	}

	get bodyHasRTL() {
		return document.body.getAttribute('dir') === 'rtl';
	}
}

// To help with treeshaking, only exports in use are listed
export { css, unsafeCSS, html } from 'lit-element';
