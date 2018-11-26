(function () {
  'use strict';

  const Base = function Base() {
    let SuperElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
    let name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Base';
    return class extends SuperElement {
      constructor() {
        super();
        this.name = name;
        this.attachShadow({
          mode: 'open'
        });
      }

      connectedCallback() {
        if (this.isConnected) {
          this.classes();
        }
      }

      attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
      }

      template(html, $template) {
        this[$template] = document.createElement('template');
        this[$template].innerHTML = html;
        this.shadowRoot.appendChild(this[$template].content.cloneNode(true));
      }

      classes() {
        this.classList.add('ts-component', `ts-${this.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`);
      }

      styles(stylesheet) {
        const template = document.createElement('template');
        template.innerHTML = `
				<style>
					:host {
						display: none;
					}
				</style>
				<link rel="stylesheet" href="common.css">
				<link rel="stylesheet" href="${stylesheet}">
				<script> </script>
			`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }

    };
  };
  //# sourceMappingURL=core.mjs.map

  const _ref = [Symbol('template'), Symbol('type'), Symbol('grouped')],
        $template = _ref[0],
        $type = _ref[1],
        $grouped = _ref[2];

  class Button extends Base(HTMLElement, 'Button') {
    static get observedAttributes() {
      return ['type', 'grouped'];
    }

    constructor() {
      super();
      this.styles('button.css');
      this.template(`
			<button>
				<span>
					<slot></slot>
				</span>
			</button>
		`, $template);
      this.type = this.getAttribute('type');
      this.grouped = this.getAttribute('grouped');
    }

    get type() {
      return this[$type];
    }

    set type(type) {
      if (type === this[$type]) {
        return;
      }

      this[$type] = type;
      this[type ? 'setAttribute' : 'removeAttribute']('type', type);
      this.shadowRoot.querySelector('button > span').classList.toggle('title', this.type !== 'text');
    }

    get grouped() {
      return this[$grouped];
    }

    set grouped(grouped) {
      if (grouped === this[$grouped]) {
        return;
      }

      this[$grouped] = grouped;
      this[grouped ? 'setAttribute' : 'removeAttribute']('grouped', grouped);
    }

  }

  customElements.define('ts-button', Button);
  //# sourceMappingURL=button.mjs.map

  const _ref$1 = [Symbol('template'), Symbol('groupButtons')],
        $template$1 = _ref$1[0],
        $groupButtons = _ref$1[1];

  class ButtonGroup extends Base(HTMLElement, 'ButtonGroup') {
    static get observedAttributes() {
      return [];
    }

    constructor() {
      super();
      this.styles('/button-group/button-group.css');
      this.template(`
			<section>
				<slot></slot>
			</section>
		`, $template$1);
      this[$groupButtons] = this[$groupButtons].bind(this);
      this.shadowRoot.querySelector('slot').addEventListener('slotchange', this[$groupButtons]);
    }

    connectedCallback() {
      if (this.isConnected) {
        this[$groupButtons]();
      }
    }

    [$groupButtons]() {
      Array.from(this.querySelectorAll('ts-button')).forEach(button => {
        button.grouped = true;
      });
    }

  }

  customElements.define('ts-button-group', ButtonGroup);
  //# sourceMappingURL=button-group.mjs.map

  const _ref$2 = [Symbol('template'), Symbol('decorateSlots')],
        $template$2 = _ref$2[0],
        $decorateSlots = _ref$2[1];

  class Root extends Base(HTMLBodyElement, 'Root') {
    static get observedAttributes() {
      return [];
    }

    constructor() {
      super();
      this.styles('/root/root.css');
      this.template(`
			<slot name="header" class="hidden"></slot>
			<slot name="sidebar-left" class="hidden"></slot>
			<section class="content">
				<slot name="sidebar-inner-left" class="hidden"></slot>
				<main>
					<slot></slot>
				</main>
				<slot name="sidebar-inner-right" class="hidden"></slot>
			</section>
			<slot name="sidebar-right" class="hidden"></slot>
			<slot name="footer" class="hidden"></slot>
		`, $template$2);
      this[$decorateSlots] = this[$decorateSlots].bind(this);
      this.shadowRoot.querySelectorAll('slot[name]').forEach(slot => {
        slot.classList.add(slot.getAttribute('name'));
        slot.addEventListener('slotchange', e => this[$decorateSlots](slot, e));
      });
    }

    [$decorateSlots](slot, e) {
      const assignedNodes = slot.assignedNodes();
      const showSlot = assignedNodes && assignedNodes.length;
      slot.classList.toggle('hidden', !showSlot);
      this.classList.toggle(`ts-has-${slot.getAttribute('name')}`, showSlot);
    }

  }

  customElements.define('ts-root', Root, {
    extends: 'body'
  });
  //# sourceMappingURL=root.mjs.map

}());
//# sourceMappingURL=bundle.js.map
