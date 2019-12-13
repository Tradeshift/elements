import { keyboardEventKeys, keyboardEventKeyCodes } from './constants';

export const classNamesToSelector = classNamesObject => {
	const selectors = {};

	Object.keys(classNamesObject).forEach(name => {
		selectors[name] = `.${classNamesObject[name]}`;
	});
	return selectors;
};

export const objectKeysChangeCase = (object, toNewCase = 'toLowerCase') =>
	Object.keys(object).reduce((accumulator, currentKey) => {
		const changedCaseKey = currentKey[toNewCase]();
		accumulator[changedCaseKey] = object[currentKey];
		return accumulator;
	}, {});

export const debounceEvent = (callback, wait) => {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => callback.apply(this, args), wait);
	};
};

// Keycode check for IE11
export const isEscapeKeyEvent = event =>
	event.key === keyboardEventKeys.ESCAPE || event.keyCode === keyboardEventKeyCodes.ESCAPE;
