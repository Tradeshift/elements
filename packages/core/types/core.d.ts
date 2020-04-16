export function customElementDefineHelper(name: any, component: any): void;
export function validateSlottedNodes(componentName: any, slottedNodes: any, validNodes: any): void;
export declare class TSElement extends LitElement {
	static get styles(): import('lit-element').CSSResult[];
	get bodyHasRTL(): boolean;
	get bodyDir(): 'rtl' | 'ltr' | 'auto';
	dispatchCustomEvent(eventName: any, data?: {}, delayed?: boolean): void;
}
import { LitElement } from 'lit-element';
export { constants, helpers, CloseOnEscBehavior } from './utils/index';
export { css, unsafeCSS, html } from 'lit-element';
