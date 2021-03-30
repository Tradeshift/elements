import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import css from './radio-group.css';
import { getDirectionByKey, customEventNames, directionTypes, getNextElementIndex } from './utils';

import '@tradeshift/elements.radio';

export class TSRadioGroup extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Value of currently chosen ts-radio node */
			value: { type: String, reflect: true },
			/** Title of radio group */
			title: { type: String, reflect: true },
			/** Index of checked ts-radio node */
			index: { type: Number, reflect: true },
			/** Is group currently focused for keyboard input */
			focused: { type: Boolean, reflect: true },
			/** Direction 'rtl' or 'ltr' */
			dir: { type: String, reflect: true }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	get radioElements() {
		return Array.from(this.shadowRoot.host.querySelectorAll('ts-radio')).filter(tab => tab.parentNode === this);
	}

	toggle(radioElement) {
		if (!radioElement || radioElement.disabled) {
			return;
		}

		for (const radio of this.radios) {
			radio.checked = radio === radioElement;
			if (radio.checked) {
				const index = this.radios.indexOf(radio);
				const value = radio.value;
				this.index = index;
				this.value = value;
				/**
				 * Emitted on radio element select
				 * @payload { radio, index, value }
				 */
				this.dispatchCustomEvent('radio-selected', { radio, index, value });
			}
		}
	}

	firstUpdated() {
		this.shadowRoot.host.addEventListener(customEventNames.RADIO_CLICK, this.handleRadioClick);
		this.shadowRoot.host.addEventListener(customEventNames.RADIO_FOCUS, this.handleFocus);
		this.shadowRoot.host.addEventListener(customEventNames.RADIO_BLUR, this.handleBlur);
		this.handleSlotChange();
	}

	disconnectedCallback() {
		this.shadowRoot.host.removeEventListener(customEventNames.RADIO_CLICK, this.handleRadioClick);
		this.shadowRoot.host.removeEventListener(customEventNames.RADIO_FOCUS, this.handleFocus);
		this.shadowRoot.host.removeEventListener(customEventNames.RADIO_BLUR, this.handleBlur);
	}

	handleRadioClick(e) {
		e.stopPropagation();
		this.toggle(e.target);
	}

	handleFocus(e) {
		e.stopPropagation();
		this.focused = true;
	}

	handleBlur(e) {
		e.stopPropagation();
		this.focused = false;
	}

	handleSlotChange() {
		this.radios = this.radioElements;

		this.index = 0;
		for (let i = 0; i < this.radios.length; i++) {
			if (this.radios[i].checked) {
				this.index = i;
			}
		}

		this.toggle(this.radios[this.index]);
	}

	handleKeyDown(e) {
		if (this.radios.length === 0) {
			return;
		}

		const enabledRadios = this.radios.filter(checkbox => !checkbox.disabled);
		if (enabledRadios.length === 0) {
			return;
		}

		const direction = getDirectionByKey(e.code);
		if (direction === directionTypes.NONE) {
			return;
		}

		this.toggle(this.radios[this.findNextActiveElementIndex(direction, this.index)]);
		e.preventDefault();
		e.stopPropagation();
	}

	findNextActiveElementIndex(direction, index) {
		const nextIndex = getNextElementIndex(direction, index, this.radios.length);
		if (this.radios[nextIndex].disabled) {
			return this.findNextActiveElementIndex(direction, nextIndex);
		}
		return nextIndex;
	}

	render() {
		return html`
			<fieldset
				role="radiogroup"
				tabindex="0"
				@keydown="${this.handleKeyDown}"
				@focus="${this.handleFocus}"
				@blur="${this.handleBlur}"
			>
				${this.title ? html` <legend>${this.title}</legend> ` : ''}
				<div class="frame">
					<!-- All ts-radio elements should be wrapped by ts-radio-group to be grouped together	-->
					<slot @slotchange="${this.handleSlotChange}"></slot>
				</div>
			</fieldset>
		`;
	}
}

customElementDefineHelper('ts-radio-group', TSRadioGroup);
