import { html } from 'lit-html';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { helpers } from '@tradeshift/elements';

import '@tradeshift/elements.status';
import { STATUS_TYPE } from '../src/utils/constants';
import readme from '../README.md';

export default {
	title: 'ts-status',
	decorators: [withKnobs]
};

export const Default = () => {
	const status = select(
		'Status',
		{
			default: '',
			...helpers.objectKeysChangeCase(STATUS_TYPE)
		},
		''
	);
	const statusText = text('text', 'Ok Danger Note');
	const dir = select(
		'dir',
		{
			ltr: 'ltr',
			rtl: 'rtl'
		},
		'ltr'
	);
	return html` <ts-status status="${status}" text="${statusText}" dir="${dir}"> </ts-status> `;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
