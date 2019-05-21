import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.help-text';

storiesOf('ts-help-text', module)
	.add(
		'Title & messages',
		() => html`
			<ts-help-text
				messages='["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at atque deserunt, dignissimos dolor doloribus eaque eius eos eum excepturi fuga, hic incidunt itaque molestias necessitatibus pariatur rem repellat soluta", "message example 1", "message example 2"]'
				title="Title"
				size="small"
			></ts-help-text>
		`
	)
	.add(
		'Single message',
		() => html`
			<ts-help-text
				messages='["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at atque deserunt, dignissimos dolor doloribus eaque eius eos eum excepturi fuga, hic incidunt itaque molestias necessitatibus pariatur rem repellat soluta"]'
				size="medium"
			></ts-help-text>
		`
	)
	.add(
		'RTL',
		() => html`
			<ts-help-text
				messages='["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at atque deserunt, dignissimos dolor doloribus eaque eius eos eum excepturi fuga, hic incidunt itaque molestias necessitatibus pariatur rem repellat soluta", "message example 1", "message example 2"]'
				title="Title"
				rtl
			></ts-help-text>
		`
	);
