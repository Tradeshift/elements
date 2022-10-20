export interface TSTextFieldHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Label of the text field. If you need something more than simple string, use the label slot.  */
	label?: string;

	/**  Id of the text field   */
	id?: string;

	/**  Value of the text field  */
	value?: string;

	/**  Pass type of the input element, if it's not multiline  */
	type?: string;

	/**  Placeholder of the text field  */
	placeholder?: string;

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

	/**  To show the asterisk in the label, not doing validation yet  */
	required?: boolean | 'true' | 'false';

	/**  Is the text field disabled?  */
	disabled?: boolean | 'true' | 'false';

	/**  Is the text field readonly?  */
	readonly?: boolean | 'true' | 'false';

	/**  Will show a textarea instead of an input  */
	multiline?: boolean | 'true' | 'false';

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Icon that appears at the beginning of the input (left in ltr direction)  */
	"icon-start"?: string;

	/**  Icon that appears at the end part of the input (end in ltr direction). Readonly and disabled state will show a lock icon instead.  */
	"icon-end"?: string;

}

export interface TSTextField {
	/**  Label of the text field. If you need something more than simple string, use the label slot.  */
	label?: string;

	/**  Id of the text field   */
	id?: string;

	/**  Value of the text field  */
	value?: string;

	/**  Pass type of the input element, if it's not multiline  */
	type?: string;

	/**  Placeholder of the text field  */
	placeholder?: string;

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

	/**  To show the asterisk in the label, not doing validation yet  */
	required?: boolean;

	/**  Is the text field disabled?  */
	disabled?: boolean;

	/**  Is the text field readonly?  */
	readonly?: boolean;

	/**  Will show a textarea instead of an input  */
	multiline?: boolean;

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Icon that appears at the beginning of the input (left in ltr direction)  */
	iconStart?: string;

	/**  Icon that appears at the end part of the input (end in ltr direction). Readonly and disabled state will show a lock icon instead.  */
	iconEnd?: string;

}
