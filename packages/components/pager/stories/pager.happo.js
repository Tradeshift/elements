import { html } from 'lit-html';
import '../lib/pager.esm';

export default {
	title: 'ts-pager'
};

export const Test = () => {
	return html`
		<ts-pager per-page="20" total-pages="10"></ts-pager>
		<ts-pager per-page="20" total-pages="10" active-page="5"></ts-pager>
		<ts-pager per-page="40" total-pages="10" active-page="1"></ts-pager>
		<ts-pager per-page="20" total-pages="14000" active-page="14000"></ts-pager>
		<ts-pager
			per-page="10"
			total-pages="14000"
			active-page="14000"
			dir="rtl"
			translations='{"page": "side", "of": "af", "items_per_page": "varer pr. side"}'
		></ts-pager>
	`;
};
