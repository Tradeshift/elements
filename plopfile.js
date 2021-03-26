const fs = require('fs');
const getReadmeData = require('./scripts/get-readme-template-data');
const packagesPath = 'packages';
const componentsPath = `${packagesPath}/components`;
const templatesPath = 'plop-templates';

module.exports = plop => {
	// We declare a new generator
	plop.setGenerator('component', {
		// Describes what generator does.
		description: 'Create a new component',

		// Get inputs from the user.
		// That's Inquirer.js doing the job behind the hood.
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?'
			},
			{
				type: 'input',
				name: 'version',
				message: 'version?',
				default() {
					const lernaData = JSON.parse(fs.readFileSync('./lerna.json', 'utf8'));
					return lernaData.version;
				}
			}
		],

		actions: [
			{
				type: 'addMany',
				destination: `${componentsPath}`,
				base: `${templatesPath}/components`,
				templateFiles: `${templatesPath}/components/**`,
				data() {
					const lernaData = JSON.parse(fs.readFileSync('./lerna.json', 'utf8'));
					return {
						version: lernaData.version
					};
				}
			}
		]
	});

	plop.setGenerator('readme', {
		description: 'Generate README.md files',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the component name?'
			}
		],

		actions: function(data) {
			return [
				{
					type: 'add',
					force: true,
					path: `${componentsPath}/{{kebabCase name}}/README.md`,
					templateFile: `${templatesPath}/readme/README.md`,
					data: () => getReadmeData(data.name)
				}
			];
		}
	});
};
