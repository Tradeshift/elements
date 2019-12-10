import { storiesOf, html } from '@open-wc/demoing-storybook';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.note';

import { types } from '../src/utils';
import icons from '../../icon/src/assets/icons';

storiesOf('ts-note', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const type = select(
			'Type',
			{
				default: '',
				...helpers.objectKeysChangeCase(types)
			},
			null
		);

		const dir = boolean('RTL', false) ? 'rtl' : 'ltr';
		const icon = select('Icon', Object.keys(icons), Object.keys(icons)[0]);
		const hidden = boolean('Hidden', false);
		const content = text('Content', 'Sample text for note');

		return html`
			<ts-note type="${type}" dir="${dir}" icon="${icon}" ?hidden="${hidden}">
				${content}
			</ts-note>
		`;
	});
