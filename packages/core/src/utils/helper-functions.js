export const classNamesToSelector = classNamesObject => {
	const selectors = {};

	Object.keys(classNamesObject).forEach(name => {
		selectors[name] = `.${classNamesObject[name]}`;
	});
	return selectors;
};
