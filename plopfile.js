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
			}
		],

		actions: [
			// Add component's js file
			{
				type: 'add',
				path: `${componentsPath}/{{kebabCase name}}/src/{{kebabCase name}}.js`,
				templateFile: `${templatesPath}/components/src/component.js`
			},
			// Add component's css file
			{
				type: 'add',
				path: `${componentsPath}/{{kebabCase name}}/src/{{kebabCase name}}.css`,
				templateFile: `${templatesPath}/components/src/component.css`
			},
			// Add component's package.json file
			{
				type: 'add',
				path: `${componentsPath}/{{kebabCase name}}/package.json`,
				templateFile: `${templatesPath}/components/package.json`
			},
			// Add component's stories file
			{
				type: 'add',
				path: `${componentsPath}/{{kebabCase name}}/stories/{{kebabCase name}}.stories.js`,
				templateFile: `${templatesPath}/components/stories/component.stories.js`
			}
		]
	});
};
