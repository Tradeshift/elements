import { storiesOf } from '@storybook/polymer';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@tradeshift/elements';
import '@tradeshift/elements.root';
import { html } from 'lit-html';

storiesOf('Root', module)
	.addDecorator(withKnobs)
	.add('Layout', () => {
		const headerLable = 'Header?';
		const headerDefaultValue = false;
		const header = boolean(headerLable, headerDefaultValue);

		const footerLable = 'Footer?';
		const footerDefaultValue = false;
		const footer = boolean(footerLable, footerDefaultValue);

		const sidebarLeftLable = 'Sidebar-Left?';
		const sidebarLeftDefaultValue = false;
		const sidebarLeft = boolean(sidebarLeftLable, sidebarLeftDefaultValue);

		const sidebarRightLable = 'Sidebar-Right?';
		const sidebarRightDefaultValue = false;
		const sidebarRight = boolean(sidebarRightLable, sidebarRightDefaultValue);

		const sidebarInnerLeftLable = 'Sidebar-Inner-Left?';
		const sidebarInnerLeftDefaultValue = false;
		const sidebarInnerLeft = boolean(
			sidebarInnerLeftLable,
			sidebarInnerLeftDefaultValue
		);

		const sidebarInnerRightLable = 'Sidebar-Inner-Right?';
		const sidebarInnerRightDefaultValue = false;
		const sidebarInnerRight = boolean(
			sidebarInnerRightLable,
			sidebarInnerRightDefaultValue
		);

		const root = createRoot();
		if (header) {
			enableSlot('header');
		} else {
			disableSlot('header');
		}
		if (footer) {
			enableSlot('footer');
		} else {
			disableSlot('footer');
		}
		if (sidebarLeft) {
			enableSlot('sidebar-left');
		} else {
			disableSlot('sidebar-left');
		}
		if (sidebarRight) {
			enableSlot('sidebar-right');
		} else {
			disableSlot('sidebar-right');
		}
		if (sidebarInnerLeft) {
			enableSlot('sidebar-inner-left');
		} else {
			disableSlot('sidebar-inner-left');
		}
		if (sidebarInnerRight) {
			enableSlot('sidebar-inner-right');
		} else {
			disableSlot('sidebar-inner-right');
		}
		return root;
	});

function createRoot() {
	return html`
		<ts-root style="display: block; width: 100%; height: 100%;">
			<header
				slot="!header"
				style="height:60px;background:#00AEFF"
				class="header"
			>
				Header
			</header>
			<footer
				slot="!footer"
				style="height:60px;background:#9AB2BC"
				class="footer"
			>
				Footer
			</footer>
			<section
				slot="!sidebar-left"
				style="height:auto;width:320px;background:#50C610"
				class="sidebar-left"
			>
				Left Sidebar
			</section>
			<section
				slot="!sidebar-right"
				style="height:auto;width:320px;background:#FDBE12"
				class="sidebar-right"
			>
				Right Sidebar
			</section>
			<section
				slot="!sidebar-inner-left"
				style="height:auto;width:320px;background:#A70262"
				class="sidebar-inner-left"
			>
				Inner Left Sidebar
			</section>
			<section
				slot="!sidebar-inner-right"
				style="height:auto;width:320px;background:#90129B"
				class="sidebar-inner-right"
			>
				Inner Right Sidebar
			</section>
		</ts-root>
	`;
}

function enableSlot(name) {
	var disabledSlot = document.querySelector('[slot="!' + name + '"]');
	if (disabledSlot) {
		return disabledSlot.setAttribute('slot', name);
	}
}

function disableSlot(name) {
	var enabledSlot = document.querySelector('[slot=' + name + ']');
	if (enabledSlot) {
		return enabledSlot.setAttribute('slot', '!' + name);
	}
}
