import { withKnobs, select, radios, array, boolean } from '@storybook/addon-knobs';
import '@tradeshift/elements.tag';
import { types } from './constants';
import readme from '../README.md';

export default {
	title: 'ts-tag',
	decorators: [withKnobs]
};

const typelist = [...Object.values(types), 'unknown-invalid-type'];

export const Default = () => {
	const attributes = {
		dir: radios('Direction', { ltr: 'ltr', rtl: 'rtl' }, 'ltr'),
		type: select('type', typelist),
		labels: array('labels', ['Label 1', 'Label 2']),
		values: array('values', ['value 1', 'value']),
		locked: boolean('locked', false),
		clickable: boolean('clickable', false),
		deletable: boolean('deletable', false),
		busy: boolean('busy', false)
	};

	return Object.assign(document.createElement('ts-tag'), attributes);
};

Default.story = {
	name: 'default',
	parameters: {
		notes: readme
	}
};
