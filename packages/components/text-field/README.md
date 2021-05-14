<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements - text-field</h1>

<p align="center">
  Part of the reusable Tradeshift UI Components as Web Components.
    <a href="https://tradeshift.github.io/elements/?path=/story/ts-text-field--default">
      Demo
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements.text-field">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements.text-field" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements.text-field?minimal=true">
		  <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements.text-field" height="20"/>
		</a>
		<a href="https://www.npmjs.com/browse/depended/@tradeshift/elements.text-field">
		  <img alt="Dependent packages" src="https://badgen.net/npm/dependents/@tradeshift/elements.text-field" height="20"/>
		</a>
</p>

<style>
  table {
        width:100%;
  }
</style>

## ➤ Properties

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| label | label | String | '' | Label of the text field. If you need something more than simple string, use the label slot. |
| id | id | String | 'input-id' | Id of the text field |
| value | value | String | '' | Value of the text field |
| type | type | String | 'text' | Pass type of the input element, if it's not multiline |
| placeholder | placeholder | String | '' | Placeholder of the text field |
| helpTextMessages | help-text-messages | Array |  | Array of messages to pass to help-text component. See help-text component for more info |
| helpTextTitle | help-text-title | String |  | If you have more than one help text message , you should pass a title to it. See help-text component for more info |
| errorMessages | error-messages | Array |  | Error messages to show underneath of the input when it has error |
| errorTitle | error-title | String |  | Error title, if there are more than one error message |
| hasError | has-error | Boolean | false | If the text field has an error, to show error messages and change the style of the input |
| required | required | Boolean | false | To show the asterisk in the label, not doing validation yet |
| disabled | disabled | Boolean | false | Is the text field disabled? |
| readonly | readonly | Boolean | false | Is the text field readonly? |
| multiline | multiline | Boolean | false | Will show a textarea instead of an input |
| dir | dir | String | ltr | Direction 'rtl' or 'ltr' |
| iconStart | icon-start | String | '' | Icon that appears at the beginning of the input (left in ltr direction) |
| iconEnd | icon-end | String | '' | Icon that appears at the end part of the input (end in ltr direction). Readonly and disabled state will show a lock icon instead. |

## ➤ Slots

| Name | Description |
| --- | --- |
| label | If you want to have custom html in label, you can use this slot |
| ts-input | If you want to have the input/textarea in the light DOM, for example, to be able to access it in the form data, you can pass the ts-input element with the input/textarea yourself. |

## ➤ Events

| Name   | Description                              | Payload                      |
| ------ | ---------------------------------------- | ---------------------------- |
| input  | Emitted onInput event of input/textarea  | { value, originalEvent }     |
| change | Emitted onChange event of input/textarea | { value, id, originalEvent } |

## ➤ How to use it

- Install the package of textField

```shell
$ npm i @tradeshift/elements.text-field --save
```

- Import the component

```js
import '@tradeshift/elements.text-field';
```

or

```html
<script src="node_modules/@tradeshift/elements.text-field/lib/text-field.umd.js"></script>
```

- Use it like [demo]("https://tradeshift.github.io/elements/?path=/story/ts-text-field--default")

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
