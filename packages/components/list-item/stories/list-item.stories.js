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
	});
