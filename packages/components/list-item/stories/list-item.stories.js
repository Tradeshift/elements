import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import '@tradeshift/elements.list-item';
import '@tradeshift/elements.app-icon';

import icons from '../../icon/src/assets/icons';
import appIcon from '../../../../static/icon.svg';
import readme from '../README.md';

storiesOf('ts-list-item', module)
	.addDecorator(withKnobs)
	.add(
		'default',
		() => {
			const selectable = boolean('selectable', true);
			const disabled = boolean('disabled', false);
			const selected = boolean('selected', false);
			const noWrap = boolean('no-wrap', false);
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
					?no-wrap="${noWrap}"
					icon="${icon}"
					icon-right="${iconRight}"
					dir="${dir}"
				></ts-list-item>
			`;
		},
		{ notes: readme }
	)
	.add(
		'with custom icon',
		() => {
			const selectable = boolean('selectable', true);
			const disabled = boolean('disabled', false);
			const selected = boolean('selected', false);
			const noWrap = boolean('no-wrap', false);
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
					?no-wrap="${noWrap}"
					dir="${dir}"
				>
					<ts-app-icon slot="icon-left" src=${appIcon}></ts-app-icon>
				</ts-list-item>
			`;
		},
		{ notes: readme }
	)
	.add(
		'without icons',
		() => {
			const selectable = boolean('selectable', true);
			const disabled = boolean('disabled', false);
			const selected = boolean('selected', false);
			const noWrap = boolean('no-wrap', false);
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
					?no-wrap="${noWrap}"
					dir="${dir}"
				>
				</ts-list-item>
			`;
		},
		{ notes: readme }
	)
	.add(
		'Menu',
		() => {
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
			items[4].title = text('title', 'List item without no-wrap');
			items[4].subtitle = text('subtitle', 'This text will be displayed on 2 lines because no-wrap is not set on it');
			items[5] = {
				...items[5],
				disabled: true,
				selected: true
			};
			items[5].title = text('title', 'List item with no-wrap');
			items[5].subtitle = text('subtitle', 'This text should be cutt off soon because there is not enough space');
			items[5].noWrap = true;

			function test(data) {
				const el = document.createElement('ts-list-item');
				el.title = `${data.title || title} ${data.id}`;
				el.subtitle = `${data.subtitle || subtitle} ${data.id}`;
				el.icon = icon;
				el.iconRight = iconRight;
				el.dir = dir;
				el.disabled = boolean('disabled' + data.id, false);
				el.selectable = 'true';
				data.noWrap && el.setAttribute('no-wrap', data.noWrap);
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
		},
		{ notes: readme }
	);
