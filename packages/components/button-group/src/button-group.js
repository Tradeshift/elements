import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './button-group.css';

export class TSButtonGroup extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Direction of the component 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Make the buttons inline instead of stacking which is the default behaviour */
			inline: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	firstUpdated() {
		this.updateButtonsProps();
	}

	handleSlotChange() {
		this.updateButtonsProps();
	}

	update(changedProperties) {
		super.update(changedProperties);
		this.updateButtonsProps();
	}

	updateButtonsProps() {
		Array.from(this.querySelectorAll('ts-button')).forEach(button => {
			button.grouped = true;
			button.inline = this.inline;
			button.dir = this.dir;
		});
	}

	render() {
		return html`
			<section dir="${this.direction}">
				<!-- All \`ts-button\` elements in the group should be wrapped with \`ts-button-group\` element to be grouped together -->
				<slot @slotchange="${this.handleSlotChange}"></slot>
			</section>
		`;
	}
}

customElementDefineHelper('ts-button-group', TSButtonGroup);
