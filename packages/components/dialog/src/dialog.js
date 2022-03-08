import {
	TSElement,
	unsafeCSS,
	html,
	customElementDefineHelper,
	validateSlottedNodes,
	constants
} from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.button-group';
import '@tradeshift/elements.icon';
import '@tradeshift/elements.modal';
import '@tradeshift/elements.typography';

import css from './dialog.css';
import { translations, dialogTypes, dialogTypeIcon, dialogTypeIconTypes, dialogTypeButtonType } from './utils';

export class TSDialog extends TSElement {
	constructor() {
		super();
		this.type = dialogTypes.CONFIRM;
		this.focused = 'cancel';
		this._translations = Object.assign({}, translations);
		this.notification = false;
		this.nonDismissable = false;
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Dialog can be toggled by adding/removing this attribute */
			visible: { type: Boolean, attribute: 'data-visible', reflect: true },
			/** Text content of the modal */
			text: { type: String, reflect: true },
			/** If you need a different icon that default ones, you can use one of Elements icon names. Notifications will ignore this */
			icon: { type: String, reflect: true },
			/** `success`, `info`, `confirm`, `warning`, `danger`, `error` */
			type: { type: String, reflect: true },
			/** can be used for customizing the buttons text and translations */
			translations: { type: Object, reflect: true },
			/** set the default focus on the button, either `accept` or `cancel` */
			focused: { type: String, reflect: true },
			/** either `accept` or `cancel` can be used to change the button type, based on the dialog type, by default both are secondary */
			primary: { type: String, reflect: true },
			/** If it is a notification, no cancel button will be rendered. Notifications of type 'success' will auto-close on timeout, if they are not `non-dismissable` */
			notification: { type: Boolean, reflect: true },
			/** Cannot be dismissed except by clicking available buttons in the dialog/notification */
			nonDismissable: { type: Boolean, reflect: true, attribute: 'non-dismissable' },
			/** INTERNAL */
			renderButtons: { type: Boolean, attribute: false }
		};
	}

	get translations() {
		return this._translations;
	}

	set translations(val) {
		const oldVal = this._translations;
		this._translations = Object.assign(oldVal, val);
		this.requestUpdate('translations', oldVal);
	}

	get getIcon() {
		return this.icon && !this.notification ? this.icon : dialogTypeIcon[this.type];
	}

	get getIconType() {
		return dialogTypeIconTypes[this.type] || 'primary';
	}

	get getAcceptButtonType() {
		return this.primary === 'accept' ? dialogTypeButtonType[this.type] : 'secondary';
	}

	get getCancelButtonType() {
		return this.primary === 'cancel' ? dialogTypeButtonType[this.type] : 'secondary';
	}

	attributeChangedCallback(name, oldVal, newVal) {
		super.attributeChangedCallback(name, oldVal, newVal);
		if (name === 'data-visible' && typeof newVal === 'string') {
			// FIXME: this.updateComplete didn't work for this case
			// Needed to render buttons a bit later to be able to set focus on them
			window.setTimeout(() => {
				this.renderButtons = true;
			}, 200);
		}
	}

	updated(changedProps) {
		super.updated(changedProps);
		if (this.visible === true) {
			/** close dismissable success notifications after a timeout */
			if (this.notification === true && this.type === dialogTypes.SUCCESS && !this.nonDismissable) {
				return window.setTimeout(() => {
					this.dismissModal();
				}, constants.delay.CLOSE);
			}
		}
	}

	onAccept() {
		/**
		 * Emitted when the user choose the accept option
		 */
		this.dispatchCustomEvent('accept');
		this.dismissModal();
	}

	onCancel() {
		if (!this.nonDismissable) {
			/**
			 * Emitted when the user choose the cancel option
			 */
			this.dispatchCustomEvent('cancel');
			this.dismissModal();
		}
	}

	dismissModal() {
		this.visible = false;
		this.renderButtons = false;
	}

	extraButtonsSlotChangeHandler(e) {
		const slottedNodes = e.currentTarget.assignedNodes();
		validateSlottedNodes(this.tagName, slottedNodes, ['TS-BUTTON', 'TS-BUTTON-GROUP']);
	}

	isFocused(buttonType) {
		if (this.nonDismissable) {
			return false;
		}
		if (this.notification) {
			if (buttonType === 'accept') {
				return true;
			}
			return false;
		}
		return this.renderButtons && this.focused === buttonType;
	}

	get _hideAllButtons() {
		return !this.nonDismissable && this.notification && this.type === dialogTypes.SUCCESS;
	}

	render() {
		return html`
			<ts-modal
				?data-visible=${this.visible}
				data-size="small"
				hide-header
				?no-close-on-esc-key=${this.nonDismissable}
				?no-close-on-cover-click=${this.nonDismissable}
			>
				<div class="content" slot="main">
					<ts-icon icon="${this.getIcon}" type="${this.getIconType}" size="extra-large"></ts-icon>
					<!-- If in rare cases you need to have more complex content than text property, you can override the text by using this slot	-->
					<slot name="content">
						<ts-typography>${this.text}</ts-typography>
					</slot>
				</div>
				<div class="footer${this._hideAllButtons ? ' visuallyhidden' : ''}" slot="footer">
					<ts-button-group>
						<ts-button
							?focused="${this.isFocused('accept')}"
							@click="${this.onAccept}"
							type="${this.getAcceptButtonType}"
						>
							${this.translations.accept_button}
						</ts-button>
						<div class="${this.notification ? 'visuallyhidden' : ''}">
							<!-- To add more options to the dialog (notifications will ignore extra buttons), between accept and cancel buttons -->
							<slot name="extra-buttons" @slotchange="${this.extraButtonsSlotChangeHandler}"></slot>
						</div>
						<ts-button
							?focused="${this.isFocused('cancel')}"
							@click="${this.onCancel}"
							type="${this.getCancelButtonType}"
							class="${this.notification || this.nonDismissable ? 'visuallyhidden' : ''}"
							?disabled="${this.nonDismissable}"
						>
							${this.translations.cancel_button}
						</ts-button>
					</ts-button-group>
				</div>
			</ts-modal>
		`;
	}
}

customElementDefineHelper('ts-dialog', TSDialog);
