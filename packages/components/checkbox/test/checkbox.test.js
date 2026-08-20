/* eslint-env mocha */
import { fixture, expect } from '@open-wc/testing';
import '../lib/checkbox.esm.js';

describe('ts-checkbox', () => {
	it('carries the provided value through to the inner input', async () => {
		const el = await fixture('<ts-checkbox value="accepted"></ts-checkbox>');
		const input = el.shadowRoot.querySelector('input');
		expect(input.value).to.equal('accepted');
	});

	it('does not render a literal "undefined" value when value is unset', async () => {
		const el = await fixture('<ts-checkbox></ts-checkbox>');
		const input = el.shadowRoot.querySelector('input');
		expect(input.value).to.equal('');
	});
});
