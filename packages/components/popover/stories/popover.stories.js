import { html } from 'lit-html';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { Placement } from '../lib/popover.esm';
import { helpers } from '@tradeshift/elements';
import readme from '../README.md';

export default {
	title: 'ts-popover',
	decorators: [withKnobs]
};

export const Default = () => {
	const placement = select('placement', helpers.objectKeysChangeCase(Placement), 'topRight');
	const header = text('header', 'This is header');
	const opened = boolean('opened', false);

	return html`
		<div style="margin-top: 150px; text-align: center; position:relative">
			<span id="anchorElem" style="border: 1px solid green;">Anchor element</span>
		</div>
		<ts-popover placement="${placement}" header="${header}" anchor="anchorElem" ?opened="${opened}">
			<div slot="content">
				<p>In popover content you could use html markup, e.g.:</p>
				<a href="#" style="color: skyblue">link</a>
				<ul>
					<li>item 1</li>
					<li>item 2</li>
				</ul>
			</div>
			<div slot="footer">
				<ts-button size="micro">First</ts-button>
				<ts-button size="micro">Second</ts-button>
			</div>
		</ts-popover>
	`;
};

export const AbsolutePosition = () => {
	const positionLeft = text('position-left', '30px');
	const positionTop = text('position-top', '50px');
	const header = text('header', 'This is header');
	const opened = boolean('opened', true);

	return html`
		<ts-popover position-left="${positionLeft}" position-top="${positionTop}" header="${header}" ?opened="${opened}">
			<div slot="content">
				<p>In popover content you could use html markup, e.g.:</p>
				<a href="#" style="color: skyblue">link</a>
				<ul>
					<li>item 1</li>
					<li>item 2</li>
				</ul>
			</div>
			<div slot="footer">
				<ts-button size="micro">First</ts-button>
				<ts-button size="micro">Second</ts-button>
			</div>
		</ts-popover>
	`;
};

Default.story = {
	name: 'default',
	parameters: { notes: readme }
};

AbsolutePosition.story = {
	name: 'absolute position',
	parameters: { notes: readme }
};
