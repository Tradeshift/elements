<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements - basic-table</h1>

<p align="center">
  Part of the reusable Tradeshift UI Components as Web Components.
    <a href="https://tradeshift.github.io/elements/?path=/story/ts-basic-table--default">
      Demo
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements.basic-table">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements.basic-table" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements.basic-table?minimal=true">
		  <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements.basic-table" height="20"/>
		</a>
		<a href="https://www.npmjs.com/browse/depended/@tradeshift/elements.basic-table">
		  <img alt="Dependent packages" src="https://badgen.net/npm/dependents/@tradeshift/elements.basic-table" height="20"/>
		</a>
</p>

<style>
  table {
        width:100%;
  }
</style>

## ➤ Properties

| Property    | Attribute   | Type   | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------- | ----------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dir         | dir         | String | ltr     | Direction of the component 'rtl' or 'ltr'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| cols        | cols        | Array  | []      | <br> List of columns configs, including: <br> - property: Property key of the column in data object, <br> - value: value of the title of column', <br> - visibility?: Which screen sizes this column should be visible -> 'always-visible'(default) or 'desktop-only' or 'mobile-only', <br> - size?: 'small' or 'medium' or 'large', <br> - display?: 'left' or 'right' or 'center', <br> - renderer?: you can pass a renderer function to customize the content of the cells in this column, args: (cellValue, rowObject) <br> |
| selectedIds | selectedIds | Array  | []      | List of selected rows ids (caveat: the row should include id property)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| data        | data        | Array  | []      | List of rows data objects                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## ➤ Events

| Name      | Description                | Payload |
| --------- | -------------------------- | ------- |
| row-click | Emitted on table row click | { row } |

## ➤ How to use it

- Install the package of basicTable

```shell
$ npm i @tradeshift/elements.basic-table --save
```

- Import the component

```js
import '@tradeshift/elements.basic-table';
```

or

```html
<script src="node_modules/@tradeshift/elements.basic-table/lib/basic-table.umd.js"></script>
```

- Use it like [demo]("https://tradeshift.github.io/elements/?path=/story/ts-basic-table--default")

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
