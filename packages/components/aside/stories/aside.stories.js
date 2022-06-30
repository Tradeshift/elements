import { html } from 'lit-html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import '@tradeshift/elements';
import '../lib/aside.esm';

import readme from '../README.md';

export default {
	title: 'ts-aside',
	decorators: [withKnobs]
};

export const WithFooter = () => {
	const title = text('Title', 'Aside');
	const visible = boolean('Visible', true);
	const busy = boolean('Busy', false);
	return html`
		<ts-aside data-title="${title}" ?data-busy="${busy}" ?data-visible="${visible}">
			<ts-panel slot="main">
				These oft shamed not mothernot now harolds tear congealed virtues. To hall riot awake parasites ye his mirthful
				beyond. Such sighed his start glee had soon yes if, domestic days for labyrinth her within in whateer vaunted.
				Mood few vaunted them hall felt loved than wins muse. A near sight childe ne they departed earthly. Shamed his
				riot dome for.
			</ts-panel>
			<ts-button-group slot="footer">
				<ts-button type="primary">Button</ts-button>
			</ts-button-group>
		</ts-aside>
	`;
};

WithFooter.story = {
	name: 'With footer',
	parameters: { notes: readme }
};

export const WithoutFooter = () => {
	const title = text('Title', 'Aside');
	const visible = boolean('Visible', true);
	const busy = boolean('Busy', false);
	return html`
		<ts-aside data-title="${title}" ?data-busy="${busy}" ?data-visible="${visible}">
			<ts-panel slot="main">
				Forse donne speranza siamo esperienza mentre seguitando sé nostro l'uomo, dare e di da prestasse noi non. Mentre
				di alcun vita forza siamo sua io in sogiacere, ciascheduna reputiamo primo forse porgiamo dovendo non, beati
				infiniti nostro sé di dare nostra e a santo, piaceri santo quale ingannati le ripararci carissime, come piene sí
				noi l'acume siamo cospetto incominciare pregato per, il come in avvien e la, il pieno alcun convenevole e coloro
				a ammirabile una nostri, bene noia alla alle credere non. Suo la quegli ma nel dio pieno ma transitorie. Di che
				seguitando purita incominciare convenevole bene, ora.
			</ts-panel>
		</ts-aside>
	`;
};

WithoutFooter.story = {
	name: 'Without footer',
	parameters: { notes: readme }
};

export const WithNote = () => {
	const visible = boolean('Visible', true);
	const busy = boolean('Busy', false);
	return html`
		<ts-aside data-title="Aside with note" ?data-busy="${busy}" ?data-visible="${visible}">
			<ts-note slot="note"> Takimata sed sea lorem kasd sit est. </ts-note>
			<ts-panel slot="main">
				Forse donne speranza siamo esperienza mentre seguitando sé nostro l'uomo, dare e di da prestasse noi non. Mentre
				di alcun vita forza siamo sua io in sogiacere, ciascheduna reputiamo primo forse porgiamo dovendo non, beati
				infiniti nostro sé di dare nostra e a santo, piaceri santo quale ingannati le ripararci carissime, come piene sí
				noi l'acume siamo cospetto incominciare pregato per, il come in avvien e la, il pieno alcun convenevole e coloro
				a ammirabile una nostri, bene noia alla alle credere non. Suo la quegli ma nel dio pieno ma transitorie. Di che
				seguitando purita incominciare convenevole bene, ora.
			</ts-panel>
		</ts-aside>
	`;
};

WithNote.story = {
	name: 'With note',
	parameters: { notes: readme }
};
