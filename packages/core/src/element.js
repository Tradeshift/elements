import commonStyles from './common.css';

const [$template] = [Symbol('template')];

const stylesInitialized = {};

export const TSElement = (name = 'Base') => {
	return class extends HTMLElement {
		static get observedAttributes() {
			return [];
		}
		static get tagName() {
			throw new Error('You need to specify the tag name of your element!');
		}
		static get html() {
			throw new Error('You need to specify some HTML!');
		}
		static get css() {
			throw new Error('You need to specify some CSS!');
		}
		static init(Element) {
			Element[$template] = document.createElement('template');
			Element[$template].innerHTML = '';
			if (Element.css) {
				Element[$template].innerHTML = `
					<style>
						${commonStyles}
						${Element.css}
					</style>
				`;
			}
			if (Element.html) {
				Element[$template].innerHTML += Element.html;
			}

			if (window.ShadyCSS && !stylesInitialized[Element.tagName]) {
				window.ShadyCSS.prepareTemplate(Element[$template], Element.tagName);
				stylesInitialized[Element.tagName] = true;
			}

			customElements.define(Element.tagName, Element);
		}
		constructor() {
			super();
			if (name === 'Base') {
				throw new Error('You need to specify the name of your element!');
			}
			this.name = name;

			this.attachShadow({ mode: 'open' });

			// Get the <template /> ref from the Class and not the instance (static!)
			this[$template] = Object.getPrototypeOf(this).constructor[$template];

			this.shadowRoot.appendChild(this[$template].content.cloneNode(true));
			this.createdCallback();
		}
		createdCallback() {}

		connectedCallback() {
			if (this.isConnected) {
				this.classes();
				if (window.ShadyCSS) {
					window.ShadyCSS.styleElement(this);
				}
			}
		}
		attributeChangedCallback(name, oldValue, newValue) {
			this[name] = newValue;
			if (window.ShadyCSS) {
				window.ShadyCSS.styleSubtree(this);
			}
		}
		classes() {
			this.classList.add(
				'ts-component',
				`ts-${this.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`
			);
		}
	};
};
