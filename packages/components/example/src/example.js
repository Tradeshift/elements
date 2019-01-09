import { TSElement, defineElement } from '@tradeshift/elements';
import css from './example.css';

/**
 * These will be the property keys for private properties
 */
const [$cool, $hot, $fancyAction] = [
	Symbol('cool'),
	Symbol('hot'),
	Symbol('fancyAction')
];

/**
 * Example component
 * Showing off the API
 *
 * Note: Only Autonomous custom elements are supported.
 */
class Example extends TSElement('Example') {
	// Setup ..........................................................

	/**
	 * List of attributes that should be observed.
	 * @return {Array<string>|null}
	 */
	static get observedAttributes() {
		// These will be automatically hooked up
		return ['cool', 'hot'];
	}

	/**
	 * Name for the new custom element.
	 * @return {string} Note that custom element names must contain a hyphen.
	 */
	static get tagName() {
		return 'ts-example';
	}

	/**
	 * HyperText Markup Language
	 * @return {string} HTML
	 */
	static get html() {
		return `
			<div>
				This is the static template.
			</div>
		`;
	}

	/**
	 * Cascading Style Sheet
	 * @return {string} CSS
	 */
	static get css() {
		return css;
	}

	// Life cycle .....................................................

	constructor() {
		// Always call super first
		super();

		// Bind private methods to `this`
		this[$fancyAction] = this[$fancyAction].bind(this);

		// ShadowRoot is available at this point
		this.shadowRoot
			.querySelector('slot')
			.addEventListener('slotchange', this[$fancyAction]);
	}

	/**
	 * Invoked each time the custom element is appended into a document-connected element.
	 * This will happen each time the node is moved, and may happen before the element's contents have been fully parsed.
	 */
	connectedCallback() {
		// Always call super first
		super.connectedCallback();
		if (this.isConnected) {
			// This `if` is necessary to be sure that the element is connected.
		}
	}

	/**
	 * Invoked each time the custom element is disconnected from the document's DOM.
	 */
	disconnectedCallback() {
		// Always call super first
		super.disconnectedCallback();
	}

	/**
	 * Invoked each time the custom element is moved to a new document.
	 */
	adoptedCallback() {
		// Always call super first
		super.adoptedCallback();
	}

	/**
	 * Invoked each time one of the custom element's attributes is added, removed, or changed.
	 * Which attributes to notice change for is specified in a static get `observedAttributes` method.
	 *
	 * @param  {string} name     			Changed attribute's local name.
	 * @param  {string|null} oldValue Changed attribute's old value, null if attribute is added.
	 * @param  {string|null} newValue Changed attribute's new value, null if attribute is removed.
	 */
	attributeChangedCallback(name, oldValue, newValue) {
		// Always call super first
		super.attributeChangedCallback(name, oldValue, newValue);
		// The following is done in `super` already:
		// this[name] = newValue;
	}

	// Private methods ................................................

	/**
	 * Private action, available only to the Example instance.
	 */
	[$fancyAction]() {
		console.log(this.shadowRoot.innerHTML);
	}

	// Getters and Setters for auto-wired attributes ..................

	get cool() {
		return this[$cool];
	}
	set cool(cool) {
		this[$cool] = cool;
	}

	get hot() {
		return this[$hot];
	}
	set hot(hot) {
		this[$hot] = hot;
	}
}

// Prepare template to work with ShadyCSS and run `customElements.define(Example.tagName, Example)`
defineElement(Example);
