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
