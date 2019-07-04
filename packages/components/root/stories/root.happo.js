import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.root';

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
storiesOf('ts-root', module).add(
	'header + footer + sidebar-left + sidebar-right + sidebar-inner-left + sidebar-inner-right',
	() =>
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
			<section>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aspernatur dicta expedita, illum in magni
				nam nobis quae quam qui tempora vel voluptatem. Error hic optio quibusdam rem ullam?
			</section>
		</ts-root>
	`;
}

function createElement({ slot, height, background, width }) {
	const style = `height: ${height}; background: ${background}; ${width ? `width: ${width};` : ''}`;
	switch (slot) {
		case 'header':
			return html`
				<header slot=${slot} class=${slot} style=${style}>${slot}</header>
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
