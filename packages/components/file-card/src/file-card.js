import {
	TSElement,
	unsafeCSS,
	html,
	customElementDefineHelper
} from '@tradeshift/elements';
import '@tradeshift/elements.typography';
import '@tradeshift/elements.card';
import '@tradeshift/elements.progress-bar';
import '@tradeshift/elements.file-size';
import css from './file-card.css';

customElementDefineHelper(
	'ts-file-card',
	class extends TSElement {
		constructor() {
			super();
			this.state = 'upload';
			this.size = 'full';
			this.removable = false;
			this.toggleRemoveActionHoverState = this.toggleRemoveActionHoverState.bind(
				this
			);
			this.toggleDownloadActionHoverState = this.toggleDownloadActionHoverState.bind(
				this
			);
			this.removeFile = this.removeFile.bind(this);
			this.downloadFile = this.downloadFile.bind(this);
		}

		static get styles() {
			return [TSElement.styles, unsafeCSS(css)];
		}

		static get properties() {
			return {
				state: { type: String, reflect: true },
				fileObject: { type: Object, attribute: 'file-object' },
				rtl: { type: Boolean, reflect: true },
				removable: { type: Boolean, reflect: true },
				size: { type: String, reflect: true },
				errorMessage: {
					type: String,
					reflect: true,
					attribute: 'error-message'
				}
			};
		}

		get cardType() {
			const cardTypes = {
				uploading: 'focus',
				download: 'default',
				failed: 'failed'
			};
			return cardTypes[this.state];
		}

		get errorMessages() {
			if (this.state === 'failed') {
				const message = this.errorMessage;
				return html`
					<ts-typography
						class="error-message"
						text="${message}"
						color="error"
						variant="subtitle"
						no-wrap
					></ts-typography>
				`;
			}
		}

		get fileIcon() {
			return html`
				<span class="file-icon-wrapper icon-wrapper">
					<!--TODO: use icon components-->
					<svg
						class="file-icon"
						width="32px"
						height="42px"
						viewBox="0 0 32 42"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<g id="Symbols" stroke-width="1">
							<g
								id="card/5.-File-card/mouseover"
								transform="translate(-9.000000, -9.000000)"
							>
								<g id="5.-File-card">
									<g id="File-icon" transform="translate(10.000000, 10.000000)">
										<path
											d="M19.5667631,-0.5 L29.5322581,9.79767818 L29.5322581,38.0952381 C29.5322581,39.3654698 28.5111819,40.5 27.3244782,40.5 L1.70777989,40.5 C0.521076133,40.5 -0.5,39.3654698 -0.5,38.0952381 L-0.5,1.9047619 C-0.5,0.634530207 0.521076133,-0.5 1.70777989,-0.5 L19.5667631,-0.5 Z"
											id="outline"
										></path>
										<path
											d="M19.3548387,0 L29.9943074,11 L21.3186802,11 C20.2340805,11 19.3548387,10.0430649 19.3548387,8.8660465 L19.3548387,0 L19.3548387,0 Z"
											id="fold"
										></path>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</span>
			`;
		}

		get progressBar() {
			if (this.state === 'uploading') {
				return html`
					<ts-progress-bar class="progress-bar" indeterminate></ts-progress-bar>
				`;
			}
		}

		get actionIcons() {
			return html`
				<div>
					<span class="remove-action action-icon-wrapper icon-wrapper">
						<svg
							class="action-icon"
							width="16px"
							height="16px"
							viewBox="0 0 16 16"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g id="Symbols" stroke="none" stroke-width="1">
								<g
									id="card/5.-File-card/standard"
									transform="translate(-262.000000, -22.000000)"
								>
									<g id="5.-File-card">
										<g
											id="icon/UI-library/clear"
											transform="translate(258.000000, 18.000000)"
										>
											<path
												d="M4,12 C4,7.581722 7.59071231,4 12,4 C16.418278,4 20,7.59071231 20,12 C20,16.418278 16.4092877,20 12,20 C7.581722,20 4,16.4092877 4,12 Z M12,13.1313708 L15.0343146,16.1656854 L16.1656854,15.0343146 L13.1313708,12 L16.1656854,8.96568542 L15.0343146,7.83431458 L12,10.8686292 L8.96568542,7.83431458 L7.83431458,8.96568542 L10.8686292,12 L7.83431458,15.0343146 L8.96568542,16.1656854 L12,13.1313708 Z"
												id="Icon"
											></path>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</span>
					<span class="download-action action-icon-wrapper icon-wrapper">
						<svg
							class="action-icon"
							width="15px"
							height="16px"
							viewBox="0 0 15 16"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
						>
							<g id="Components" stroke="none" stroke-width="1">
								<g
									id="New-Specs"
									transform="translate(-1002.000000, -1137.000000)"
								>
									<g
										id="Group-5-Copy-6"
										transform="translate(739.000000, 1085.000000)"
									>
										<g
											id="card/5.-File-card/normal"
											transform="translate(0.000000, 30.000000)"
										>
											<g id="5.-File-card">
												<g
													id="icon/UI-library/download"
													transform="translate(258.000000, 18.000000)"
												>
													<path
														d="M12.1590909,17.3636364 C11.9999992,17.3636364 11.8553726,17.2840917 11.7252066,17.125 L7.34297521,11.571281 C7.25619791,11.4555779 7.21280992,11.3615706 7.21280992,11.2892562 C7.21280992,11.1012387 7.35020524,11.0072314 7.625,11.0072314 L10.7272727,11.0072314 L10.7272727,4 L13.5909091,4 L13.5909091,11.0072314 L16.6931818,11.0072314 C16.9679766,11.0072314 17.1053719,11.1012387 17.1053719,11.2892562 C17.1053719,11.3615706 17.0619839,11.4555779 16.9752066,11.571281 L12.5929752,17.125 C12.4772721,17.2840917 12.3326455,17.3636364 12.1590909,17.3636364 Z M18.8409091,17.8409091 C18.971075,17.8409091 19.0831607,17.8879128 19.1771694,17.9819215 C19.2711782,18.0759302 19.3181818,18.1880159 19.3181818,18.3181818 L19.3181818,19.2727273 C19.3181818,19.4028932 19.2711782,19.5149789 19.1771694,19.6089876 C19.0831607,19.7029963 18.971075,19.75 18.8409091,19.75 L5.47727273,19.75 C5.34710679,19.75 5.23502113,19.7029963 5.1410124,19.6089876 C5.04700366,19.5149789 5,19.4028932 5,19.2727273 L5,18.3181818 C5,18.1880159 5.04700366,18.0759302 5.1410124,17.9819215 C5.23502113,17.8879128 5.34710679,17.8409091 5.47727273,17.8409091 L18.8409091,17.8409091 Z"
														id="Icon"
													></path>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</svg>
					</span>
				</div>
			`;
		}

		get fileInformation() {
			if (this.state === 'download') {
				const fileExtension = this.fileObject.name
					.split('.')
					.pop()
					.toUpperCase();

				return html`
					<div class="file-information">
						<ts-file-size size="${this.fileObject.size}"></ts-file-size>
						<ts-typography
							text="${`| ${fileExtension} Document`}"
							variant="subtitle"
						></ts-typography>
					</div>
				`;
			}
		}

		get actionMessage() {
			return html`
				<ts-typography
					class="remove-action-message"
					text="Remove"
					color="action"
					variant="subtitle"
				></ts-typography>
				<ts-typography
					class="download-action-message"
					text="Download"
					color="action"
					variant="subtitle"
				></ts-typography>
			`;
		}

		render() {
			return html`
				<div
					?data-removable="${this.removable}"
					class="file-card-wrapper state-${this.state}"
				>
					<ts-card
						type="${this.cardType}"
						orientation="horizontal"
						?rtl="${this.rtl}"
						data-size="${this.size}"
					>
						${this.fileIcon}
						<div class="content">
							<ts-typography
								text="${this.fileObject.name}"
								class="file-name"
								variant="title"
								no-wrap
							></ts-typography>
							${this.progressBar} ${this.fileInformation} ${this.errorMessages}
							${this.actionMessage}
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

		connectedCallback() {
			super.connectedCallback();
			document.addEventListener('readystatechange', this.handleChange);
		}

		disconnectedCallback() {
			document.removeEventListener('readystatechange', this.handleChange);
			super.disconnectedCallback();
		}

		removeFile() {
			if (this.removable) {
				const event = new CustomEvent('remove', {
					detail: {
						file: this.fileObject
					},
					bubbles: true,
					composed: true
				});

				this.dispatchEvent(event);
			}
		}

		downloadFile() {
			if (this.state === 'download') {
				const event = new CustomEvent('remove', {
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
			this.shadowRoot
				.querySelector('.file-card-wrapper')
				.classList.toggle('remove-action-hovered');
		}

		toggleDownloadActionHoverState() {
			this.shadowRoot
				.querySelector('.file-card-wrapper')
				.classList.toggle('download-action-hovered');
		}

		handleRemoveActionEvents() {
			this.shadowRoot
				.querySelector('.remove-action')
				.addEventListener(
					'mouseenter',
					this.toggleRemoveActionHoverState,
					false
				);
			this.shadowRoot
				.querySelector('.remove-action')
				.addEventListener(
					'mouseleave',
					this.toggleRemoveActionHoverState,
					false
				);

			this.shadowRoot
				.querySelector('.remove-action')
				.addEventListener('click', this.removeFile);
		}

		handleDownloadActionEvents() {
			const selectors = ['.content', '.file-icon-wrapper', '.download-action'];
			selectors.forEach(selector => {
				this.shadowRoot
					.querySelector(selector)
					.addEventListener(
						'mouseenter',
						this.toggleDownloadActionHoverState,
						false
					);

				this.shadowRoot
					.querySelector(selector)
					.addEventListener(
						'mouseleave',
						this.toggleDownloadActionHoverState,
						false
					);

				this.shadowRoot
					.querySelector(selector)
					.addEventListener('click', this.downloadFile);
			}, this);
		}
	}
);
