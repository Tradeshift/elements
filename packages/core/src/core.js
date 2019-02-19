import { LitElement, unsafeCSS } from 'lit-element';
import css from './common.css';

export class TSElement extends LitElement {
	static styles = unsafeCSS(css);
}

// To help with treeshaking, only exports in use are listed
export { customElement, property, css, unsafeCSS, html } from 'lit-element';
