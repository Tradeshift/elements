export interface TSSelectHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean | 'true' | 'false';

	/**  Is the dropdown part opened or not.  */
	opened?: boolean | 'true' | 'false';

	/**  List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: string;

	/**  List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items.    */
	"filtered-items"?: string;

	/**  Allow users to select several options or not.  */
	multiselect?: boolean | 'true' | 'false';

	/**  Do not show the apply button and directly emit select-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior.  */
	"no-apply-button"?: boolean | 'true' | 'false';

	/**  List of selected items' ids  */
	selected?: string;

	/**  Default placeholder when there is no selection.  */
	placeholder?: string;

	/**  Translated messages for the user locale  */
	translations?: string;

	/**  Show the loading spinner in select dropdown  */
	loading?: boolean | 'true' | 'false';

	/**  Make client side filtering case sensitive. This also applies on the filterValue in 'filter-value-change' event  */
	"case-sensitive"?: boolean | 'true' | 'false';

	/**  The label of the select input field  */
	label?: string;

	/**  To show the asterisk in the label, not doing validation yet  */
	required?: boolean | 'true' | 'false';

	/**  Id of the select component   */
	id?: string;

	/**  Array of messages to pass to help-text component. See help-text component for more info   */
	"help-text-messages"?: string;

	/**  If you have more than one help text message , you should pass a title to it. See help-text component for more info   */
	"help-text-title"?: string;

	/**  To change the help text icon and style if needed. See help-text component for more info   */
	"help-text-type"?: string;

	/**  Error messages to show underneath of the input when it has error  */
	"error-messages"?: string;

	/**  Error title, if there are more than one error message  */
	"error-title"?: string;

	/**  If the text field has an error, to show error messages and change the style of the input  */
	"has-error"?: boolean | 'true' | 'false';

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
	translations?: Record<string, unknown>;

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

	/**  Array of messages to pass to help-text component. See help-text component for more info   */
	helpTextMessages?: any[];

	/**  If you have more than one help text message , you should pass a title to it. See help-text component for more info   */
	helpTextTitle?: string;

	/**  To change the help text icon and style if needed. See help-text component for more info   */
	helpTextType?: string;

	/**  Error messages to show underneath of the input when it has error  */
	errorMessages?: any[];

	/**  Error title, if there are more than one error message  */
	errorTitle?: string;

	/**  If the text field has an error, to show error messages and change the style of the input  */
	hasError?: boolean;

}
