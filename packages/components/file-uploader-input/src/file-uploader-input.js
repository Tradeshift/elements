import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './file-uploader-input.css';
import { messages, selectors, classNames, customEventNames, sizes } from './utils';

import '@tradeshift/elements.help-text';
import '@tradeshift/elements.icon';

export class TSFileUploaderInput extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			rtl: { type: Boolean, reflect: true },
			disabled: { type: Boolean, reflect: true },
			/** Allow multiple file select. */
			multiple: { type: Boolean, reflect: true },
			size: { type: String, reflect: true },
			acceptedFileExtensions: {
				type: Array,
				reflect: true,
				attribute: 'accepted-file-extensions'
			},
			disableDragAndDrop: {
				type: Boolean,
				reflect: true,
				attribute: 'disable-drag-and-drop'
			},
			helpTextTitle: { type: String, attribute: 'help-text-title' },
			helpTextMessages: { type: Array, attribute: 'help-text-messages' },
			/** Hide the help text about allowed file types. */
			hideFileTypeHelpText: {
				type: Boolean,
				attribute: 'hide-file-type-help-text'
			},
			/** Hide the help text about maximum number of files. */
			hideMaxFileNumberHelpText: {
				type: Boolean,
				attribute: 'hide-max-file-number-help-text'
			},
			maxFileNumber: { type: Number, attribute: 'max-file-number' },
			fileUploadWrapper: { attribute: false }
		};
	}

	constructor() {
		super();
		this.multiple = false;
		this.disableDragAndDrop = false;
		this.size = sizes.full;
		this.hideFileTypeHelpText = false;
		this.hideMaxFileNumberHelpText = false;
		this.helpTextTitle = '';
		this.helpTextMessages = [];
		this.dragCounter = 0;
		this.handleUpload = this.handleUpload.bind(this);
		this.dragEnterHandler = this.dragEnterHandler.bind(this);
		this.dragOverHandler = this.dragOverHandler.bind(this);
		this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
		this.dropHandler = this.dropHandler.bind(this);
	}

	get dropBox() {
		return html`
			<div class="${classNames.DRAGGABLE_INFO} ${classNames.DROP_BOX}">
				<div class="icon-wrapper">
					<div class="icon">
						<ts-icon icon="arrow-up" size="medium" status="active"></ts-icon>
					</div>
				</div>
				${messages.DROP_FILE}
			</div>
		`;
	}

	get fileUploadInput() {
		return html`
			<div class="${classNames.FILE_UPLOAD_BUTTON}" ?data-disabled="${this.disabled}">
				<label>
					<slot name="placeholder-text">
						${messages.PLACEHOLDER[this.multiple ? 'MULTIPLE' : 'SINGLE']}
					</slot>
				</label>
				<span>
					<slot name="button-text">
						${messages.GENERAL.SELECT.toUpperCase()}
					</slot>
				</span>
				${this.htmlFileInput}
			</div>
		`;
	}

	get htmlFileInput() {
		const acceptedExtenstions = this.acceptAttrForFileInput;
		if (acceptedExtenstions) {
			return html`
				<input type="file" ?disabled="${this.disabled}" ?multiple="${this.multiple}" accept="${acceptedExtenstions}" />
			`;
		}
		return html`
			<input type="file" ?disabled="${this.disabled}" ?multiple="${this.multiple}" />
		`;
	}

	get helpText() {
		const helpTextList = [...this.helpTextMessages];
		if (!this.hideFileTypeHelpText && this.acceptedFileExtensions && this.acceptedFileExtensions.length > 0) {
			const acceptedFileExtensions = this.acceptedFileExtensions.map(ext => ext.toUpperCase()).join(', ');
			helpTextList.push(`${messages.ALLOWED_FORMATS}: ${acceptedFileExtensions}`);
		}

		if (this.multiple && !this.hideMaxFileNumberHelpText && this.maxFileNumber) {
			helpTextList.push(`Max ${this.maxFileNumber} files`);
		}

		if (helpTextList.length) {
			return html`
				<ts-help-text
					size="${this.size}"
					class="${classNames.HELP_TEXT}"
					title="${this.helpTextTitle}"
					messages="${JSON.stringify(helpTextList)}"
					?rtl="${this.rtl}"
				></ts-help-text>
			`;
		}
	}

	render() {
		return html`
			<div ?data-rtl="${this.rtl}" class="${classNames.FILE_UPLOAD_WRAPPER} ${classNames.DROP_BOX}">
				${this.fileUploadInput} ${this.helpText} ${this.dropBox}
			</div>
		`;
	}

	firstUpdated(changedProperties) {
		this.shadowRoot.querySelector(selectors.INPUT).addEventListener('change', this.handleUpload);

		this.fileUploadWrapper = this.shadowRoot.querySelector(selectors.FILE_UPLOAD_WRAPPER);
		this.fileUploadWrapper.addEventListener('dragenter', this.dragEnterHandler, false);
		this.fileUploadWrapper.addEventListener('dragover', this.dragOverHandler, false);
		this.fileUploadWrapper.addEventListener('dragleave', this.dragLeaveHandler, false);
		this.fileUploadWrapper.addEventListener('drop', this.dropHandler, false);
	}

	get acceptAttrForFileInput() {
		return this.acceptedFileExtensions ? this.acceptedFileExtensions.map(ext => `.${ext}`).join(',') : undefined;
	}

	handleUpload(e) {
		const event = new CustomEvent(customEventNames.FILE_CHANGE, {
			detail: {
				originalEvent: e,
				files: e.target.files
			}
		});
		this.dispatchEvent(event);
	}

	dragEnterHandler(e) {
		if (!this.disabled && !this.disableDragAndDrop) {
			e.preventDefault();
			this.dragCounter++;
			if (this.dragCounter > 0) {
				this.fileUploadWrapper.classList.add(classNames.DRAG_OVER_STATE);
			}
		}
	}

	dragOverHandler(e) {
		if (!this.disabled && !this.disableDragAndDrop) {
			e.preventDefault();
		}
	}

	dragLeaveHandler(e) {
		if (!this.disabled && !this.disableDragAndDrop) {
			e.preventDefault();
			this.dragCounter--;
			if (this.dragCounter === 0) {
				this.fileUploadWrapper.classList.remove(classNames.DRAG_OVER_STATE);
			}
		}
	}

	dropHandler(e) {
		if (!this.disabled && !this.disableDragAndDrop) {
			e.preventDefault();
			this.fileUploadWrapper.classList.remove(classNames.DRAG_OVER_STATE);
			const files = e.dataTransfer.files;

			const event = {
				type: 'change',
				target: {
					files
				}
			};
			this.handleUpload(event);
		}
	}
}

customElementDefineHelper('ts-file-uploader-input', TSFileUploaderInput);
