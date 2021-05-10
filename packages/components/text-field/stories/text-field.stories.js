import { withKnobs, text, boolean, select, array } from '@storybook/addon-knobs';

import '@tradeshift/elements.text-field';
import readme from '../README.md';
import icons from '../../icon/src/assets/icons';

export default {
	title: 'ts-text-field',
	decorators: [withKnobs({ escapeHTML: false })]
};

export const Default = () => {
	const attributes = {
		multiline: boolean('multiline', false),
		label: text('label', 'Sample label'),
		id: text('id', 'sampleId'),
		value: text('value', 'You can set the value of the field'),
		type: text('type', 'Label'),
		placeholder: text('placeholder', 'Sample placeholder'),
		disabled: boolean('disabled', false),
		readonly: boolean('readonly', false),
		required: boolean('required', false),
		helpTextTitle: text('help-text-title', 'Sample help text title which shows only when there are multiple messages'),
		errorTitle: text('error-title', 'Something is wrong with this field value:'),
		helpTextMessages: array('help-text-messages', [
			'Some information to help the user know what is this field about',
			'Some extra information about validation of this field'
		]),
		hasError: boolean('has-error', false),
		errorMessages: array('error-messages', [
			'Something is wrong with the value you put in the field',
			'Maybe you need couple of more characters in there?'
		]),
		iconStart: select('icon-start', ['', ...Object.keys(icons)], ''),
		iconEnd: select('icon-end', ['', ...Object.keys(icons)], '')
	};

	return Object.assign(document.createElement('ts-text-field'), attributes);
};

Default.story = {
	name: 'default',
	parameters: {
		notes: readme
	}
};
