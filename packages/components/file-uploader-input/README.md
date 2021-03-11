<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements - file-uploader-input</h1>

<p align="center">
  Part of the reusable Tradeshift UI Components as Web Components.
    <a href="https://tradeshift.github.io/elements/?path=/story/ts-file-uploader-input--default">
      Demo
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements.file-uploader-input">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements.file-uploader-input" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements.file-uploader-input?minimal=true">
		  <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements.file-uploader-input" height="20"/>
		</a>
		<a href="https://www.npmjs.com/browse/depended/@tradeshift/elements.file-uploader-input">
		  <img alt="Dependent packages" src="https://badgen.net/npm/dependents/@tradeshift/elements.file-uploader-input" height="20"/>
		</a>
</p>

<style>
  table {
        width:100%;
  }
</style>

## ➤ Properties

| Property                  | Attribute                      | Type    | Default    | Description                                                     |
| ------------------------- | ------------------------------ | ------- | ---------- | --------------------------------------------------------------- |
| rtl                       | rtl                            | Boolean | false      |                                                                 |
| disabled                  | disabled                       | Boolean | false      | Disable the input                                               |
| multiple                  | multiple                       | Boolean | false      | Allow multiple file select.                                     |
| size                      | size                           | String  | sizes.full | Size of the input: 'full'(default), 'medium', 'small'           |
| acceptedFileExtensions    | accepted-file-extensions       | Array   |            | List of accepted file extensions                                |
| disableDragAndDrop        | disable-drag-and-drop          | Boolean | false      | Disable drag and drop functionality                             |
| helpTextTitle             | help-text-title                | String  | ''         |                                                                 |
| helpTextMessages          | help-text-messages             | Array   | []         |                                                                 |
| hideFileTypeHelpText      | hide-file-type-help-text       | Boolean | false      | Hide the help text about allowed file types.                    |
| hideMaxFileNumberHelpText | hide-max-file-number-help-text | Boolean | false      | Hide the help text about maximum number of files.               |
| maxFileNumber             | max-file-number                | Number  |            | Maximum limit for number of files to be shown as helper message |
| fileUploadWrapper         | fileUploadWrapper              |         |            | INTERNAL                                                        |

## ➤ Slots

| Name             | Description                    |
| ---------------- | ------------------------------ |
| placeholder-text | Customize the placeholder text |
| button-text      | Customize the button text      |

## ➤ Events

| Name   | Description               | Payload                  |
| ------ | ------------------------- | ------------------------ |
| change | Emitted on file(s) upload | { originalEvent, files } |

## ➤ How to use it

- Install the package of fileUploaderInput

```shell
$ npm i @tradeshift/elements.file-uploader-input --save
```

- Import the component

```js
import '@tradeshift/elements.file-uploader-input';
```

or

```html
<script src="node_modules/@tradeshift/elements.file-uploader-input/lib/file-uploader-input.umd.js"></script>
```

- Use it like [demo]("https://tradeshift.github.io/elements/?path=/story/ts-file-uploader-input--default")

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
