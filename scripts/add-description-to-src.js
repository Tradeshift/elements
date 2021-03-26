const path = require('path');
const fs = require('fs').promises;
const { getComponentNames, constants, compStateLogger } = require('./helpers');

/**
 *  Read description from docs/properties and add it to the src file
 *  Single time script to update the src file with all available description in README files
 */
(async function() {
	// read the data from the readme properties
	// get the component names
	const componentNames = getComponentNames();
	for (const compName of componentNames) {
		// get the component readme properties
		compStateLogger(compName, 'Reading readme/properties.json ...');
		const componentDir = path.join(process.cwd(), `${constants.componentsPath}/${compName}`);
		const readmeProps = await fs.readFile(`${componentDir}/docs/readme/properties.json`, 'utf8');
		const properties = JSON.parse(readmeProps);

		const srcFilePath = `${componentDir}/src/${compName}.js`;
		// read the src file
		compStateLogger(compName, 'Reading src file...');
		let srcFileContent = await fs.readFile(srcFilePath, 'utf8');

		// create the description text
		properties.map(async property => {
			if (property.Description) {
				console.log('property.Description', property.Description);
				property.DescriptionJSDOC = `/** ${property.Description} */\n\t\t\t`;

				if (!srcFileContent.includes(`*/\n\t\t\t${property.Property}: {`)) {
					// find the right place to add the description
					const indexOfPropDef = srcFileContent.indexOf(`${property.Property}: {`);
					// concat the description text to the src file
					srcFileContent =
						srcFileContent.substring(0, indexOfPropDef) +
						property.DescriptionJSDOC +
						srcFileContent.substring(indexOfPropDef);
				}
			}
			return property;
		});

		await fs.writeFile(srcFilePath, srcFileContent);
		compStateLogger(compName, 'Added description jsdoc to src file.');
	}
})();
