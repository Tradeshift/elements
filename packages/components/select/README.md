<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements - select</h1>

<p align="center">
  Part of the reusable Tradeshift UI Components as Web Components.
    <a href="https://tradeshift.github.io/elements/?path=/story/ts-select--default">
      Demo
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements.select">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements.select" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements.select?minimal=true">
      <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements.select" height="20"/>
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
| dir | dir | String | ltr | Direction of the component 'rtl' or 'ltr'. |
| disabled | disabled | Boolean | false | Is component disabled or not. |
| opened | opened | Boolean | false | Is the dropdown part opened or not. |
| items | items | Array |  | List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon |
| filteredItems | filtered-items | Array |  | List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items. |
| multiselect | multiselect | Boolean | false | Allow users to select several options or not. |
| noApplyButton | no-apply-button | Boolean | false | Do not show the apply button and directly emit select-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior. |
| selected | selected | Array | [] | List of selected items' ids |
| placeholder | placeholder | String |  | Default placeholder when there is no selection. |
| translations | translations | Object |  | Translated messages for the user locale |
| loading | loading | Boolean | false | Show the loading spinner in select dropdown |
| caseSensitive | case-sensitive | Boolean | false | Make client side filtering case sensitive. This also applies on the filterValue in 'filter-value-change' event |
| label | label | String | '' | The label of the select input field |
| required | required | Boolean | false | To show the asterisk in the label, not doing validation yet |
| id | id | String | 'select-input-id' | Id of the select component |
| helpTextMessages | help-text-messages | Array |  | Array of messages to pass to help-text component. See help-text component for more info |
| helpTextTitle | help-text-title | String |  | If you have more than one help text message , you should pass a title to it. See help-text component for more info |
| helpTextType | help-text-type | String |  | To change the help text icon and style if needed. See help-text component for more info |
| errorMessages | error-messages | Array |  | Error messages to show underneath of the input when it has error |
| errorTitle | error-title | String |  | Error title, if there are more than one error message |
| hasError | has-error | Boolean | false | If the text field has an error, to show error messages and change the style of the input |
| inputValue | inputValue | String | '' | INTERNAL Current value in input. |
| filterValue | filterValue | String | '' | INTERNAL Latest input value that was used to filter. |
| hasSlottedLabel | hasSlottedLabel | Boolean | false | INTERNAL |

## ➤ Slots

| Name  | Description                                                     |
| ----- | --------------------------------------------------------------- |
| label | If you want to have custom html in label, you can use this slot |

## ➤ Events

| Name | Description | Payload |
| --- | --- | --- |
| filter-value-change | Emitted when filter value of the select changes. You can listen to this for doing custom filtering and providing filteredItems to override the default component filtering. | { filterValue, id } |
| select-changed | Emitted when user applies the selected changes | { selected, id } |

## ➤ How to use it

- Install the package of select

```shell
$ npm i @tradeshift/elements.select --save
```

- Import the component

```js
import '@tradeshift/elements.select';
```

or

```html
<script src="node_modules/@tradeshift/elements.select/lib/select.umd.js"></script>
```

- Use it like [demo]("https://tradeshift.github.io/elements/?path=/story/ts-select--default")

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
