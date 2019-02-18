import { LitElement } from 'lit-element';
import { styles } from './styles';
import css from './common.css';

export class TSElement extends LitElement {
	static get styles() {
		return [styles(css)];
	}
}

// export const xTSElement = (name = 'Base') => {
// 	return class extends HTMLElement {
// 		static get observedAttributes() {
// 			return [];
// 		}
// 		static get tagName() {
// 			throw new Error('You need to specify the tag name of your element!');
// 		}
// 		static get html() {
// 			throw new Error('You need to specify some HTML!');
// 		}
// 		static get css() {
// 			throw new Error('You need to specify some CSS!');
// 		}
// 		constructor() {
// 			super();
// 			if (name === 'Base') {
// 				throw new Error('You need to specify the name of your element!');
// 			}
// 			this.name = name;

// 			const elementConstructor = Object.getPrototypeOf(this).constructor;
// 			this.attachShadow({ mode: 'open' });

// 			this[$cssTemplate] = elementConstructor[$cssTemplate];
// 			this[$template] = elementConstructor[$template];
// 			this.shadowRoot.appendChild(this[$cssTemplate].content.cloneNode(true));
// 			this.shadowRoot.appendChild(this[$template].content.cloneNode(true));

// 			elementConstructor.observedAttributes.forEach(observedAttribute => {
// 				this[observedAttribute] = this.getAttribute(observedAttribute);
// 			});
// 		}

// 		connectedCallback() {
// 			if (this.isConnected) {
// 				this.classes();
// 				if (window.ShadyCSS) {
// 					window.ShadyCSS.styleElement(this);
// 				}
// 			}
// 		}
// 		disconnectedCallback() {}
// 		adoptedCallback() {}
// 		attributeChangedCallback(name, oldValue, newValue) {
// 			this[name] = newValue;
// 			if (window.ShadyCSS) {
// 				window.ShadyCSS.styleSubtree(this);
// 			}
// 		}
// 		classes() {
// 			this.classList.add(
// 				'ts-component',
// 				`ts-${this.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`
// 			);
// 		}
// 	};
// };

// export const defineElement = Element => {
// 	// Set up the <template/> to work with ShadyCSS (this needs to be done once, before the template is used)
// 	Element[$cssTemplate] = document.createElement('template');
// 	Element[$cssTemplate].innerHTML = '';
// 	if (Element.css) {
// 		Element[$cssTemplate].innerHTML = `
// 			<style>
// 				${commonStyles}
// 			</style>
// 			<style>
// 				${Element.css}
// 			</style>
// 		`;

// 		if (window.ShadyCSS && !cssPrepared[Element.tagName]) {
// 			window.ShadyCSS.prepareTemplate(Element[$cssTemplate], Element.tagName);
// 			cssPrepared[Element.tagName] = true;
// 		}
// 	}

// 	Element[$template] = document.createElement('template');
// 	Element[$template].innerHTML = '';
// 	if (Element.html) {
// 		Element[$template].innerHTML = Element.html;
// 	}

// 	customElements.define(Element.tagName, Object.freeze(Element));
// };
