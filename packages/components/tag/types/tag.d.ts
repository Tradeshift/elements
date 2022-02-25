export interface TSTagHTMLAttributes {
	/**  Text direction: 'rtl' or 'ltr'  */
	dir?: string;

	/**  Type: success, warning, warning-lite, danger, blue, blue-lite. Affects background and foreground colors  */
	type?: string;

	/**  Can the item be deleted? Displays a remove icon at the end of the tag  */
	deletable?: boolean;

	/**  Should the tag look like clicking it triggers an action? Adds a pointer cursor and hover effect  */
	clickable?: boolean;

	/**  Is the item locked? Displays a lock icon at the end of the tag  */
	locked?: boolean;

	/**  Array of labels or 'keys'  */
	labels?: any[];

	/**  Array of values  */
	values?: any[];

	/**  Show busy/loading animation  */
	busy?: boolean;

}

export interface TSTag {
	/**  Text direction: 'rtl' or 'ltr'  */
	dir?: string;

	/**  Type: success, warning, warning-lite, danger, blue, blue-lite. Affects background and foreground colors  */
	type?: string;

	/**  Can the item be deleted? Displays a remove icon at the end of the tag  */
	deletable?: boolean;

	/**  Should the tag look like clicking it triggers an action? Adds a pointer cursor and hover effect  */
	clickable?: boolean;

	/**  Is the item locked? Displays a lock icon at the end of the tag  */
	locked?: boolean;

	/**  Array of labels or 'keys'  */
	labels?: any[];

	/**  Array of values  */
	values?: any[];

	/**  Show busy/loading animation  */
	busy?: boolean;

}
