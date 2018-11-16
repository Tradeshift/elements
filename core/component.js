export const Base = (SuperElement = HTMLElement, name = 'Base') =>
	class extends SuperElement {
		constructor(...args) {
			const self = super(...args);
			this.name = name;
			this.attachShadow({mode: 'open'});
			return self;
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
				`ts-${this.name.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase()}`
			);
		}
		styles(stylesheet) {
			const template = document.createElement('template');
			template.innerHTML = `
				<style>
					:host {
						display: none;
					}
				</style>
				<link rel="stylesheet" href="/core/common.css">
				<link rel="stylesheet" href="${stylesheet}">
				<script> </script>
			`;
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	};
