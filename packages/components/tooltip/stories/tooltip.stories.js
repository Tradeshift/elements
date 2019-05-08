import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@tradeshift/elements';
import '@tradeshift/elements.tooltip';

storiesOf('ts-tooltip', module).add(
	'default',
	() => html`
		<style>
			#root {
				padding-top: 40px;
			}
		</style>
		<ts-tooltip tooltip="tooltip on the right" position="right">
			<ts-button>Right</ts-button>
		</ts-tooltip>
		<ts-tooltip tooltip="tooltip on the top" position="top">
			<ts-button>Top</ts-button>
		</ts-tooltip>
		<ts-tooltip tooltip="tooltip on the bottom" position="bottom">
			<ts-button>Bottom</ts-button>
		</ts-tooltip>
		<ts-tooltip tooltip="tooltip on the left" position="left">
			<ts-button>Left</ts-button>
		</ts-tooltip>
	`
);
