import { storiesOf, html } from '@open-wc/demoing-storybook';

import '@tradeshift/elements.app-icon';

import icon from '../../../../static/icon.svg';

storiesOf('ts-app-icon', module).add('default', () => {
	return html`
		<ts-app-icon src="${icon}" alt="icon"> </ts-app-icon>
	`;
});
