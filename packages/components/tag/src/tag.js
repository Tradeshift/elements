import { TSElement, unsafeCSS, html, customElementDefineHelper } from '@tradeshift/elements';
import '@tradeshift/elements.icon';
import { closeClear, lock } from '@tradeshift/elements.icon/lib/assets/icons';
import css from './tag.css';

export class TSTag extends TSElement {
	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			/** Text direction: 'rtl' or 'ltr' */
			dir: { type: String, reflect: true },
			/** Type: success, warning, warning-lite, danger, blue, blue-lite. Affects background and foreground colors */
			type: { type: String, reflect: true },
			/** Can the item be deleted? Displays a remove icon at the end of the tag */
			deletable: { type: Boolean, reflect: true },
			/** Should the tag look like clicking it triggers an action? Adds a pointer cursor and hover effect */
			clickable: { type: Boolean, reflect: true },
			/** Is the item locked? Displays a lock icon at the end of the tag */
			locked: { type: Boolean, reflect: true },
			/** Array of labels or 'keys' */
			labels: { type: Array, reflect: true },
			/** Array of values */
			values: { type: Array, reflect: true },
			/** Show busy/loading animation */
			busy: { type: Boolean, reflect: true }
		};
	}

	get direction() {
		return this.dir || this.bodyDir;
	}

	handleDeleteEvent(event) {
		/** constraint event; do not trigger events up the DOM tree */
		event.stopPropagation();
		if (!this.busy) {
			/**
			 * Emitted when the delete icon is clicked, if the tag is not busy
			 * @payload event
			 */
			this.dispatchCustomEvent('delete-tag', event);
		}
	}

	handleClickEvent(event) {
		if (!this.busy) {
			/**
			 * Emitted when the tag is clicked
			 * @payload event
			 */
			this.dispatchCustomEvent('click-tag', event);
		}
	}

	_hasBothLabelsAndValues() {
		return Array.isArray(this.labels) && this.labels.length && Array.isArray(this.values) && this.values.length;
	}

	get classes() {
		const classList = ['container', this._hasBothLabelsAndValues() && 'label-value'];
		return classList.filter(classname => classname).join(' ');
	}

	get _icons() {
		if (this.locked) {
			return html`
				<span class="icon">
					<ts-icon icon="${lock}" size="large"></ts-icon>
				</span>
			`;
		}

		if (this.deletable) {
			return html`
				<span class="icon action" @click=${this.handleDeleteEvent}>
					<ts-icon icon="${closeClear}" size="large"></ts-icon>
				</span>
			`;
		}

		return null;
	}

	get _labels() {
		if (this.labels) {
			return html`<span class="label">${this.labels.join(', ')}</span>`;
		}
		return null;
	}

	get _separator() {
		return this._hasBothLabelsAndValues() ? html`<span>:&nbsp;</span>` : null;
	}

	get _values() {
		if (this.values) {
			return html`<span class="value">${this.values.join(', ')}</span>`;
		}
		return null;
	}

	render() {
		// prettier-ignore
		return html`<div
			dir=${this.direction}
			class=${this.classes}
			@click=${this.handleClickEvent}
			@keyup=${this.handleClickEvent}
		>
			${this._labels}
			${this._separator}
			${this._values}
			${this._icons}
		</div>`;
	}
}

customElementDefineHelper('ts-tag', TSTag);
