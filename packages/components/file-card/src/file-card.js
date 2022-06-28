import { customElementDefineHelper, html, TSElement, unsafeCSS } from '@tradeshift/elements';
import '@tradeshift/elements.typography';
import '@tradeshift/elements.card';
import '@tradeshift/elements.progress-bar';
import '@tradeshift/elements.file-size';
import '@tradeshift/elements.icon';
import { download, remove } from '@tradeshift/elements.icon/lib/assets/icons';

import css from './file-card.css';
import fileIcon from './assets/file.svg';
import { classNames, customEventNames, messages, selectors, sizes, states } from './utils';

export class TSFileCard extends TSElement {
	constructor() {
		super();
		this.state = states.UPLOADING;
		this.size = sizes.FULL;
		this.removable = false;
		this.toggleRemoveActionHoverState = this.toggleRemoveActionHoverState.bind(this);
		this.toggleDownloadActionHoverState = this.toggleDownloadActionHoverState.bind(this);
		this.removeFile = this.removeFile.bind(this);
		this.downloadFile = this.downloadFile.bind(this);
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** type/state of the file card: 'download', 'failed', 'uploading' */
			state: { type: String, reflect: true },
			/** File data object, {name, size, ...} */
			fileObject: { type: Object, attribute: 'file-object' },
			rtl: { type: Boolean, reflect: true },
			/** Show a remove button on the card, which emit an event when it's been clicked */
			removable: { type: Boolean, reflect: true },
			/** Size of the file card: 'full','medium','small' */
			size: { type: String, reflect: true },
			/** The error message to be shown on the file card when it's in failed state */
			errorMessage: { type: String, reflect: true, attribute: 'error-message' }
		};
	}

	get cardType() {
		const cardTypes = {
			// TODO: Import card types from card component
			[states.UPLOADING]: 'focus',
			[states.DOWNLOAD]: 'default',
			[states.FAILED]: 'failed'
		};
		return cardTypes[this.state];
	}

	get errorMessages() {
		if (this.state === 'failed') {
			const message = this.errorMessage;
			return html`
				<ts-typography class="${classNames.ERROR_MESSAGE}" type="error" variant="subtitle" no-wrap
					>${message}</ts-typography
				>
			`;
		}
	}

	get fileIcon() {
		return html` <span class="${classNames.FILE_ICON_WRAPPER}"> ${html([fileIcon])} </span> `;
	}

	get progressBar() {
		if (this.state === states.UPLOADING) {
			return html` <ts-progress-bar class="${classNames.PROGRESS_BAR}" indeterminate></ts-progress-bar> `;
		}
	}

	get actionIcons() {
		return html`
			<div>
				<span class="${classNames.REMOVE_ACTION} ${classNames.ACTION_ICON_WRAPPER}">
					<ts-icon class="${classNames.ACTION_ICON}" icon="${remove}"></ts-icon>
				</span>
				<span class="${classNames.DOWNLOAD_ACTION} ${classNames.ACTION_ICON_WRAPPER}">
					<ts-icon class="${classNames.ACTION_ICON}" icon="${download}"></ts-icon>
				</span>
			</div>
		`;
	}

	get fileInformation() {
		if (this.state === states.DOWNLOAD) {
			const fileExtension = this.fileObject.name.split('.').pop().toUpperCase();

			return html`
				<div class="${classNames.FILE_INFORMATION}">
					${this.fileSize}
					<ts-typography variant="subtitle"> ${`${fileExtension} Document`} </ts-typography>
				</div>
			`;
		}
	}

	get fileSize() {
		if (this.fileObject.size) {
			return html`
				<ts-file-size size="${this.fileObject.size}"></ts-file-size>
				<ts-typography text="|" variant="subtitle"></ts-typography>
			`;
		} else {
			return html``;
		}
	}

	get actionMessage() {
		return html`
			<ts-typography class="${classNames.REMOVE_ACTION_MESSAGE}" type="action" variant="subtitle">
				<!-- To customize the remove action message  -->
				<slot name="remove-action-text">${messages.GENERAL.REMOVE}</slot>
			</ts-typography>
			<ts-typography class="${classNames.DOWNLOAD_ACTION_MESSAGE}" type="action" variant="subtitle">
				<!-- To customize the download action message  -->
				<slot name="download-action-text">${messages.GENERAL.DOWNLOAD}</slot>
			</ts-typography>
		`;
	}

	render() {
		return html`
			<div ?data-removable="${this.removable}" class="${classNames.FILE_CARD_WRAPPER} state-${this.state}">
				<ts-card type="${this.cardType}" orientation="horizontal" ?rtl="${this.rtl}" size="${this.size}">
					${this.fileIcon}
					<div class="content">
						<ts-typography text="${this.fileObject.name}" class="file-name" variant="title" no-wrap></ts-typography>
						${this.progressBar} ${this.fileInformation} ${this.errorMessages} ${this.actionMessage}
					</div>
					${this.actionIcons}
				</ts-card>
			</div>
		`;
	}

	firstUpdated(_changedProperties) {
		this.handleRemoveActionEvents();
		this.handleDownloadActionEvents();
	}

	removeFile() {
		if (this.removable) {
			/**
			 * Emitted when user clicks the remove action
			 * @payload { file }
			 */
			this.dispatchCustomEvent('remove', { file: this.fileObject });
		}
	}

	downloadFile() {
		if (this.state === states.DOWNLOAD) {
			const event = new CustomEvent(customEventNames.DOWNLOAD, {
				detail: {
					file: this.fileObject
				},
				bubbles: true,
				composed: true
			});

			this.dispatchEvent(event);
		}
	}

	toggleRemoveActionHoverState() {
		this.shadowRoot.querySelector(selectors.FILE_CARD_WRAPPER).classList.toggle(classNames.REMOVE_ACTION_HOVERED);
	}

	toggleDownloadActionHoverState() {
		this.shadowRoot.querySelector(selectors.FILE_CARD_WRAPPER).classList.toggle(classNames.DOWNLOAD_ACTION_HOVERED);
	}

	handleRemoveActionEvents() {
		this.shadowRoot
			.querySelector(selectors.REMOVE_ACTION)
			.addEventListener('mouseenter', this.toggleRemoveActionHoverState, false);
		this.shadowRoot
			.querySelector(selectors.REMOVE_ACTION)
			.addEventListener('mouseleave', this.toggleRemoveActionHoverState, false);

		this.shadowRoot.querySelector(selectors.REMOVE_ACTION).addEventListener('click', this.removeFile);
	}

	handleDownloadActionEvents() {
		const selectorsForDownload = [selectors.TEXT_CONTENT, selectors.FILE_ICON_WRAPPER, selectors.DOWNLOAD_ACTION];
		selectorsForDownload.forEach(selector => {
			this.shadowRoot
				.querySelector(selector)
				.addEventListener('mouseenter', this.toggleDownloadActionHoverState, false);

			this.shadowRoot
				.querySelector(selector)
				.addEventListener('mouseleave', this.toggleDownloadActionHoverState, false);

			this.shadowRoot.querySelector(selector).addEventListener('click', this.downloadFile);
		}, this);
	}
}

customElementDefineHelper('ts-file-card', TSFileCard);
