import { LitElement, unsafeCSS } from 'lit-element';
import commonCSS from './common.css';
import { constants } from './utils';
export { constants, helpers, CloseOnEscBehavior } from './utils';

export function customElementDefineHelper(name, component) {
	if (!window.customElements.get(name)) {
		window.customElements.define(name, component);
	}
}

export class TSElement extends LitElement {
	static get styles() {
		return [unsafeCSS(commonCSS)];
	}
	// TODO: Remove this when changed rtl to dir in other components
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

export function validateSlottedNodes(componentName, slottedNodes, validNodes) {
	const lowerCaseValidNodes = validNodes.map(node => node.toLowerCase());
	const filterInvalidNodes = slottedNode => {
		// for line breaks in the html we need to ignore TEXT_NODEs
		if (slottedNode.nodeType !== Node.TEXT_NODE) {
			return lowerCaseValidNodes.indexOf(slottedNode.tagName.toLowerCase()) === -1;
		}
	};

	const isInvalid = slottedNodes.filter(filterInvalidNodes).length > 0;
	if (isInvalid) {
		const validNodesNames = validNodes.map(node => node.toLowerCase()).join();
		throw new Error(`You can only use ${validNodesNames} in ${componentName.toLowerCase()} component!`);
	}
}

// To help with treeshaking, only exports in use are listed
export { css, unsafeCSS, html } from 'lit-element';
