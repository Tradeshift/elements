import { TSElement, unsafeCSS, html, customElementDefineHelper, validateSlottedNodes } from '@tradeshift/elements';
import css from './tabs.css';
import { customEventNames } from './utils';

import '@tradeshift/elements.icon';
import '@tradeshift/elements.typography';
import '@tradeshift/elements.tab';

export class TSTabs extends TSElement {
	constructor() {
		super();
		this.tabs = [];
	}

	static get styles() {
		return [TSElement.styles, unsafeCSS(css)];
	}

	static get properties() {
		return {
			dir: { type: String, reflect: true }
		};
	}

	get direction() {
		return this.dir ? this.dir : this.bodyDir;
	}

	tabClickHandler(tab, index) {
		const tabs = this.directChildrenTabs;
		for (let i = 0; i < tabs.length; ++i) {
			const curTab = tabs[i];
			const wasSelected = curTab.getAttribute('selected');
			if (wasSelected !== null && i !== index) {
				// reflect the change of selected attribute on the component to hide the content
				curTab.removeAttribute('selected');
				// deselect the tab in header
				delete this.tabs[i].selected;
			} else if (i === index) {
				// reflect the change of selected attribute on the component to show the content
				curTab.setAttribute('selected', 'selected');
				// select the tab in header
				this.tabs[i].selected = true;
			}
		}
		this.dispatchCustomEvent(customEventNames.TAB_CLICK, { tab, index });
		this.requestUpdate();
	}

	iconTemplate(tab) {
		if (!tab.icon) {
			return '';
		}
		const type = tab.icon === 'ada' ? 'suggested' : 'default';
		return html` <ts-icon icon="${tab.icon}" type="${type}" size="medium"></ts-icon> `;
	}

	badgeTemplate(tab) {
		if (!tab.counter) {
			return '';
		}
		return html` <em class="badge">${tab.counter}</em> `;
	}

	tabTemplate(tab, index) {
		/* eslint-disable lit/no-template-bind */
		return html`
			<button ?selected="${tab.selected}" @click="${() => this.tabClickHandler(tab, index)}">
				${this.iconTemplate(tab)}
				<ts-typography text="${tab.label}" variant="semi-bold"></ts-typography>
				${this.badgeTemplate(tab)}
			</button>
		`;
		/* eslint-enable */
	}

	get directChildrenTabs() {
		const tabs = Array.from(this.shadowRoot.host.querySelectorAll('ts-tab'));
		return tabs.filter(tab => tab.parentNode === this);
	}

	generateHeaderTabs() {
		this.tabs = this.directChildrenTabs.map(tabNode => {
			return {
				label: tabNode.getAttribute('label'),
				icon: tabNode.getAttribute('icon'),
				counter: tabNode.getAttribute('counter'),
				selected: tabNode.getAttribute('selected') !== null
			};
		});
		this.requestUpdate();
	}

	slotChangeHandler(e) {
		const slottedNodes = e.currentTarget.assignedNodes();
		validateSlottedNodes(this.tagName, slottedNodes, ['TS-TAB']);
		this.generateHeaderTabs();
	}

	onTabPropChange(e) {
		// stop event bubbling to prevent any parent tabs from switch
		if (e) {
			e.stopImmediatePropagation();
		}
		this.generateHeaderTabs();
	}

	firstUpdated() {
		// listen to prop change on ts-tab and rerender the tabs header
		this.shadowRoot.host.addEventListener('tab-prop-change', this.onTabPropChange);
	}

	disconnectedCallback() {
		this.shadowRoot.host.removeEventListener('tab-prop-change', this.onTabPropChange);
	}

	render() {
		return html`
			<header class="tabs-wrapper" dir="${this.direction}">
				${this.tabs.map((tab, index) => html` ${this.tabTemplate(tab, index)} `)}
			</header>
			<div class="tabs-content-wrapper">
				<slot @slotchange="${this.slotChangeHandler}"></slot>
			</div>
		`;
	}
}

customElementDefineHelper('ts-tabs', TSTabs);
