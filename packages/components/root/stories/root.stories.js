import { storiesOf } from '@storybook/html';
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
storiesOf('ts-root', module)
	.add('empty', () => {
		const root = createRoot();
		return root;
	})
	.add('header', () => {
		const root = createRoot();

		createElement(slots.header, root);
		return root;
	})
	.add('header + footer', () => {
		const root = createRoot();

		createElement(slots.header, root);
		createElement(slots.footer, root);

		return root;
	})
	.add('header + footer + sidebar-left', () => {
		const root = createRoot();

		createElement(slots.header, root);
		createElement(slots.footer, root);
		createElement(slots['sidebar-left'], root);

		return root;
	})
	.add('header + footer + sidebar-right', () => {
		const root = createRoot();

		createElement(slots.header, root);
		createElement(slots.footer, root);
		createElement(slots['sidebar-right'], root);

		return root;
	})
	.add('header + footer + sidebar-inner-left', () => {
		const root = createRoot();

		createElement(slots.header, root);
		createElement(slots.footer, root);
		createElement(slots['sidebar-inner-left'], root);

		return root;
	})
	.add('header + footer + sidebar-inner-right', () => {
		const root = createRoot();

		createElement(slots.header, root);
		createElement(slots.footer, root);
		createElement(slots['sidebar-inner-right'], root);

		return root;
	})

	.add(
		'header + footer + sidebar-left + sidebar-right + sidebar-inner-left + sidebar-inner-right',
		() => {
			const root = createRoot();

			createElement(slots.header, root);
			createElement(slots.footer, root);
			createElement(slots['sidebar-left'], root);
			createElement(slots['sidebar-right'], root);
			createElement(slots['sidebar-inner-left'], root);
			createElement(slots['sidebar-inner-right'], root);

			return root;
		}
	);

function createRoot() {
	const root = document.createElement('ts-root');
	root.innerHTML = 'Content';
	root.setAttribute('style', 'display: block; width: 100%; height: 100%;');
	return root;
}

function createElement({ slot, height, background, width }, root) {
	const tag = ['header', 'footer'].includes(slot) ? slot : 'div';
	const element = document.createElement(tag);
	element.innerHTML = slot;
	element.setAttribute('slot', slot);
	element.setAttribute('class', slot);
	element.setAttribute(
		'style',
		`height: ${height}; background: ${background}; ${
			width ? `width: ${width};` : ''
		}`
	);
	root.appendChild(element);
}
