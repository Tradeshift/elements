import { storiesOf, html, select, boolean } from '@open-wc/demoing-storybook';
import { withKnobs, text } from '@storybook/addon-knobs';

import '@tradeshift/elements.document-card';

storiesOf('ts-document-card', module)
	.addDecorator(withKnobs)
	.add('default', () => {
		const name = text('name', 'Invoice #321');
		const selected = boolean('selected', true);
		const description = text('description', 'CompanyName');
		const mobileDescription = text('mobileDescription', 'Description');
		const dir = select(
			'dir',
			{
				ltr: 'ltr',
				rtl: 'rtl'
			},
			'ltr'
		);
		return html`
			<ts-document-card
				name="${name}"
				description="${description}"
				mobileDescription="${mobileDescription}"
				dir="${dir}"
				?selected="${selected}"
			>
			</ts-document-card>
		`;
	});
