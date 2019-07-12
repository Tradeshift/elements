import { html } from '@open-wc/demoing-storybook';

/**** Happo storybook helpers ****/

// Create component with the defined attributes and content
// Reason: lit-html doesn't support dynamic attribute name or tag name
export const createComponent = (componentName, content, attrs, noPrefix = false) => {
	const prefix = noPrefix ? '' : 'ts-';
	const element = document.createElement(`${prefix}${componentName}`);
	Object.keys(attrs).forEach(attrKey => {
		const att = typeof attrs[attrKey] !== 'string' ? JSON.stringify(attrs[attrKey]).replace(/"/g, '\"') : attrs[attrKey];
		element.setAttribute(attrKey, att);
	});
	element.innerHTML = content;
	return element;
};

export const createComponentTemplates = (componentName, properties, content = '', persistent_props = {}) => {
	const templates = [];
	// list of properties that are in the templates
	const doneProperties = [];
	const propKeys = Object.keys(properties);

	propKeys.forEach(propKey => {
		doneProperties.push(propKey);
		const propTemplates = [];

		// Go through all the available option for the props
		Object.keys(properties[propKey]).forEach(key => {
			const propHeader = key;
			const headerComponent = createComponent(
				'div',
				propHeader,
				{ style: 'text-transform: uppercase; box-shadow: 0 -1px 0 0 lightgray;' },
				true
			);

			const attrs = {
				...persistent_props,
				[propKey]: properties[propKey][key]
			};
			// Create the component to test component with the prop separately
			const element = createComponent(componentName, content, attrs);
			propTemplates.push(headerComponent);
			propTemplates.push(element);

			// Add components with mixed props
			propKeys.forEach(otherPropKey => {
				// Only create mixed props elements with other properties
				if (!doneProperties.includes(otherPropKey)) {
					Object.keys(properties[otherPropKey]).forEach(otherKey => {
						const headerContent = `${propHeader} + ${otherPropKey}: ${otherKey}`;
						const headerComponent = createComponent(
							'div',
							headerContent,
							{ style: 'box-shadow: 0 -1px 0 0 lightgray;' },
							true
						);

						const mixedElementAttrs = {
							...persistent_props,
							...attrs,
							[otherPropKey]: properties[otherPropKey][otherKey]
						};
						const mixedElement = createComponent(componentName, content, mixedElementAttrs);
						propTemplates.push(headerComponent);
						propTemplates.push(mixedElement);
					});
				}
			});
		});

		templates.push({
			prop: propKey,
			templates: propTemplates
		});
	});

	return templates;
};

// Generate the story for happo js by iterating through all provided properties
// and add a template for each property and all possible combinations
export const createHappoStories = (componentName, properties, content = '', options = { columns: 1 }) => {
	const { columns, persistent_props } = options;
	const componentTemplates = createComponentTemplates(componentName, properties, content, persistent_props);
	return html`
		<div class="container" style="display: flex; flex-wrap: wrap; width: 100%;">
			${componentTemplates.map(
				item => html`
					<div class="column" style="width: calc(${100 / columns}% - 10px); padding: 5px;">
						<div>
							<i><b style="text-transform:uppercase">${item.prop}</b></i>
						</div>
						${item.templates.map(
							(propTemplate, index) => html`
								${propTemplate}
								${index % 2
									? html`
											<div style="margin-bottom: 5px"></div>
									  `
									: ''}
							`
						)}
					</div>
				`
			)}
		</div>
	`;
};
