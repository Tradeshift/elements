import { storiesOf, html, select, text, array } from '@open-wc/demoing-storybook';
import { withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.table';
import readme from '../README.md';

/**
 * Decodes the string with encoded html characters.
 * @param {string} input
 */
function htmlDecode(input) {
	const e = document.createElement('textarea');
	e.innerHTML = input;
	// handle case of empty input
	return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
}

storiesOf('ts-table', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const columnsDefaultConfig = JSON.stringify([
				{
					property: 'name',
					size: 'large',
					value: 'Context'
				},
				{
					visibility: 'desktop-only',
					property: 'type',
					size: 'small',
					value: 'Type',
					display: 'left'
				},
				{ visibility: 'desktop-only', property: 'participants', size: 'small', value: 'Participants' },
				{
					visibility: 'desktop-only',
					property: 'newActivity',
					value: 'New Activity'
				},
				{
					visibility: 'desktop-only',
					property: 'lastActivity',
					value: 'Last Activity',
					size: 'medium',
					display: 'right'
				},
				{
					visibility: 'mobile-only',
					property: 'unread',
					size: 'small',
					display: 'right'
				}
			]);
			const defaultData = JSON.stringify([
				{
					name: 'Invoice #32131',
					type: 'ok',
					participants: 100,
					newActivity:
						'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
					lastActivity: 'Yesterday, 15:01',
					unread: 10,
					id: 1
				},
				{
					name: 'Purchase Request #1231',
					type: 'error',
					participants: 100,
					newActivity:
						"Every little bunny has a habit that is funny. It doesn't matter where he goes he always wrinkles up his nose.",
					lastActivity: '29 Jul, 15:01',
					unread: 0,
					id: 2
				},
				{
					name: 'GoodsReceipt #231',
					type: 'note',
					participants: 100,
					newActivity:
						'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
					lastActivity: '2 Aug, 15:01',
					unread: 0,
					id: 3
				}
			]);

			const columns = JSON.parse(htmlDecode(text('columns', columnsDefaultConfig)));
			const data = JSON.parse(htmlDecode(text('data', defaultData)));
			const dir = select(
				'dir',
				{
					ltr: 'ltr',
					rtl: 'rtl'
				},
				'ltr'
			);
			const selectedIds = array('selectedIds', [1]).map(item => parseInt(item, 10));
			return html`
				<ts-table .cols="${columns}" .data="${data}" dir="${dir}" .selectedIds="${selectedIds}"> </ts-table>
			`;
		},
		{ notes: readme }
	)
	.add('custom render cells', () => {
		const cols = [
			{
				property: 'context',
				size: 'large',
				value: 'Context',
				renderFunction(item) {
					const card = document.createElement('ts-document-card');
					card.name = item.name;
					card.description = item.description;
					card.mobileDescription = item.mobileDescription;
					return card;
				}
			},
			{
				visibility: 'desktop-only',
				property: 'type',
				size: 'small',
				value: 'Type',
				display: 'left',
				renderFunction(item) {
					const div = document.createElement('div');
					div.style.display = 'flex';
					div.style.justifyContent = 'flex-start';
					const status = document.createElement('ts-status');
					status.status = item.status;
					status.text = item.text;
					div.appendChild(status);
					return div;
				}
			},
			{ visibility: 'desktop-only', property: 'participants', size: 'small', value: 'Participants' },
			{
				visibility: 'desktop-only',
				property: 'newActivity',
				value: 'New Activity',
				renderFunction(item, row) {
					const div = document.createElement('div');
					div.innerText = item;
					if (row.mobileLastActivity.unread > 0) {
						div.style.fontWeight = '700';
					}
					return div;
				}
			},
			{
				visibility: 'desktop-only',
				property: 'lastActivity',
				value: 'Last Activity',
				size: 'medium',
				display: 'right'
			},
			{
				visibility: 'mobile-only',
				property: 'mobileLastActivity',
				size: 'small',
				display: 'right',
				renderFunction(item) {
					const div = document.createElement('div');
					div.style.padding = '10px';
					div.style.whiteSpace = 'nowrap';
					if (item.unread && item.unread > 0) {
						const child = document.createElement('div');
						child.innerText = item.unread;
						child.style.backgroundColor = '#01b0ff';
						child.style.borderRadius = '3px';
						child.style.color = 'white';
						child.style.padding = '5px';
						child.style.fontSize = '11px';
						child.style.fontWeight = '600';
						div.style.display = 'flex';
						div.style.alignItems = 'center';
						div.appendChild(child);
					} else {
						div.innerText = item.lastActivity;
					}
					return div;
				}
			}
		];
		const data = [
			{
				context: {
					name: 'Invoice #32131',
					description: 'Tradeshift',
					mobileDescription: 'Tradeshift | 5 participants'
				},
				type: { status: 'ok', text: 'External' },
				participants: 100,
				newActivity:
					'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
				lastActivity: 'Yesterday, 15:01',
				mobileLastActivity: { unread: 10, lastActivity: 'Yesterday, 15:01' },
				id: 1
			},
			{
				context: { name: 'Purchase Request #1231', description: 'MegaImage', mobileDescription: 'MegaImage' },
				type: { status: 'error', text: 'Private' },
				participants: 100,
				newActivity:
					'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
				lastActivity: '29 Jul, 15:01',
				mobileLastActivity: { unread: 0, lastActivity: '29 Jul, 15:01' },
				id: 2
			},
			{
				context: { name: 'GoodsReceipt #231', description: 'CocaCola', mobileDescription: '5 participants' },
				type: { status: 'note', text: 'Internal' },
				participants: 100,
				newActivity:
					'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
				lastActivity: '2 Aug, 15:01',
				mobileLastActivity: { lastActivity: '2 Aug, 15:01' },
				id: 3
			}
		];

		const selectedIds = array('selectedIds', [1]).map(item => parseInt(item, 10));

		const dir = select(
			'dir',
			{
				ltr: 'ltr',
				rtl: 'rtl'
			},
			'ltr'
		);

		return html`
			<ts-table .cols="${cols}" .data="${data}" dir="${dir}" .selectedIds="${selectedIds}"> </ts-table>
		`;
	});
