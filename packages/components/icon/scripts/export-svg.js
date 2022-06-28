const path = require('path');
const { EOL } = require('os');
const fs = require('fs').promises;
const { camelize } = require('../../../../scripts/helpers');

/**
 *  Read all svg files in an assets/icons directory and generate index.js file with ES module exports
 */
(async function () {
	const componentDir = path.join(process.cwd(), '/src/assets/icons');

	const files = await fs.readdir(componentDir);
	let moduleFileContent = '';
	let kebabCaseExport = 'export const iconList = [' + EOL;
	for (const file of files) {
		if (file.endsWith('.svg')) {
			const iconName = file.split('.')[0];
			// 'delete' is a reserved word in JS so we need to create an alias for this
			const camelizedName = iconName === 'delete' ? 'deleteIcon' : camelize(iconName);
			moduleFileContent += `export { default as ${camelizedName} } from './${file}';${EOL}`;
			kebabCaseExport += `\t'${iconName}',${EOL}`;
		}
	}

	kebabCaseExport += '];' + EOL;

	moduleFileContent += kebabCaseExport;

	const resultDir = path.join(process.cwd(), '/lib/assets/icons');
	await fs.mkdir(resultDir, { recursive: true });
	await fs.writeFile(`${resultDir}/index.js`, moduleFileContent);
})();
