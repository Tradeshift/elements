export interface TSButtonHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Button type to have different style `primary`, `secondary`, `text`, `accept`, `warning`, `danger`  */
	type?: string;

	/**  Size of the button, `macro`, `micro`  */
	size?: string;

	/**  Show busy/loading animation  */
	busy?: boolean | 'true' | 'false';

	/**  Icon name from the list of available icons in ts-icon component or the inline svg string. Also note that it will hide the slot content unless the type is text  */
	icon?: string;

	/**  Url to svg asset for an icon. Also note that it will hide the slot content unless the type is text  */
	"icon-src"?: string;

	/**  Determine if the button is disabled. `button-click` event won't be dispatched  */
	disabled?: boolean | 'true' | 'false';

	/**  Make the button focused  */
	focused?: boolean | 'true' | 'false';

	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Make the button take the full width of the container  */
	"full-width"?: boolean | 'true' | 'false';

}

export interface TSButton {
	/**  Button type to have different style `primary`, `secondary`, `text`, `accept`, `warning`, `danger`  */
	type?: string;

	/**  Size of the button, `macro`, `micro`  */
	size?: string;

	/**  Show busy/loading animation  */
	busy?: boolean;

	/**  Icon name from the list of available icons in ts-icon component or the inline svg string. Also note that it will hide the slot content unless the type is text  */
	icon?: string;

	/**  Url to svg asset for an icon. Also note that it will hide the slot content unless the type is text  */
	iconSrc?: string;

	/**  Determine if the button is disabled. `button-click` event won't be dispatched  */
	disabled?: boolean;

	/**  Make the button focused  */
	focused?: boolean;

	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Make the button take the full width of the container  */
	fullWidth?: boolean;

}
