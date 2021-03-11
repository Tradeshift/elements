<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements - file-card</h1>

<p align="center">
  Part of the reusable Tradeshift UI Components as Web Components.
    <a href="https://tradeshift.github.io/elements/?path=/story/ts-file-card--default">
      Demo
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements.file-card">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements.file-card" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements.file-card?minimal=true">
		  <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements.file-card" height="20"/>
		</a>
		<a href="https://www.npmjs.com/browse/depended/@tradeshift/elements.file-card">
		  <img alt="Dependent packages" src="https://badgen.net/npm/dependents/@tradeshift/elements.file-card" height="20"/>
		</a>
</p>

<style>
  table {
        width:100%;
  }
</style>

## ➤ Properties

| Property     | Attribute     | Type    | Default          | Description                                                                  |
| ------------ | ------------- | ------- | ---------------- | ---------------------------------------------------------------------------- |
| state        | state         | String  | states.UPLOADING | type/state of the file card: 'download', 'failed', 'uploading'               |
| fileObject   | file-object   | Object  |                  | File data object, {name, size, ...}                                          |
| rtl          | rtl           | Boolean | false            |                                                                              |
| removable    | removable     | Boolean | false            | Show a remove button on the card, which emit an event when it's been clicked |
| size         | size          | String  | sizes.FULL       | Size of the file card: 'full','medium','small'                               |
| errorMessage | error-message | String  |                  | The error message to be shown on the file card when it's in failed state     |

## ➤ Slots

| Name                 | Description                              |
| -------------------- | ---------------------------------------- |
| remove-action-text   | To customize the remove action message   |
| download-action-text | To customize the download action message |

## ➤ Events

| Name   | Description                                | Payload  |
| ------ | ------------------------------------------ | -------- |
| remove | Emitted when user clicks the remove action | { file } |

## ➤ How to use it

- Install the package of fileCard

```shell
$ npm i @tradeshift/elements.file-card --save
```

- Import the component

```js
import '@tradeshift/elements.file-card';
```

or

```html
<script src="node_modules/@tradeshift/elements.file-card/lib/file-card.umd.js"></script>
```

- Use it like [demo]("https://tradeshift.github.io/elements/?path=/story/ts-file-card--default")

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

## ➤ How to contribute

Thanks for your interest and help!

- First thing you need to do is read this [[Component Checklist](https://github.com/Tradeshift/elements/wiki/Component-checklist)] which contains lots of important information about what you need to consider when you are creating/changing components

##### [General info](https://github.com/Tradeshift/elements/wiki/Useful-materials-starter)

You can find some [links to useful materials](https://github.com/Tradeshift/elements/wiki/Useful-materials-starter) about what we are using and some tutorials and articles that can help you get started.

## ➤ [Polyfill Limitations](https://github.com/Tradeshift/elements/wiki/Polyfill-Limitations)

You can see a list of limitations that we should watch out for, [here](https://github.com/Tradeshift/elements/wiki/Polyfill-Limitations)

## ➤ License

- You can always create forks on GitHub, submit Issues and Pull Requests.
- You can only use Tradeshift Elements to make apps on a Tradeshift platform, e.g. tradeshift.com.
- You can fix a bug until the bugfix is deployed by Tradeshift.
- You can host Tradeshift Elements yourself.
- If you want to make a bigger change or just want to talk with us, reach out to our team here on GitHub.

You can read the full license agreement in the [LICENSE.md](https://github.com/Tradeshift/elements/blob/master/LICENSE.md).
