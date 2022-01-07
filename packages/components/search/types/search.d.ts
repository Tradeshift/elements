export interface TSSearchHTMLAttributes {
	/**  Shoud the search be auto focused once page loaded  */
	autofocus?: boolean;

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Set the focus on element  */
	focused?: boolean;

	/**  timeout in ms for the 'idle' event  */
	"idle-time"?: number;

	/**  Message when an input is empty  */
	placeholder?: string;

	/**  The current value  */
	value?: string;

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

}
