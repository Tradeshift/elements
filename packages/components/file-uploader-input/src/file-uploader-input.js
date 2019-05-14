import {
	TSElement,
	unsafeCSS,
	html,
	customElementDefineHelper
} from '@tradeshift/elements';
import css from './file-uploader-input.css';

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
				fileUploadWrapper: {}
			};
		}

		constructor() {
			super();
			this.multiple = false;
			this.disableDragAndDrop = false;
			this.size = 'full';
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
			const acceptedFileExtensions = this.acceptedFileExtensions
				.map(ext => ext.toUpperCase())
				.join(', ');
			return html`
				<label class="help-text">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 26 26"
						version="1.1"
						width="50px"
						height="50px"
					>
						<g id="surface1">
							<path
								class="info-icon"
								style="fill: #00B0FF;"
								d="M 13 1.1875 C 6.476563 1.1875 1.1875 6.476563 1.1875 13 C 1.1875 19.523438 6.476563 24.8125 13 24.8125 C 19.523438 24.8125 24.8125 19.523438 24.8125 13 C 24.8125 6.476563 19.523438 1.1875 13 1.1875 Z M 15.460938 19.496094 C 14.851563 19.734375 14.367188 19.917969 14.003906 20.042969 C 13.640625 20.167969 13.222656 20.230469 12.742188 20.230469 C 12.007813 20.230469 11.433594 20.050781 11.023438 19.691406 C 10.617188 19.335938 10.414063 18.878906 10.414063 18.324219 C 10.414063 18.109375 10.429688 17.890625 10.460938 17.667969 C 10.488281 17.441406 10.539063 17.191406 10.605469 16.90625 L 11.367188 14.21875 C 11.433594 13.960938 11.492188 13.71875 11.539063 13.488281 C 11.585938 13.257813 11.605469 13.046875 11.605469 12.855469 C 11.605469 12.515625 11.535156 12.273438 11.394531 12.140625 C 11.25 12.003906 10.980469 11.9375 10.582031 11.9375 C 10.386719 11.9375 10.183594 11.96875 9.976563 12.027344 C 9.769531 12.089844 9.59375 12.148438 9.445313 12.203125 L 9.648438 11.375 C 10.144531 11.171875 10.621094 11 11.078125 10.855469 C 11.53125 10.710938 11.964844 10.636719 12.367188 10.636719 C 13.097656 10.636719 13.664063 10.816406 14.058594 11.167969 C 14.453125 11.519531 14.652344 11.980469 14.652344 12.542969 C 14.652344 12.660156 14.640625 12.867188 14.613281 13.160156 C 14.585938 13.453125 14.535156 13.722656 14.460938 13.972656 L 13.703125 16.652344 C 13.640625 16.867188 13.585938 17.113281 13.535156 17.386719 C 13.488281 17.660156 13.464844 17.871094 13.464844 18.011719 C 13.464844 18.367188 13.542969 18.613281 13.703125 18.742188 C 13.859375 18.871094 14.136719 18.933594 14.53125 18.933594 C 14.714844 18.933594 14.921875 18.902344 15.15625 18.839844 C 15.386719 18.773438 15.554688 18.71875 15.660156 18.667969 Z M 15.324219 8.617188 C 14.972656 8.945313 14.546875 9.109375 14.050781 9.109375 C 13.554688 9.109375 13.125 8.945313 12.769531 8.617188 C 12.414063 8.289063 12.238281 7.890625 12.238281 7.425781 C 12.238281 6.960938 12.417969 6.558594 12.769531 6.226563 C 13.125 5.894531 13.554688 5.730469 14.050781 5.730469 C 14.546875 5.730469 14.972656 5.894531 15.324219 6.226563 C 15.679688 6.558594 15.855469 6.960938 15.855469 7.425781 C 15.855469 7.890625 15.679688 8.289063 15.324219 8.617188 Z "
							/>
						</g>
					</svg>
					Allowed formats: ${acceptedFileExtensions}
				</label>
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
			let event = new CustomEvent('change', {
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
