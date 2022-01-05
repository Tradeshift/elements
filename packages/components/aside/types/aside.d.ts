export interface TSAsideHTMLAttributes {
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Aside header title  */
	"data-title"?: string;

	/**  Show/hide aside  */
	"data-visible"?: boolean;

	/**  If it exist as an attribute, the aside would show a spinner in it with the provided value of this attribute as the message of it  */
	"data-busy"?: string;

	/**  Disable closing the aside with escape key  */
	"no-close-on-esc-key"?: boolean;

}

export interface TSAside {
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Aside header title  */
	title?: string;

	/**  Show/hide aside  */
	visible?: boolean;

	/**  If it exist as an attribute, the aside would show a spinner in it with the provided value of this attribute as the message of it  */
	busy?: string;

	/**  Disable closing the aside with escape key  */
	noCloseOnEscKey?: boolean;

}
