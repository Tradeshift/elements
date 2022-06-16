import { html } from 'lit-html';
import '../lib/popover.esm';

export default {
	title: 'ts-popover'
};

export const AnchoredPosition = () => {
	return html`
		<div style="margin-top: 150px; text-align: center; position:relative; width: 100%; height: 300px;">
			<span id="anchorElem" style="border: 1px solid green;">Anchor element</span>
		</div>
		<ts-popover placement="topLeft" header="TopLeft header" anchor="anchorElem" opened>
			<div slot="content">
				<p>In popover content you could use html markup, e.g.:</p>
				<a href="#" style="color: skyblue">link</a>
			</div>
		</ts-popover>
		<ts-popover placement="topRight" header="TopRight header" anchor="anchorElem" opened>
			<div slot="content">
				<p>In popover content you could use html markup, e.g.:</p>
				<a href="#" style="color: skyblue">link</a>
			</div>
		</ts-popover>
		<ts-popover placement="bottomLeft" header="BottomLeft header" anchor="anchorElem" opened>
			<div slot="content">
				<p>In popover content you could use html markup, e.g.:</p>
				<a href="#" style="color: skyblue">link</a>
			</div>
		</ts-popover>
		<ts-popover placement="bottomRight" header="BottomRight header" anchor="anchorElem" opened>
			<div slot="content">
				<p>In popover content you could use html markup, e.g.:</p>
				<a href="#" style="color: skyblue">link</a>
			</div>
		</ts-popover>
	`;
};

AnchoredPosition.story = {
	name: 'anchored position'
};

export const AbsolutelyPositioned = () => {
	return html`
		<ts-popover position-left="50px" position-top="calc(50% - 20px)" opened>
			<div slot="content">
				<p>In popover content you could use html markup, e.g.:</p>
				<a href="#" style="color: skyblue">link</a>
			</div>
			<div slot="footer">
				<button>First</button>
				<button>Second</button>
			</div>
		</ts-popover>
	`;
};

AbsolutelyPositioned.story = {
	name: 'absolute position'
};
