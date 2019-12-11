import { keys, keyCodes } from './constants';

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

export const isEscapeEvent = event => {
	// Keycode for IE11
	return event.key === keys.ESCAPE || event.keyCode === keyCodes.ESCAPE;
};
