import { html } from 'lit-html';
import '@tradeshift/elements';
import '@tradeshift/elements.board';
import '@tradeshift/elements.button';
import '@tradeshift/elements.action-select';

export default {
	title: 'ts-board'
};

export const Board1 = () => {
	return html`
		<ts-board>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum hic iusto minus nostrum, similique
				veritatis. Ab dicta hic nostrum odit, pariatur rem rerum. Alias at culpa eveniet odio veritatis?
			</p>
		</ts-board>
		<br />
		<ts-board data-title="Title of the board">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum hic iusto minus nostrum, similique
				veritatis. Ab dicta hic nostrum odit, pariatur rem rerum. Alias at culpa eveniet odio veritatis?
			</p>
		</ts-board>
	`;
};

Board1.story = {
	name: 'ts-board & title'
};

export const Board2 = () => {
	const items = [{ id: 0, title: 'Action Select Item 1' }];

	return html`
		<ts-board data-title="Title of the board">
			<div slot="header-actions" style="display: flex; align-items:center;">
				<ts-button size="macro">Some button </ts-button>
				<ts-button size="micro" type="danger">click</ts-button>
				<ts-action-select .items="${items}"></ts-action-select>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum hic iusto minus nostrum, similique
				veritatis. Ab dicta hic nostrum odit, pariatur rem rerum. Alias at culpa eveniet odio veritatis?
			</p>
		</ts-board>
		<br />
		<ts-board dir="rtl" data-title="Title of the board">
			<ts-button slot="header-actions" size="micro">Some button</ts-button>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum hic iusto minus nostrum, similique
				veritatis. Ab dicta hic nostrum odit, pariatur rem rerum. Alias at culpa eveniet odio veritatis?
			</p>
		</ts-board>
	`;
};

Board2.story = {
	name: 'ts-board with actions & rtl'
};
