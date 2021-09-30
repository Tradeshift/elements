<h1 align="center">
    <a href="https://tradeshift.com/">
      <img alt="Tradeshift" src="https://tradeshift.com/wp-content/themes/Tradeshift/img/brand/logo-black.png"/>
    </a>
</h1>

<h1 align="center">Elements - date-picker</h1>

<p align="center">
  Part of the reusable Tradeshift UI Components as Web Components.
    <a href="https://tradeshift.github.io/elements/?path=/story/ts-date-picker--default">
      Demo
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@tradeshift/elements.date-picker">
      <img alt="NPM Version" src="https://badgen.net/npm/v/@tradeshift/elements.date-picker" height="20"/>
    </a>
    <a href="https://npmcharts.com/compare/@tradeshift/elements.date-picker?minimal=true">
		  <img alt="Downloads per month" src="https://badgen.net/npm/dm/@tradeshift/elements.date-picker" height="20"/>
		</a>
		<a href="https://www.npmjs.com/browse/depended/@tradeshift/elements.date-picker">
		  <img alt="Dependent packages" src="https://badgen.net/npm/dependents/@tradeshift/elements.date-picker" height="20"/>
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
| translations | translations | Object |  | Can be used for customizing placeholder, days abbreviations, months abbreviations and providing translations for them <br> see the structure in its storybook knobs section. <br> |
| dir | dir | String | ltr | Direction of the component 'rtl' or 'ltr'. |
| selectedDate | selected-date | String |  | For setting the date of the date picker you can use this prop/attribute. It will get update after the user changes the date. |
| pageDate | page-date | String |  | This date can be used as a way to customize the month that date picker dropdown will be opened in, <br> by default it's the current month. You can pass any date in the preferred month. |
| selectedDateObj | selectedDateObj | String |  | INTERNAL |
| label | label | String |  | Label of the date picker. |
| disabled | disabled | Boolean | false | Is the date picker disabled? |
| readonly | readonly | Boolean | false | Is the date picker readonly? |
| isDisabledDate | isDisabledDate | Function |  | You can pass a function to this prop, which will get js Date object of the days in the calendar view as input, <br> and expect a boolean to make the day disabled or not. |
| min | min | String |  | Minimum date which can be selected by the user. Dates before this will be shown as disabled. Supports ISO 8601 format |
| max | max | String |  | Maximum date which can be selected by the user. Dates after this will be shown as disabled. Supports ISO 8601 format |
| opened | opened | Boolean | false | Is the dropdown part opened or not? |
| notTypeable | not-typeable | Boolean | false | Disable the typing a new date |
| firstDay | first-day | Number |  | Which day should be shown as the first day of the week. A number between 0-6 (0 = Sunday, 6 = Saturday) |
| helpTextMessages | help-text-messages | Array |  | Array of messages to pass to help-text component. See help-text component for more info |
| helpTextTitle | help-text-title | String |  | If you have more than one help text message , you should pass a title to it. See help-text component for more info |
| helpTextType | help-text-type | String |  | To change the help text icon and style if needed. See help-text component for more info |
| errorMessages | error-messages | Array |  | Error messages to show underneath of the input when it has error |
| errorTitle | error-title | String |  | Error title, if there are more than one error message |
| hasError | has-error | Boolean | false | If the text field has an error, to show error messages and change the style of the input |
| required | required | Boolean | false | To remove the deselect button and show the asterisk in the label. Not doing the validation, you should set the has-error and error messages yourself |

## ➤ Events

| Name        | Description                         | Payload        |
| ----------- | ----------------------------------- | -------------- |
| date-select | Emitted when user select a new date | {selectedDate} |

## ➤ How to use it

- Install the package of datePicker

```shell
$ npm i @tradeshift/elements.date-picker --save
```

- Import the component

```js
import '@tradeshift/elements.date-picker';
```

or

```html
<script src="node_modules/@tradeshift/elements.date-picker/lib/date-picker.umd.js"></script>
```

- Use it like [demo]("https://tradeshift.github.io/elements/?path=/story/ts-date-picker--default")

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
