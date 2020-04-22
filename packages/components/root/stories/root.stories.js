import { html, storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.root';
import '@tradeshift/elements.header';

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
storiesOf('ts-root', module)
	.add('empty', () => createRoot())
	.add('header', () =>
		createRoot(
			() => html`
				${createElement(slots.header)}
			`
		)
	)
	.add('header + footer', () =>
		createRoot(
			() => html`
				${createElement(slots.header)} ${createElement(slots.footer)}
			`
		)
	)
	.add('header + footer + sidebar-left', () =>
		createRoot(
			() => html`
				${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-left'])}
			`
		)
	)
	.add('header + footer + sidebar-right', () =>
		createRoot(
			() => html`
				${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-right'])}
			`
		)
	)
	.add('header + footer + sidebar-inner-left', () =>
		createRoot(
			() => html`
				${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-inner-left'])}
			`
		)
	)
	.add('header + footer + sidebar-inner-right', () =>
		createRoot(
			() => html`
				${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-inner-right'])}
			`
		)
	)

	.add('header + footer + sidebar-left + sidebar-right + sidebar-inner-left + sidebar-inner-right', () =>
		createRoot(
			() => html`
				${createElement(slots.header)} ${createElement(slots.footer)} ${createElement(slots['sidebar-left'])}
				${createElement(slots['sidebar-right'])} ${createElement(slots['sidebar-inner-left'])}
				${createElement(slots['sidebar-inner-right'])}
			`
		)
	);

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
			return html`
				<ts-header slot=${slot} class=${slot} color="blue" title="${slot}"></ts-header>
			`;
		case 'footer':
			return html`
				<footer slot=${slot} class=${slot} style=${style}>${slot}</footer>
			`;
		default:
			return html`
				<section slot=${slot} class=${slot} style=${style}>${slot}</section>
			`;
	}
}
