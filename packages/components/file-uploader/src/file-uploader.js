import { TSElement, unsafeCSS, html } from '@tradeshift/elements';
import css from './file-uploader.css';
import '@tradeshift/elements.file-uploader-input';
import '@tradeshift/elements.file-card';

import { uploadFile } from './utils/upload-file.js';

customElements.define(
	'ts-file-uploader',
	class extends TSElement {
		constructor() {
			super();
			this.state = 'upload';
			this.size = 'full';
			this.files = [];
			this.multiple = false;
			this.dragCounter = 0;
			this.handleUpload = this.handleUpload.bind(this);
		}

		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				state: { type: String, reflect: true },
				endpoint: { type: String, reflect: true },
				acceptedFileExtensions: {
					type: Array,
					reflect: true,
					attribute: 'accepted-file-extensions'
				},
				rtl: { type: Boolean, reflect: true },
				maxFileSize: {
					type: Number,
					reflect: true,
					attribute: 'max-file-size'
				},
				files: { type: Array, reflect: true },
				disabled: { type: Boolean, reflect: true },
				multiple: { type: Boolean, reflect: true },
				size: { type: String, reflect: true }
			};
		}

		get maxFileSizeInBytes() {
			return this.maxFileSize * 1024;
		}

		get fileCards() {
			return this.files.map((file, index) => {
				return html`
					<ts-file-card
						file-object="${JSON.stringify(file)}"
						state="${file.state}"
						size="${this.size}"
						accepted-file-extensions="${JSON.stringify(
							this.acceptedFileExtensions
						)}"
						error-message="${this.getErrorMessages(
							file.isFileSizeValid,
							file.isFileTypeValid,
							file.errorMessage
						)}"
						?data-rtl="${this.rtl}"
						@remove="${e => {
							// eslint-disable-line lit/no-template-bind
							this.removeFile(e, index);
						}}"
						@download="${e => {
							// eslint-disable-line lit/no-template-bind
							this.downloadFile(e, index);
						}}"
					></ts-file-card>
				`;
			});
		}

		render() {
			return html`
				${this.state === 'upload' || this.multiple
					? html`
							<ts-file-uploader-input
								size="${this.size}"
								?rtl="${this.rtl}"
								?disabled="${this.disabled}"
								?multiple="${this.multiple}"
								accepted-file-extensions="${JSON.stringify(
									this.acceptedFileExtensions
								)}"
								max-file-size="${this.maxFileSizeInBytes}"
								@change="${this.handleUpload}"
							></ts-file-uploader-input>
					  `
					: ''}
				${this.files ? this.fileCards : ''}
			`;
		}

		removeFile(e, index) {}

		handleUpload(e) {
			this.state = 'uploading';

			if (e.detail.files) {
				for (let i = 0; i < e.detail.files.length; i++) {
					const file = e.detail.files[i];
					const index = this.files.length;

					const isFileSizeValid = this.isFileSizeValid(file.size);
					const isFileTypeValid = this.isFileTypeValid(
						file.name.split('.').pop()
					);
					const isValid = isFileSizeValid && isFileTypeValid;
					console.log('const isFileTypeValid', isFileTypeValid);
					this.files.push({
						name: file.name,
						size: file.size,
						isValid,
						isFileSizeValid,
						isFileTypeValid,
						state: 'uploading'
					});
					if (isValid) {
						uploadFile(file, this.endpoint)
							.then(response => {
								console.log('then', response);
								if (response.ok) {
									this.files[index].state = 'download';
								} else {
									return Promise.reject(response);
								}
							})
							.catch(err => {
								this.files[index].state = 'failed';
								const errorMessages = {
									401: 'Unauthorised',
									403: 'Forbidden',
									404: 'Not found'
								};
								this.files[index].errorMessage = errorMessages[err.status];
								this.requestUpdate();
							});
					} else {
						this.files[index].state = 'failed';
					}
				}
			}
		}

		isFileSizeValid(fileSize) {
			return fileSize <= this.maxFileSizeInBytes;
		}

		isFileTypeValid(fileType) {
			return this.acceptedFileExtensions.indexOf(fileType) > -1;
		}

		getErrorMessages(isFileSizeValid, isFileTypeValid, customError) {
			let errorMsg;
			const errorMessages = {
				size: 'File is too big',
				type: 'File type is not accepted',
				customError
			};
			if (customError) {
				errorMsg = errorMessages.customError;
			} else if (isFileSizeValid) {
				errorMsg = errorMessages.size;
			} else if (isFileTypeValid) {
				errorMsg = errorMessages.type;
			}

			return errorMsg || '';
		}
	}
);
