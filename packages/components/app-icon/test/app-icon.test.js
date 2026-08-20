/* eslint-env mocha */
import { fixture, expect } from '@open-wc/testing';
import '../lib/app-icon.esm.js';

describe('ts-app-icon', () => {
	it('renders src/alt onto the inner img when set', async () => {
		const el = await fixture('<ts-app-icon src="https://example.com/icon.svg" alt="Example"></ts-app-icon>');
		const img = el.shadowRoot.querySelector('img');
		expect(img.getAttribute('src')).to.equal('https://example.com/icon.svg');
		expect(img.getAttribute('alt')).to.equal('Example');
	});

	it('does not render a literal "undefined" src/alt when unset', async () => {
		const el = await fixture('<ts-app-icon></ts-app-icon>');
		const img = el.shadowRoot.querySelector('img');
		expect(img.hasAttribute('src')).to.equal(false);
		expect(img.hasAttribute('alt')).to.equal(false);
	});
});
