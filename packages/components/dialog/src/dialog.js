import { TSElement, unsafeCSS, html, customElementDefineHelper, validateSlottedNodes } from '@tradeshift/elements';
import '@tradeshift/elements.modal';
import '@tradeshift/elements.typography';
import '@tradeshift/elements.icon';

import css from './dialog.css';
import { translations, dialogTypes, dialogTypeIcon, dialogTypeIconTypes, dialogTypeButtonType } from './utils';

export class TSDialog extends TSElement {
	constructor() {
		super();
		this.type = dialogTypes.CONFIRM;
		this.focused = 'cancel';
		this._translations = Object.assign({}, translations);
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			visible: { type: Boolean, attribute: 'data-visible', reflect: true },
			text: { type: String, reflect: true },
			icon: { type: String, reflect: true },
			type: { type: String, reflect: true },
			translations: { type: Object, reflect: true },
			focused: { type: String, reflect: true },
			primary: { type: String, reflect: true },
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
		return this.icon ? this.icon : dialogTypeIcon[this.type];
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
		if (name === 'data-visible' && newVal) {
			// FIXME: this.updateComplete didn't work for this case
			// Needed to render buttons a bit later to be able to set focus on them
			window.setTimeout(() => {
				this.renderButtons = true;
			}, 200);
		}
	}

	onAccept() {
		this.dispatchCustomEvent('accept');
		this.dismissModal();
		this.visible = false;
	}

	onCancel() {
		this.dispatchCustomEvent('cancel');
		this.dismissModal();
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
		return this.renderButtons && this.focused === buttonType;
	}
	render() {
		return html`
			<ts-modal ?data-visible=${this.visible} data-size="small" hide-header no-close-on-esc-key>
				<div class="content" slot="main">
					<ts-icon icon="${this.getIcon}" type="${this.getIconType}" size="extra-large"></ts-icon>
					<slot name="content">
						<ts-typography>${this.text}</ts-typography>
					</slot>
				</div>
				<div class="footer" slot="footer">
					<ts-button-group>
						<ts-button
							?focused="${this.isFocused('accept')}"
							@click="${this.onAccept}"
							type="${this.getAcceptButtonType}"
						>
							${this.translations.accept_button}
						</ts-button>
						<slot name="extra-buttons" @slotchange="${this.extraButtonsSlotChangeHandler}"></slot>
						<ts-button
							?focused="${this.isFocused('cancel')}"
							@click="${this.onCancel}"
							type="${this.getCancelButtonType}"
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
