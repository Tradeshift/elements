export interface TSSelectHTMLAttributes {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean;

	/**  Is the dropdown part opened or not.  */
	opened?: boolean;

	/**  List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: any[];

	/**  List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items.    */
	"filtered-items"?: any[];

	/**  Allow users to select several options or not.  */
	multiselect?: boolean;

	/**  Do not show the apply button and directly emit select-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior.  */
	"no-apply-button"?: boolean;

	/**  List of selected items' ids  */
	selected?: any[];

	/**  Default placeholder when there is no selection.  */
	placeholder?: string;

	/**  Translated messages for the user locale  */
	translations?: object;

	/**  Show the loading spinner in select dropdown  */
	loading?: boolean;

	/**  Make client side filtering case sensitive. This also applies on the filterValue in 'filter-value-change' event  */
	"case-sensitive"?: boolean;

	/**  The label of the select input field  */
	label?: string;

	/**  To show the asterisk in the label, not doing validation yet  */
	required?: boolean;

	/**  Id of the select component   */
	id?: string;

}

export interface TSSelect {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean;

	/**  Is the dropdown part opened or not.  */
	opened?: boolean;

	/**  List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: any[];

	/**  List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items.    */
	filteredItems?: any[];

	/**  Allow users to select several options or not.  */
	multiselect?: boolean;

	/**  Do not show the apply button and directly emit select-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior.  */
	noApplyButton?: boolean;

	/**  List of selected items' ids  */
	selected?: any[];

	/**  Default placeholder when there is no selection.  */
	placeholder?: string;

	/**  Translated messages for the user locale  */
	translations?: object;

	/**  Show the loading spinner in select dropdown  */
	loading?: boolean;

	/**  Make client side filtering case sensitive. This also applies on the filterValue in 'filter-value-change' event  */
	caseSensitive?: boolean;

	/**  The label of the select input field  */
	label?: string;

	/**  To show the asterisk in the label, not doing validation yet  */
	required?: boolean;

	/**  Id of the select component   */
	id?: string;

}
