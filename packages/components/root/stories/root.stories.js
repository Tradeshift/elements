import { html } from 'lit-html';
import '@tradeshift/elements.header';
import '../lib/root.esm';

const slots = {
	header: { slot: 'header', height: '60px', background: '#00AEFF' },
	footer: { slot: 'footer', height: '60px', background: '#9AB2BC' },
	'sidebar-left': {
		slot: 'sidebar-left',
		height: 'auto',
		width: '320px',
		background: '#50C610'
	},
	'sidebar-right': {
		slot: 'sidebar-right',
		height: 'auto',
		width: '320px',
		background: '#FDBE12'
	},
	'sidebar-inner-left': {
		slot: 'sidebar-inner-left',
		height: 'auto',
		width: '320px',
		background: '#A70262'
	},
	'sidebar-inner-right': {
		slot: 'sidebar-inner-right',
		height: 'auto',
		width: '320px',
		background: '#90129B'
	}
};

export default {
	title: 'ts-root'
};

export const Empty = () => createRoot();

Empty.story = {
	name: 'empty'
};

export const Header = () => createRoot(() => html` ${createElement(slots.header)} `);

Header.story = {
	name: 'header'
};

export const HeaderFooter = () =>
	createRoot(() => html` ${createElement(slots.header)} ${createElement(slots.footer)} `);

HeaderFooter.story = {
	name: 'header + footer'
};

export const HeaderFooterSidebarLeft = () =>
	createRoot(
		() => html` ${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-left'])} `
	);

HeaderFooterSidebarLeft.story = {
	name: 'header + footer + sidebar-left'
};

export const HeaderFooterSidebarRight = () =>
	createRoot(
		() => html` ${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-right'])} `
	);

HeaderFooterSidebarRight.story = {
	name: 'header + footer + sidebar-right'
};

export const HeaderFooterSidebarInnerLeft = () =>
	createRoot(
		() => html`
			${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-inner-left'])}
		`
	);

HeaderFooterSidebarInnerLeft.story = {
	name: 'header + footer + sidebar-inner-left'
};

export const HeaderFooterSidebarInnerRight = () =>
	createRoot(
		() => html`
			${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-inner-right'])}
		`
	);

HeaderFooterSidebarInnerRight.story = {
	name: 'header + footer + sidebar-inner-right'
};

export const HeaderFooterSidebarLeftSidebarRightSidebarInnerLeftSidebarInnerRight = () =>
	createRoot(
		() => html`
			${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-left'])}
			${createElement(slots['sidebar-right'])} ${createElement(slots['sidebar-inner-left'])}
			${createElement(slots['sidebar-inner-right'])}
		`
	);

HeaderFooterSidebarLeftSidebarRightSidebarInnerLeftSidebarInnerRight.story = {
	name: 'header + footer + sidebar-left + sidebar-right + sidebar-inner-left + sidebar-inner-right'
};

function createRoot(inner = () => html``) {
	return html`
		<style>
			body {
				margin: 0;
			}
		</style>
		<ts-root>
			${inner()}
			<section>content</section>
		</ts-root>
	`;
}

function createElement({ slot, height, background, width }) {
	const style = `height: ${height}; background: ${background}; ${width ? `width: ${width};` : ''}`;
	switch (slot) {
		case 'header':
			return html` <ts-header slot=${slot} class=${slot} color="blue" title="${slot}"></ts-header> `;
		case 'footer':
			return html` <footer slot=${slot} class=${slot} style=${style}>${slot}</footer> `;
		default:
			return html` <section slot=${slot} class=${slot} style=${style}>${slot}</section> `;
	}
}
