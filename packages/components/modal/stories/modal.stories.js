import { html, storiesOf } from '@open-wc/demoing-storybook';
import { boolean, radios, select, text, withKnobs } from '@storybook/addon-knobs';
import { helpers } from '@tradeshift/elements';
import '@tradeshift/elements.modal';
import '@tradeshift/elements.card';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';
import '@tradeshift/elements.note';

import { sizes } from '../src/utils';
import readme from '../README.md';

const cardsArray = [];
for (let i = 0; i < 20; i++) {
	cardsArray.push(
		html`
			<ts-card>App # ${i + 1}</ts-card>
		`
	);
}

const footer = html`
	<ts-button-group slot="footer">
		<ts-button type="primary">Button</ts-button>
		<ts-button type="secondary">Button 2</ts-button>
	</ts-button-group>
`;

storiesOf('ts-modal', module)
	.addDecorator(withKnobs)
	.add(
		'With note and footer',
		() => {
			const dir = radios('Direction', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
			const title = text('Title', 'Title');
			const visible = boolean('Visible', true);
			const size = select('Size', helpers.objectKeysChangeCase(sizes), sizes.MEDIUM);
			const hideHeader = boolean('Hide header', false);
			const noPadding = boolean('Remove paddings in main', false);

			const showNote = boolean('Add note', true);
			const showFooter = boolean('Add footer', true);
			return html`
				<ts-modal
					data-dir="${dir}"
					data-title="${title}"
					data-size="${size}"
					?data-visible="${visible}"
					?hide-header="${hideHeader}"
					?no-padding="${noPadding}"
				>
					${showNote
						? html`
								<ts-note dir="${dir}" slot="note">
									Some important note about this information.
								</ts-note>
						  `
						: ''}
					<div slot="main">
						${cardsArray.map(c => c)}
					</div>
					${showFooter ? footer : ''}
				</ts-modal>
			`;
		},
		{ notes: readme }
	);
