import { html } from 'lit-html';
import { withKnobs, text, boolean, object, select } from '@storybook/addon-knobs';

import '@tradeshift/elements.dialog';
import { dialogTypes } from '../src/utils';
import icons from '../../icon/src/assets/icons';
import readme from '../README.md';

function getKnobs() {
	return {
		content: text('text', 'Are you sure you want to delete this document?'),
		visible: boolean('data-visible', true),
		translations: object('translations', { accept_button: 'accept', cancel_button: 'cancel' }),
		focused: select('focused', { accept: 'accept', cancel: 'cancel', null: null }, 'cancel'),
		primary: select('primary', { accept: 'accept', cancel: 'cancel', null: null }, null),
		type: select('type', dialogTypes, dialogTypes.CONFIRM),
		icon: select('icon', Object.keys(icons), Object.keys(icons)[0])
	};
}

export default {
	title: 'ts-dialog',
	decorators: [withKnobs]
};

export const Default = () => {
	const knobs = getKnobs();
	return html`
		<ts-dialog
			?data-visible="${knobs.visible}"
			translations="${JSON.stringify(knobs.translations)}"
			text="${knobs.content}"
			focused="${knobs.focused}"
			type="${knobs.type}"
			primary="${knobs.primary}"
		>
		</ts-dialog>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};

export const CustomIcon = () => {
	const knobs = getKnobs();
	return html`
		<ts-dialog
			?data-visible="${knobs.visible}"
			translations="${JSON.stringify(knobs.translations)}"
			text="${knobs.content}"
			focused="${knobs.focused}"
			icon="${knobs.icon}"
			type="${knobs.type}"
			primary="${knobs.primary}"
		>
		</ts-dialog>
	`;
};

CustomIcon.story = {
	name: 'custom icon',
	parameters: { notes: readme }
};
