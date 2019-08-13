import { LitElement, unsafeCSS } from 'lit-element';
import commonCSS from './common.css';
import { constants } from './utils';
export { constants, helpers } from './utils';

export function customElementDefineHelper(name, component) {
	if (!window.customElements.get(name)) {
		window.customElements.define(name, component);
	}
}

export class TSElement extends LitElement {
	static get styles() {
		return [unsafeCSS(commonCSS)];
	}
	// TODO: Remove this when changed rtl to dir in ohter components
	get bodyHasRTL() {
		return document.body.getAttribute('dir') === 'rtl';
	}

	get bodyDir() {
		return document.body.getAttribute('dir') || 'ltr';
	}

	dispatchCustomEvent(eventName, data = {}, delayed = false) {
		const event = new CustomEvent(eventName, {
			detail: data,
			bubbles: true,
			composed: true
		});
		if (delayed) {
			setTimeout(() => {
				this.dispatchEvent(event);
			}, constants.delay.FAST);
		} else {
			this.dispatchEvent(event);
		}
	}
}

// To help with treeshaking, only exports in use are listed
export { css, unsafeCSS, html } from 'lit-element';
