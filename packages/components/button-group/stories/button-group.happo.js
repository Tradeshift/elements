import { html } from 'lit-html';
import '@tradeshift/elements.button';
import '../lib/button-group.esm';
import '@tradeshift/elements/src/vars.css';

export default {
	title: 'ts-button-group'
};

export const TestButtonGroup = () => {
	return html`
		<style>
			.render-block {
				flex: 0 0 40%;
				border: 1px solid;
				padding: 20px;
			}
		</style>
		<div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
			<div class="render-block">
				<p>Default</p>
				<ts-button-group>
					<ts-button type="primary">Primary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
				</ts-button-group>
			</div>
			<div class="render-block">
				<p>inline</p>
				<ts-button-group inline>
					<ts-button type="primary">Primary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
				</ts-button-group>
			</div>
			<div class="render-block">
				<p>inline RTL</p>
				<ts-button-group inline dir="rtl">
					<ts-button type="primary">Primary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
					<ts-button type="secondary">Secondary Button</ts-button>
				</ts-button-group>
			</div>
			<div class="render-block">
				<p>action button</p>
				<ts-button-group>
					<ts-button type="text" icon="ada">Action Button</ts-button>
					<ts-button type="text" icon="lock">Action Button</ts-button>
					<ts-button type="text" icon="search">Action Button</ts-button>
					<ts-button type="text" icon="download">Action Button</ts-button>
				</ts-button-group>
			</div>
			<div class="render-block">
				<p>action button RTL</p>
				<ts-button-group dir="rtl">
					<ts-button type="text" icon="ada">Action Button</ts-button>
					<ts-button type="text" icon="lock">Action Button</ts-button>
					<ts-button type="text" icon="search">Action Button</ts-button>
					<ts-button type="text" icon="download">Action Button</ts-button>
				</ts-button-group>
			</div>
			<div class="render-block">
				<p>inline action button</p>
				<ts-button-group inline>
					<ts-button type="text" icon="ada">Action Button</ts-button>
					<ts-button type="text" icon="lock">Action Button</ts-button>
					<ts-button type="text" icon="search">Action Button</ts-button>
					<ts-button type="text" icon="download">Action Button</ts-button>
				</ts-button-group>
			</div>
			<div class="render-block">
				<p>inline action button RTL</p>
				<ts-button-group inline dir="rtl">
					<ts-button type="text" icon="ada">Action Button</ts-button>
					<ts-button type="text" icon="lock">Action Button</ts-button>
					<ts-button type="text" icon="search">Action Button</ts-button>
					<ts-button type="text" icon="download">Action Button</ts-button>
				</ts-button-group>
			</div>
		</div>
	`;
};
