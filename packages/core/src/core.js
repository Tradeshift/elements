import { LitElement, unsafeCSS } from 'lit-element';
import commonCSS from './common.css';

export class TSElement extends LitElement {
	static get styles() {
		return unsafeCSS(commonCSS);
	}
	static get properties() {
		return { ready: { type: Boolean, reflect: true } };
	}
	constructor() {
		super();
		this.ready = false;
	}
	firstUpdated() {
		this.ready = true;
	}
}

// To help with treeshaking, only exports in use are listed
export { css, unsafeCSS, html } from 'lit-element';