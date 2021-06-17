import '@tradeshift/elements.input';
import '@tradeshift/elements.help-text';
import { customElementDefineHelper, html, TSElement, unsafeCSS } from '@tradeshift/elements';
import css from './text-field.css';

export class TSTextField extends TSElement {
	constructor() {
		super();
		this.type = 'text';
		this.id = 'input-id';
		this.label = '';
		this.value = '';
		this.placeholder = '';
		this.iconStart = '';
		this.iconEnd = '';
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Label of the text field. If you need something more than simple string, use the label slot. */
			label: { type: String, reflect: true },
			/** Id of the text field  */
			id: { type: String, reflect: true },
			/** Value of the text field */
			value: { type: String, reflect: true },
			/** Pass type of the input element, if it's not multiline */
			type: { type: String, reflect: true },
			/** Placeholder of the text field */
			placeholder: { type: String, reflect: true },
			/** Array of messages to pass to help-text component. See help-text component for more info  */
			helpTextMessages: { type: Array, reflect: true, attribute: 'help-text-messages' },
			/** If you have more than one help text message , you should pass a title to it. See help-text component for more info  */
			helpTextTitle: { type: String, reflect: true, attribute: 'help-text-title' },
			/** To change the help text icon and style if needed. See help-text component for more info  */
			helpTextType: { type: String, reflect: true, attribute: 'help-text-type' },
			/** Error messages to show underneath of the input when it has error */
			errorMessages: { type: Array, reflect: true, attribute: 'error-messages' },
			/** Error title, if there are more than one error message */
			errorTitle: { type: String, reflect: true, attribute: 'error-title' },
			/** If the text field has an error, to show error messages and change the style of the input */
			hasError: { type: Boolean, reflect: true, attribute: 'has-error' },
			/** To show the asterisk in the label, not doing validation yet */
			required: { type: Boolean, reflect: true },
			/** Is the text field disabled? */
			disabled: { type: Boolean, reflect: true },
			/** Is the text field readonly? */
			readonly: { type: Boolean, reflect: true },
			/** Will show a textarea instead of an input */
			multiline: { type: Boolean, reflect: true },
			/** Direction 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Icon that appears at the beginning of the input (left in ltr direction) */
			iconStart: { type: String, reflect: true, attribute: 'icon-start' },
			/** Icon that appears at the end part of the input (end in ltr direction). Readonly and disabled state will show a lock icon instead. */
			iconEnd: { type: String, reflect: true, attribute: 'icon-end' }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	onInput(event) {
		/**
		 * Emitted onInput event of input/textarea
		 * @payload { value, originalEvent }
		 */
		this.dispatchCustomEvent('input', {
			value: event.target.value,
			id: this.id,
			originalEvent: event
		});
	}

	onChange(event) {
		/**
		 * Emitted onChange event of input/textarea
		 * @payload { value, id, originalEvent }
		 */
		this.dispatchCustomEvent('change', {
			value: event.target.value,
			id: this.id,
			originalEvent: event
		});
	}

	get labelHtml() {
		return html`
			<label for=${this.id}>
				<!-- If you want to have custom html in label, you can use this slot  -->
				<slot name="label"><span>${this.label}</span></slot>
				${this.required ? html`<span title="Required" class="required-asterisk">*</span>` : ''}
			</label>
		`;
	}

	get helpText() {
		if (!this.helpTextMessages) {
			return;
		}

		const messages = this.hasError ? this.errorMessages : this.helpTextMessages;
		const type = this.hasError ? 'error' : undefined;
		if (messages.length > 1) {
			const title = this.hasError ? this.errorTitle : this.helpTextTitle;
			return html`
				<ts-help-text
					type=${type}
					title=${title}
					.messages=${messages}
					?rtl=${this.direction === 'rtl'}
					?disabled=${this.disabled}
				></ts-help-text>
			`;
		}

		return html`<ts-help-text
			type=${type}
			.messages=${messages}
			?rtl=${this.direction === 'rtl'}
			?disabled=${this.disabled}
		></ts-help-text>`;
	}

	render() {
		return html`
			<div class="text-field-wrapper" dir="${this.direction}">
				${this.labelHtml}
				<!--
				 If you want to have the input/textarea in the light DOM, for example, to be able to access it in the form data,
				 you can pass the ts-input element with the input/textarea yourself.
				-->
				<slot name="ts-input">
					<ts-input
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						?has-error=${this.hasError}
						icon-start="${this.iconStart}"
						icon-end="${this.iconEnd}"
					>
						${this.multiline
							? html`
									<textarea
										id=${this.id}
										placeholder=${this.placeholder}
										?disabled=${this.disabled}
										?readonly=${this.readonly}
										rows="3"
										@input=${this.onInput}
										@change=${this.onChange}
									>
${this.value}</textarea
									>
							  `
							: html`
									<input
										id=${this.id}
										.value=${this.value}
										placeholder=${this.placeholder}
										type=${this.type}
										?disabled=${this.disabled}
										?readonly=${this.readonly}
										@input=${this.onInput}
										@change=${this.onChange}
									/>
							  `}
					</ts-input>
				</slot>
				${this.helpText}
			</div>
		`;
	}
}

customElementDefineHelper('ts-text-field', TSTextField);
