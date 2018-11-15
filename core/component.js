export const Base = (SuperElement = HTMLElement, name = 'Base') =>
	class extends SuperElement {
		constructor() {
			super(...arguments);
			this.name = name;
		}
		connectedCallback() {
			if (this.isConnected) {
				this.classes();
			}
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
			this.attachShadow({mode: 'open'})
				.appendChild(template.content.cloneNode(true));
		}
	};
