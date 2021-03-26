const fs = require('fs').promises;
const path = require('path');
const { getComponentNames } = require('../helpers');
const xa = require('xa');
const componentsPath = './packages/components';

const readmeSectionSeparator = '## ➤';

module.exports = function() {
	getComponentNames().forEach(async function(componentName) {
		xa.info('Started reading ' + componentName);

		const componentDirectory = path.join(process.cwd(), `${componentsPath}/${componentName}`);
		try {
			const data = await fs.readFile(`${componentDirectory}/README.md`, 'utf8');

			let propsTable = data.split(`${readmeSectionSeparator} Properties`);

			if (propsTable.length === 1) {
				xa.warning(componentName, 'No properties table found!');
			} else {
				const tableRaw = propsTable[1].trim().split(readmeSectionSeparator)[0];
				const tableHeaderContent = tableRaw.split('|\n| --'); // Markdown start of table header separator

				// Get list of table headers
				const tableHeaders = tableHeaderContent[0].split('|');
				tableHeaders.shift();
				const tableHeaderCols = tableHeaders.map(header => header.trim());

				const tableContent = tableHeaderContent[1].split('-- |\n')[1]; // Markdown end of table header separator
				let tableRowsData = tableContent.split('|\n');

				const trimmedTableRowsData = tableRowsData.reduce(function(accum, current) {
					const values = current.split('|');
					values.shift();
					const trimmed = values.map(value => value.trim());
					if (trimmed.length) {
						accum.push(trimmed);
					}
					return accum;
				}, []);

				const result = trimmedTableRowsData.map(row => {
					const rowObj = {};
					row.forEach((col, index) => (rowObj[tableHeaderCols[index]] = col));
					return rowObj;
				});

				writeToFile(componentName, result);
			}
		} catch (e) {
			xa.error(e);
		}
	});
};

async function writeToFile(componentName, outObject) {
	const componentDirectory = path.join(process.cwd(), `${componentsPath}/${componentName}`);
	try {
		await fs.mkdir(`${componentDirectory}/docs/readme`, { recursive: true });
		await fs.writeFile(`${componentDirectory}/docs/readme/properties.json`, JSON.stringify(outObject, null, 4));
		xa.success('Generated readme src files: ' + componentName);
	} catch (e) {
		xa.error('Problem with writing to file' + e);
	}
}
