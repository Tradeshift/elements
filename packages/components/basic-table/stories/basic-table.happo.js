import { storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.basic-table';

import { createHappoStories } from '../../../../.storybook-happo/utils';

storiesOf('ts-basic-table', module).add('test', () => {
	const properties = {
		selectedIds: { selectedIds: [1] },
		dir: { rtl: 'rtl' }
	};

	const options = {
		persistent_props: {
			cols: [
				{
					property: 'context',
					size: 'large',
					value: 'Context',
					renderFunction(item, row) {
						const card = document.createElement('ts-document-card');
						card.name = item.name;
						card.description = item.description;
						card.mobileDescription = item.mobileDescription;
						card.selected = row.mobileLastActivity.unread > 0;
						card.type = item.type;
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
			],
			data: [
				{
					context: {
						name: 'Invoice #32131',
						description: 'Tradeshift',
						mobileDescription: 'Tradeshift | 5 participants',
						type: 'document'
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
					context: {
						name: 'Purchase Request #1231',
						description: 'MegaImage',
						mobileDescription: 'MegaImage',
						type: 'offer'
					},
					type: { status: 'error', text: 'Private' },
					participants: 100,
					newActivity:
						'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
					lastActivity: '29 Jul, 15:01',
					mobileLastActivity: { unread: 0, lastActivity: '29 Jul, 15:01' },
					id: 2
				},
				{
					context: {
						name: 'GoodsReceipt #231',
						description: 'CocaCola',
						mobileDescription: '5 participants',
						type: 'private'
					},
					type: { status: 'note', text: 'Internal' },
					participants: 100,
					newActivity:
						'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
					lastActivity: '2 Aug, 15:01',
					mobileLastActivity: { lastActivity: '2 Aug, 15:01' },
					id: 3
				},
				{
					context: {
						name: 'GoodsReceipt #231',
						description: 'CocaCola',
						mobileDescription: '5 participants',
						type: 'marketplace'
					},
					type: { status: 'note', text: 'Internal' },
					participants: 100,
					newActivity:
						'Every little bunny has a habit that is funny. It doesnt matter where he goes he always wrinkles up his nose.',
					lastActivity: '2 Aug, 15:01',
					mobileLastActivity: { lastActivity: '2 Aug, 15:01' },
					id: 4
				}
			]
		}
	};

	return createHappoStories('basic-table', properties, '', options);
});
