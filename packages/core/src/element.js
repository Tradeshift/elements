import extenders from './extends';
import commonStyles from './common.css';

export const TSElement = (name = 'Base', SuperElement = 'HTMLElement') => {
	const SuperClass = extenders[SuperElement] || extenders.HTMLElement;
	return class extends SuperClass {
		constructor() {
			super();
			this.name = name;
			this.attachShadow({ mode: 'open' });
		}
		connectedCallback() {
			if (this.isConnected) {
				this.classes();
			}
		}
		attributeChangedCallback(name, oldValue, newValue) {
			this[name] = newValue;
		}
		template(html, $template) {
			this[$template] = document.createElement('template');
			this[$template].innerHTML = html;
			this.shadowRoot.appendChild(this[$template].content.cloneNode(true));
		}
		classes() {
			this.classList.add(
				'ts-component',
				`ts-${this.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`
			);
		}
		styles(stylesheet) {
			const template = document.createElement('template');
			/**
			 * @TODO Inject `commonStyles` somewhere, so it's only loaded once for cloning
			 */
			template.innerHTML = `
				<style>
					${commonStyles}
					${stylesheet}
				</style>
				<script> </script>
			`;
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	};
};
