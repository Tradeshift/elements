export interface TSModalHTMLAttributes {
	/**  Direction 'rtl' or 'ltr'  */
	"data-dir"?: string;

	/**  Size of the modal. Available variants: 'large', 'medium', 'small'  */
	"data-size"?: string;

	/**  Modal header text  */
	"data-title"?: string;

	/**  Show/hide the modal  */
	"data-visible"?: boolean;

	/**  Disable the functionality to close the modal on press of escape key  */
	"no-close-on-esc-key"?: boolean;

	/**  Show/hide the title of the modal  */
	"hide-header"?: boolean;

	/**  Add/remove standard paddings to the main content  */
	"no-padding"?: boolean;

}

export interface TSModal {
	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Size of the modal. Available variants: 'large', 'medium', 'small'  */
	size?: string;

	/**  Modal header text  */
	title?: string;

	/**  Show/hide the modal  */
	visible?: boolean;

	/**  Disable the functionality to close the modal on press of escape key  */
	noCloseOnEscKey?: boolean;

	/**  Show/hide the title of the modal  */
	hideHeader?: boolean;

	/**  Add/remove standard paddings to the main content  */
	noPadding?: boolean;

}
