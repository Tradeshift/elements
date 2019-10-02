import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import '@tradeshift/elements.list-item';

import icons from '../../icon/src/assets/icons';

storiesOf('ts-list-item', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const selectable = boolean('selectable', true);
		const disabled = boolean('disabled', false);
		const selected = boolean('selected', false);
		const icon = select('icon', Object.keys(icons), Object.keys(icons)[0]);
		const iconRight = select('icon-right', Object.keys(icons), Object.keys(icons)[1]);
		const title = text('title', 'Title sample text');
		const subtitle = text('subtitle', 'Subtitle sample text');

		const dir = select(
			'dir',
			{
				ltr: 'ltr',
				rtl: 'rtl'
			},
			'ltr'
		);
		return html`
			<ts-list-item
				title=${title}
				subtitle="${subtitle}"
				?disabled="${disabled}"
				?selectable="${selectable}"
				?selected="${selected}"
				icon="${icon}"
				icon-right="${iconRight}"
				dir="${dir}"
			></ts-list-item>
		`;
	})
	.add('Menu', () => {
		const icon = select('icon', [undefined, ...Object.keys(icons)], Object.keys(icons)[5]);
		const iconRight = select('icon-right', Object.keys(icons), Object.keys(icons)[1]);
		const title = text('title', 'Title sample text');
		const subtitle = text('subtitle', 'Subtitle sample text');

		const dir = select(
			'dir',
			{
				ltr: 'ltr',
				rtl: 'rtl'
			},
			'ltr'
		);

		let items = [...Array(6).keys()];
		items = items.map(item => ({
			id: item
		}));
		items[2].selected = true;
		items[3].disabled = true;
		items[4].selected = true;
		items[5] = {
			...items[5],
			disabled: true,
			selected: true
		};

		function test(data) {
			const el = document.createElement('ts-list-item');
			el.title = `${title} ${data.id}`;
			el.subtitle = `${subtitle} ${data.id}`;
			el.icon = icon;
			el.iconRight = iconRight;
			el.dir = dir;
			el.disabled = boolean('disabled' + data.id, false);
			el.selectable = 'true';
			el.addEventListener('click', e => {
				if (!e.target.disabled) {
					e.target.selected = !e.target.selected;
				}
			});
			return el;
		}

		return html`
			<div class="menu" style="width: 360px">
				${items.map(
					item =>
						html`
							${test(item)}
						`
				)}
			</div>
		`;
	});
