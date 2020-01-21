import { html, storiesOf } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.radio-group';

storiesOf('ts-radio-group', module).add('test', () => {
	return html`
		<h1>
			dir
		</h1>

		<ts-radio-group name="radio">
			<ts-radio value="blue" label="Blue pill"></ts-radio>
			<ts-radio value="yellow" label="Red pill" checked></ts-radio>
			<ts-radio value="black" label="Black pill" disabled></ts-radio>
		</ts-radio-group>

		<ts-radio-group name="radio">
			<ts-radio value="blue" label="Blue pill" dir="rtl"></ts-radio>
			<ts-radio value="yellow" label="Red pill" checked dir="rtl"></ts-radio>
			<ts-radio value="black" label="Black pill" disabled dir="rtl"></ts-radio>
		</ts-radio-group>
	`;
});
