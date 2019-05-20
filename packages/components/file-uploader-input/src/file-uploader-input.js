import {
	TSElement,
	unsafeCSS,
	html,
	customElementDefineHelper
} from '@tradeshift/elements';
import css from './file-uploader-input.css';

import '@tradeshift/elements.help-text';

customElementDefineHelper(
	'ts-file-uploader-input',
	class extends TSElement {
		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				rtl: { type: Boolean, reflect: true },
				disabled: { type: Boolean, reflect: true },
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
				hideFileTypeHelpText: {
					type: Boolean,
					attribute: 'hide-file-type-help-text'
				},
				hideMaxFileNumberHelpText: {
					type: Boolean,
					attribute: 'hide-max-file-number-help-text'
				},
				maxFileNumber: { type: Number, attribute: 'max-file-number' },
				fileUploadWrapper: {}
			};
		}

		constructor() {
			super();
			this.multiple = false;
			this.disableDragAndDrop = false;
			this.size = 'full';
			this.hideFileTypeHelpText = false;
			this.hideMaxFileSizeHelpText = false;
			this.hideMaxFileNumberHelpText = false;
			this.helpTextTitle = '';
			this.dragCounter = 0;
			this.handleUpload = this.handleUpload.bind(this);
			this.dragEnterHandler = this.dragEnterHandler.bind(this);
			this.dragOverHandler = this.dragOverHandler.bind(this);
			this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
			this.dropHandler = this.dropHandler.bind(this);
		}

		get dropBox() {
			return html`
				<div class="draggable-info drop">
					<div class="icon-wrapper">
						<div class="icon">
							<svg
								width="20px"
								height="20px"
								viewBox="0 0 16 16"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<g
									id="Symbols"
									stroke="none"
									stroke-width="1"
									fill="none"
									fill-rule="evenodd"
								>
									<g
										id="card/5.-File-card/drag-and-drop"
										transform="translate(-113.000000, -22.000000)"
										fill="#00B0FF"
									>
										<g id="5.-File-card">
											<g
												id="Content"
												transform="translate(113.000000, 19.000000)"
											>
												<g
													id="upload-icon"
													transform="translate(0.000000, 3.000000)"
												>
													<path
														d="M8.01904762,16 C6.55872286,16 5.21587914,15.6412734 3.99047619,14.9238095 C2.76507324,14.2063456 1.79365438,13.2349268 1.07619048,12.0095238 C0.358726571,10.7841209 0,9.44127714 0,7.98095238 C0,6.5333261 0.358726571,5.2000061 1.07619048,3.98095238 C1.79365438,2.76189867 2.76507324,1.79365438 3.99047619,1.07619048 C5.21587914,0.358726571 6.55872286,0 8.01904762,0 C9.4666739,0 10.7999939,0.358726571 12.0190476,1.07619048 C13.2381013,1.79365438 14.2063456,2.76189867 14.9238095,3.98095238 C15.6412734,5.2000061 16,6.5333261 16,7.98095238 C16,9.44127714 15.6412734,10.7841209 14.9238095,12.0095238 C14.2063456,13.2349268 13.2381013,14.2063456 12.0190476,14.9238095 C10.7999939,15.6412734 9.4666739,16 8.01904762,16 Z M8.91428571,13.1428571 L8.91428571,6.7047619 L11.7714286,9.61904762 L11.8857143,9.61904762 L13.1047619,8.36190476 C13.1301589,8.36190476 13.1428571,8.35238105 13.1428571,8.33333333 C13.1428571,8.31428562 13.1301589,8.3047619 13.1047619,8.3047619 L9.23809524,4.45714286 L8.91428571,4.11428571 L8.91428571,4.07619048 C8.91428571,4.063492 8.90793657,4.05714286 8.8952381,4.05714286 L8.83809524,4.05714286 L8.01904762,3.2 L7.92380952,3.2 L7.08571429,4.05714286 L6.7047619,4.45714286 L2.85714286,8.3047619 C2.84444438,8.3047619 2.83809524,8.31428562 2.83809524,8.33333333 C2.83809524,8.35238105 2.84444438,8.36190476 2.85714286,8.36190476 L4.07619048,9.61904762 L4.17142857,9.61904762 L7.08571429,6.66666667 L7.08571429,13.1428571 C7.08571429,13.1682541 7.09206343,13.1809524 7.1047619,13.1809524 L8.8952381,13.1809524 C8.90793657,13.1809524 8.91428571,13.1682541 8.91428571,13.1428571 Z"
														id="Icon"
													></path>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
					</div>
					Drop File
				</div>
			`;
		}

		get fileUploadInput() {
			return html`
				<div class="file-upload-button" ?data-disabled="${this.disabled}">
					<label>Select file</label>
					<span>SELECT</span>
					<input
						type="file"
						?disabled="${this.disabled}"
						?multiple="${this.multiple}"
						accept="${this.acceptAttrForFileInput}"
					/>
				</div>
			`;
		}

		get helpText() {
			const helpTextList = [];

			if (!this.hideFileTypeHelpText && this.acceptedFileExtensions) {
				const acceptedFileExtensions = this.acceptedFileExtensions
					.map(ext => ext.toUpperCase())
					.join(', ');
				helpTextList.push(`Allowed formats: ${acceptedFileExtensions}`);
			}

			if (
				this.multiple &&
				!this.hideMaxFileNumberHelpText &&
				this.maxFileNumber
			) {
				helpTextList.push(`Max ${this.maxFileNumber} files`);
			}

			return html`
				<ts-help-text
					title="${this.helpTextTitle}"
					messages="${JSON.stringify(helpTextList)}"
					?rtl="${this.rtl}"
				></ts-help-text>
			`;
		}

		render() {
			return html`
				<div
					?data-rtl="${this.rtl}"
					data-size="${this.size}"
					class="file-upload-wrapper drop"
				>
					${this.fileUploadInput} ${this.helpText} ${this.dropBox}
				</div>
			`;
		}

		firstUpdated(changedProperties) {
			this.shadowRoot
				.querySelector('input')
				.addEventListener('change', this.handleUpload);

			this.fileUploadWrapper = this.shadowRoot.querySelector(
				'.file-upload-wrapper'
			);
			this.fileUploadWrapper.addEventListener(
				'dragenter',
				this.dragEnterHandler,
				false
			);
			this.fileUploadWrapper.addEventListener(
				'dragover',
				this.dragOverHandler,
				false
			);
			this.fileUploadWrapper.addEventListener(
				'dragleave',
				this.dragLeaveHandler,
				false
			);
			this.fileUploadWrapper.addEventListener('drop', this.dropHandler, false);
		}

		get acceptAttrForFileInput() {
			return this.acceptedFileExtensions.map(ext => `.${ext}`).join(',');
		}

		handleUpload(e) {
			const event = new CustomEvent('change', {
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
					this.fileUploadWrapper.classList.add('dragover');
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
					this.fileUploadWrapper.classList.remove('dragover');
				}
			}
		}
		dropHandler(e) {
			if (!this.disabled && !this.disableDragAndDrop) {
				e.preventDefault();
				this.fileUploadWrapper.classList.remove('dragover');
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
);
