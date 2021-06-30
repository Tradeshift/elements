import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.button';
import '@tradeshift/elements.modal';
import '@tradeshift/elements.text-field';

import css from './confirmation-prompt.css';
import { translations } from './utils';

export class TSConfirmationPrompt extends TSElement {
	constructor() {
		super();
		this._translations = Object.assign({}, translations);
		this.textToMatch = 'YES';
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Dialog can be toggled by add/removing this attribute */
			visible: { type: Boolean, attribute: 'data-visible', reflect: true },
			/** Header of the modal */
			header: { type: String, attribute: 'data-header', reflect: true },
			/** Title on top of the text part */
			title: { type: String, attribute: 'data-title', reflect: true },
			/** Text content of the modal */
			text: { type: String, reflect: true },
			/** Label of the text field component */
			textFieldLabel: { type: String, reflect: true, attribute: 'text-field-label' },
			/** Placeholder of the text field component */
			textFieldPlaceholder: { type: String, reflect: true, attribute: 'text-field-placeholder' },
			/** Array of messages to pass to help-text component. See help-text component for more info  */
			helpTextMessages: { type: Array, reflect: true, attribute: 'help-text-messages' },
			/** If you have more than one help text message, you should pass a title to it. See help-text component for more info  */
			helpTextTitle: { type: String, reflect: true, attribute: 'help-text-title' },
			/** Can be used for customizing the buttons text and providing translations for them */
			translations: { type: Object, reflect: true },
			/** Text that the user need to type for confirmation  */
			textToMatch: { type: String, reflect: true, attribute: 'text-to-match' },
			/** INTERNAL  */
			matched: { type: Boolean }
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

	onInput(event) {
		if (event.detail) {
			this.matched = this.textToMatch === event.detail.value;
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
		/**
		 * Emitted when the user choose the cancel option
		 */
		this.dispatchCustomEvent('cancel');
		this.dismissModal();
	}

	onClose() {
		/**
		 * Emitted when the user dismiss the modal, includes cancel button click, close button click, backdrop cover click
		 */
		this.dispatchCustomEvent('close');
		this.dismissModal();
	}

	dismissModal() {
		this.visible = false;
	}

	render() {
		return html`
			<ts-modal
				?data-visible=${this.visible}
				data-size="medium"
				data-title="${this.header || ''}"
				@closed="${this.onClose}"
			>
				<div class="content" slot="main">
					<h2>
						<!-- If in rare cases you need to have more complex title than text property, you can override the title by using this slot	-->
						<slot name="title">${this.title || ''}</slot>
					</h2>
					<!-- If in rare cases you need to have more complex content than text property, you can override the text by using this slot	-->
					<slot name="content">
						<p>${this.text}</p>
					</slot>
					<div class="confirmation-input-wrapper">
						<ts-text-field
							id="confirmation"
							label="${this.textFieldLabel || undefined}"
							placeholder="${this.textFieldPlaceholder || ''}"
							help-text-title="${this.helpTextTitle || ''}"
							.helpTextMessages="${this.helpTextMessages || []}"
							help-text-type="warning"
							@input="${this.onInput}"
						></ts-text-field>
					</div>
				</div>
				<div class="footer" slot="footer">
					<ts-button @button-click="${this.onAccept}" type="danger" ?disabled="${!this.matched}">
						${this.translations.acceptButton}
					</ts-button>
					<ts-button @button-click="${this.onCancel}" type="secondary">${this.translations.cancelButton}</ts-button>
				</div>
			</ts-modal>
		`;
	}
}

customElementDefineHelper('ts-confirmation-prompt', TSConfirmationPrompt);
