import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.icon';

import { classNames, types } from './utils';
import css from './note.css';

export class TSNote extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			icon: { type: String },
			type: { type: String },
			dir: { type: String },
			closeable: { type: Boolean },
			hidden: { type: Boolean, reflect: true },
			buttons: { type: Array }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get iconType() {
		const iconTypes = {
			[types.ADA]: 'suggested'
		};
		return this.type ? iconTypes[this.type] : 'default';
	}

	get iconName() {
		return this.type === types.ADA ? types.ADA : this.icon;
	}

	closeHandler() {
		this.hidden = true;
		this.dispatchCustomEvent('close');
	}

	buttonClickHandler(event) {
		const buttonData = event.target.getAttribute('data-button');
		this.dispatchCustomEvent('button-click', JSON.parse(buttonData));
	}

	get actionsTemplate() {
		if (this.buttons) {
			return html`
				<div class="${classNames.BUTTONS_WRAPPER}">
					${this.buttons.map(button => {
						return html`
							<ts-button
								type="${button.type ? button.type : 'primary'}"
								size="micro"
								?busy="${button.busy}"
								?disabled="${button.disabled}"
								data-button="${JSON.stringify(button)}"
								@click="${this.buttonClickHandler}"
							>
								${button.label}
							</ts-button>
						`;
					})}
				</div>
			`;
		} else if (this.closeable) {
			return html`
				<ts-icon
					class="no-border ${classNames.CLOSE_BUTTON}"
					@click="${this.closeHandler}"
					icon="close-clear"
				></ts-icon>
			`;
		}
	}

	render() {
		return html`
			<div class="${classNames.NOTE_WRAPPER}" dir="${this.direction}">
				${this.icon || this.type === types.ADA
					? html`
							<ts-icon
								class="${classNames.ICON}"
								icon="${this.iconName}"
								size="large"
								type="${this.iconType}"
							></ts-icon>
					  `
					: ''}
				<p class="${classNames.CONTENT}">
					<slot></slot>
				</p>
				${this.actionsTemplate}
			</div>
		`;
	}
}

customElementDefineHelper('ts-note', TSNote);
