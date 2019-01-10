# Tradeshift Elements

The future is here!

## Example Element

This quick example shows off the API, but doesn't really do anything on its own.

- [example.js](./packages/components/example/src/example.js)
- [example.css](./packages/components/example/src/example.css)

## Polyfills required

- `classlist-polyfill`
  - `classList.toggle()`'s second argument is not supported in IE11
- `@webcomponents/webcomponentsjs`
  - `CustomElements`
  - `ShadowDOM` (via `ShadyDOM`/`ShadyCSS`)
  - `<template />`
  - platform polyfills
    - `defaultPrevented` is broken in IE.
    - `Event` constructor shim
    - `CustomEvent` constructor shim
    - `Array.from`
    - `Object.assign`
  - `Promise`
  - `Symbol`
  - `Node.baseURI`

## Polyfill Limitations

This is an incomplete list of limitations that we should watch out for, as long as we support IE11.

### ShadyCSS

> https://github.com/webcomponents/shadycss#limitations

#### Selector scoping

To use the `::slotted` pseudo-element, you must select it as a descendant of some context element.

```css
/* Bad */
::slotted() {
}

/* Good */
.context ::slotted() {
}
```

Since ShadyCSS removes all `<slot>` elements, you cannot select them directly or use any other selectors along with the `::slotted` pseudo-element selector.

```html
<!-- Bad -->
<style>
  .foo .bar::slotted(*) {
  }
</style>
<span class="foo"> <slot class="bar"></slot> </span>
```

```html
<!-- Good -->
<style>
  .foo ::slotted(*) {
  }
</style>
<span class="foo"> <slot></slot> </span>
```

#### Document level styling is not scoped by default

ShadyCSS mimics the behavior of shadow dom, but it is not able to prevent document level styling to affect elements inside a shady dom. Global styles defined in `index.html` or any styles not processed by ShadyCSS will affect all elements on the page.

To scope document level styling, the style must be wrapped in the `<custom-style>` element found in Polymer, or use the `CustomStyleInterface` library to modify document level styles.

#### Dynamically created styles are not supported

ShadyCSS works by processing a template for a given custom element class. Only the style elements present in that template will be scoped for the custom element's ShadowRoot.

### ShadyDOM

> https://github.com/webcomponents/shadydom#limitations

#### Asynchronous operation

ShadyDOM distribution is asynchronous for performance reasons. This means that the composed dom will be available 1 microtask after the dom mutation occurs. For testing, ShadyDOM.flush may be called to force syncronous composition.

### Custom Elements

> https://github.com/webcomponents/custom-elements#known-bugs-and-limitations

#### Element API patching

Only DOM API is patched. Notably, this excludes API from the HTML spec marked with the `CEReactions` extended attribute.

- Unpatched API from the DOM spec:
  - Setters on Element for `id`, `className`, and `slot`.
  - DOMTokenList (`element.classList`)
  - NamedNodeMap (`element.attributes`)
  - Attr (`element.attributes.getNamedItem('attr-name')`)

#### `:defined` CSS pseudo-class

The :defined CSS pseudo-class is not supported.

### `<template />`

> https://github.com/webcomponents/template#known-limitations

#### Template nodes in main document are upgraded after DOMContentLoaded

The first timepoint in which the polyfill can be certain the main document is loaded is DOMContentLoaded. As such, we use this timepoint to bootstrap any `<template>` as defined in the main document. This means that any scripts in the main document that run before this event (e.g. inline scripts) will not have the properly upgraded templates. Instead, listen for DOMContentLoaded yourself and only after that interact with any `<template>` in the main document.
