<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements</h1>

<p align="center">
  Reusable Tradeshift UI Components as Web Components 
    <a href="https://tradeshift.github.io/elements">
      https://tradeshift.github.io/elements
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements?minimal=true">
		  <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements" height="20"/>
		</a>
		<a href="https://www.npmjs.com/browse/depended/@tradeshift/elements">
		  <img alt="Dependent packages" src="https://badgen.net/npm/dependents/@tradeshift/elements" height="20"/>
		</a>
    <a href="https://david-dm.org/tradeshift/elements">
      <img alt="Dependencies" src="https://badgen.net/david/dep/Tradeshift/elements" height="20"/>
    </a>
    <a href="https://github.com/Tradeshift/elements/graphs/contributors">
      <img alt="Contributors" src="https://badgen.net/github/contributors/Tradeshift/elements" height="20"/>
    </a>
    <br/>
    <a href="https://github.com/Tradeshift/elements/issues?q=is%3Aissue+is%3Aclosed">
      <img alt="Closed issues" src="https://badgen.net/github/closed-issues/Tradeshift/elements" height="20"/>
    </a>
    <a href="https://github.com/Tradeshift/elements/issues">
      <img alt="Open issues" src="https://badgen.net/github/open-issues/Tradeshift/elements" height="20"/>
    </a>
    <a href="https://github.com/Tradeshift/elements/pulls">
      <img alt="Open pull requests" src="https://badgen.net/github/open-prs/Tradeshift/elements" height="20"/>
    </a>
    <a href="https://github.com/Tradeshift/elements/pulls?q=is%3Apr+is%3Aclosed">
      <img alt="Closed pull requests" src="https://badgen.net/github/closed-prs/Tradeshift/elements" height="20"/>
    </a>
    <a href="https://github.com/Tradeshift/elements/commits/master">
      <img alt="Last commit" src="https://badgen.net/github/last-commit/Tradeshift/elements" height="20"/>
    </a>
</p>

## ➤ How to use it

- Install the package of the component you need ([available components](https://github.com/Tradeshift/elements/tree/master/packages/components))

```shell
$ npm i @tradeshift/elements.button --save
```

- Import the component

```js
import '@tradeshift/elements.button';
```

or

```html
<script src="node_modules/@tradeshift/elements.button/lib/button.umd.js"></script>
```

- Use it

```html
<ts-button type="primary">
	Sample Button
</ts-button>
```

- Our components rely on having the `Open Sans` available, You can see the `font-weight` and `font-style` you need to load [here](https://github.com/Tradeshift/elements/blob/master/packages/core/src/fonts.css), or you can just load it from our package (for now)

```html
<link rel="stylesheet" href="node_modules/@tradeshift/elements/src/fonts.css" />
```

## ➤ Polyfills

For supporting IE11 you need to add couple of things

- Don't shim CSS Custom Properties in IE11

```html
<!-- Place this in the <head>, before the Web Component polyfills are loaded -->
<script>
	if (!window.Promise) {
		window.ShadyCSS = { nativeCss: true };
	}
</script>
```

##### You have two options for polyfills library:

1. Use [`@open-wc/polyfills-loader`](https://github.com/open-wc/open-wc/tree/master/packages/polyfills-loader)

- Installation

```shell
$ npm i @open-wc/polyfills-loader
```

- Load it

```js
import loadPolyfills from '@open-wc/polyfills-loader';

loadPolyfills().then(() => import('./my-app.js'));
```

2. Use [`@webcomponents/webcomponentsjs`](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)

- Installation

```hell
$ npm i @webcomponents/webcomponentsjs --save
```

- Enable ES5 class-less Custom Elements

```html
<script src="/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>
```

- Load appropriate polyfills and shims with [`@webcomponents/webcomponentsjs`](https://github.com/webcomponents/webcomponentsjs)

```html
<script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" defer></script>
```

## ➤ How to run it

- We are using [lerna](https://github.com/lerna/lerna) to manage our components in single repo but their own packages, so for installation you need to run:

```shell
$ npx lerna bootstrap     # bootstrap all packages and make sure they work together
```

- You can start the development server which is watching for changes:

```shell
$ npm start
```

- Open [https://localhost:8443/](https://localhost:8443/)

## ➤ How to contribute

Thanks for your interest and help!

- First thing you need to do is read this [[Component Checklist](https://github.com/Tradeshift/elements/wiki/Component-checklist)] which contains lots of important information about what you need to consider when you are creating/changing components

##### [General info](https://github.com/Tradeshift/elements/wiki/Useful-materials-starter)

You can find some [links to useful materials](https://github.com/Tradeshift/elements/wiki/Useful-materials-starter) about what we are using and some tutorials and articles that can help you get started.

#### `ts.elements`-specific info

- Extend `TSElement`, instead of `LitElement`
- Import `css`, `unsafeCSS` & `html` from `@tradeshift/elements` instead of `lit-html`
- Add the UMD global namespace to [`rollup.globals.json`](https://github.com/Tradeshift/elements/blob/master/rollup.globals.json)
- Add your package to the [`package.json`](<(https://github.com/Tradeshift/elements/blob/master/package.json)>) dependencies

## ➤ How to create new component

To make it simpler and more consistent, we added a `Component generator`, You can use our its script to generate a new component from terminal and it will create the component inside `packages/components`

- **NOTE**: Still you need to add the UMD global namespace to [`rollup.globals.json`](https://github.com/Tradeshift/elements/blob/master/rollup.globals.json) and add your package to the [`package.json`](<(https://github.com/Tradeshift/elements/blob/master/package.json)>) dependencies, for now

```shell
$ npm run component-gen
```

## ➤ How to release

As mentioned before, we are using [lerna](https://github.com/lerna/lerna), to be able to publish you need enable your [two-factor authentication in npm](https://docs.npmjs.com/configuring-two-factor-authentication)

```shell
$ NPM_CONFIG_OTP=123456 lerna publish`   # Push the packages to registry.npmjs.org
```

`NPM_CONFIG_OTP` is a workaround way to solve [the problem](https://github.com/lerna/lerna/issues/1137), which lerna fails to publish, after assigning [2FA](https://docs.npmjs.com/about-two-factor-authentication) on npm account

---

## ➤ [Polyfill Limitations](https://github.com/Tradeshift/elements/wiki/Polyfill-Limitations)

You can see a list of limitations that we should watch out for, [here](https://github.com/Tradeshift/elements/wiki/Polyfill-Limitations)

## ➤ License

- You can always create forks on GitHub, submit Issues and Pull Requests.
- You can only use Tradeshift Elements to make apps on a Tradeshift platform, e.g. tradeshift.com.
- You can fix a bug until the bugfix is deployed by Tradeshift.
- You can host Tradeshift Elements yourself.
- If you want to make a bigger change or just want to talk with us, reach out to our team here on GitHub.

You can read the full license agreement in the [LICENSE.md](https://github.com/Tradeshift/elements/blob/master/LICENSE.md).
