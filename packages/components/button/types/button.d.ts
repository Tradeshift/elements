export interface TSButtonHTMLAttributes {
	/**  Button type to have different style `primary`, `secondary`, `text`, `accept`, `warning`, `danger`  */
	type?: string;

	/**  Size of the button, `macro`, `micro`  */
	size?: string;

	/**  Show busy/loading animation  */
	busy?: boolean;

	/**  Icon name, see the list of available icons in ts-icon component. Also note that it will hide the slot content unless the type is text  */
	icon?: string;

	/**  Determine if the button is disabled. `button-click` event won't be dispatched  */
	disabled?: boolean;

	/**  Make the button focused  */
	focused?: boolean;

	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Make the button take the full width of the container  */
	"full-width"?: boolean;

}

export interface TSButton {
	/**  Button type to have different style `primary`, `secondary`, `text`, `accept`, `warning`, `danger`  */
	type?: string;

	/**  Size of the button, `macro`, `micro`  */
	size?: string;

	/**  Show busy/loading animation  */
	busy?: boolean;

	/**  Icon name, see the list of available icons in ts-icon component. Also note that it will hide the slot content unless the type is text  */
	icon?: string;

	/**  Determine if the button is disabled. `button-click` event won't be dispatched  */
	disabled?: boolean;

	/**  Make the button focused  */
	focused?: boolean;

	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Make the button take the full width of the container  */
	fullWidth?: boolean;

}
