import { html } from 'lit-html';
import '@tradeshift/elements.button';
import '../lib/button-group.esm';
import readme from '../README.md';
import { boolean, radios } from '@storybook/addon-knobs';

export default {
	title: 'ts-button-group'
};

export const Default = () => {
	const dir = radios('dir', { ltr: 'ltr', rtl: 'rtl' }, 'ltr');
	const inline = boolean('inline', false);

	return html`
		<div style="display: flex; justify-content: space-around;">
			<div style="margin-bottom: 20px; width: 700px;">
				<ts-button-group .dir="${dir}" ?inline="${inline}">
					<ts-button type="primary">Primary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
				</ts-button-group>
			</div>
			<div style="margin-bottom: 20px; width: 700px;">
				<ts-button-group .dir="${dir}" ?inline="${inline}">
					<ts-button type="text" icon="ada">Action Button</ts-button>
					<ts-button type="text" icon="download">Action Button</ts-button>
					<ts-button type="text" icon="search">Action Button</ts-button>
					<ts-button type="text" icon="lock">Action Button</ts-button>
				</ts-button-group>
			</div>
		</div>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};
