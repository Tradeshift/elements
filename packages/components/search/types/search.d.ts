export interface TSSearchHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Shoud the search be auto focused once page loaded  */
	autofocus?: boolean;

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Set the focus on element  */
	focused?: boolean;

	/**  timeout in ms for the 'idle' event  */
	"idle-time"?: string;

	/**  Message when an input is empty  */
	placeholder?: string;

	/**  The current value  */
	value?: string;

	/**  Translated messages for the user locale. <br> @type {{ loading: string, no_items: string }}  */
	translations?: string;

	/**  Should dropdown items be rendered or not  */
	"has-dropdown"?: boolean;

	/**  Show loading spinner when waiting for drodwon items  */
	loading?: boolean;

	/**  Dropdown items to show when user clicks on search component  */
	"dropdown-items"?: string;

}

export interface TSSearch {
	/**  Shoud the search be auto focused once page loaded  */
	autofocus?: boolean;

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Set the focus on element  */
	focused?: boolean;

	/**  timeout in ms for the 'idle' event  */
	idleTime?: number;

	/**  Message when an input is empty  */
	placeholder?: string;

	/**  The current value  */
	value?: string;

	/**  Translated messages for the user locale. <br> @type {{ loading: string, no_items: string }}  */
	translations?: object;

	/**  Should dropdown items be rendered or not  */
	hasDropdown?: boolean;

	/**  Show loading spinner when waiting for drodwon items  */
	loading?: boolean;

	/**  Dropdown items to show when user clicks on search component  */
	dropdownItems?: any[];

}
