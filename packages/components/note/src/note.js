import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';

import { classNames, types, customEventNames } from './utils';
import css from './note.css';

customElementDefineHelper(
	'ts-note',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				icon: { type: String },
				type: { type: String },
				rtl: { type: Boolean },
				closeable: { type: Boolean },
				hidden: { type: Boolean, reflect: true },
				buttons: { type: Array }
			};
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
			this.dispatchCustomEvent(customEventNames.CLOSE);
		}
		buttonClickHandler(event) {
			const buttonData = event.target.getAttribute('data-button');
			this.dispatchCustomEvent(customEventNames.BUTTON_CLICK, JSON.parse(buttonData));
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
						class="${classNames.CLOSE_BUTTON}"
						@click="${this.closeHandler}"
						icon="close-clear"
						size="large"
						type="${this.iconType}"
					></ts-icon>
				`;
			}
		}

		render() {
			return html`
				<div class="${classNames.NOTE_WRAPPER}" ?data-rtl="${this.rtl}">
					${this.icon || this.type === types.ada
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
);
