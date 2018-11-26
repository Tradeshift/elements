(function() {
	if (
		// No Reflect, no classes, no need for shim because native custom elements
		// require ES2015 classes or Reflect.
		window.Reflect === undefined ||
		window.customElements === undefined ||
		// The webcomponentsjs custom elements polyfill doesn't require
		// ES2015-compatible construction (`super()` or `Reflect.construct`).
		window.customElements.hasOwnProperty('polyfillWrapFlushCallback')
	) {
		return;
	}
	const BuiltInHTMLBodyElement = HTMLBodyElement;
	window.HTMLBodyElement = function HTMLBodyElement() {
		return Reflect.construct(BuiltInHTMLBodyElement, [], this.constructor);
	};
	HTMLBodyElement.prototype = BuiltInHTMLBodyElement.prototype;
	HTMLBodyElement.prototype.constructor = HTMLBodyElement;
	Object.setPrototypeOf(HTMLBodyElement, BuiltInHTMLBodyElement);
})();
