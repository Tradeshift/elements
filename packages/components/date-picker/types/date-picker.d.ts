export interface TSDatePickerHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Can be used for customizing placeholder, days abbreviations, months abbreviations and providing translations for them <br> see the structure in its storybook knobs section. <br>  */
	translations?: string;

	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  For setting the date of the date picker you can use this prop/attribute. It will get update after the user changes the date.  */
	"selected-date"?: string;

	/**  This date can be used as a way to customize the month that date picker dropdown will be opened in, <br>  by default it's the current month. You can pass any date in the preferred month.  */
	"page-date"?: string;

	/**  Label of the date picker.  */
	label?: string;

	/**  Is the date picker disabled?  */
	disabled?: boolean | 'true' | 'false';

	/**  Is the date picker readonly?  */
	readonly?: boolean | 'true' | 'false';

	/**  You can pass a function to this prop, which will get js Date object of the days in the calendar view as input, <br>  and expect a boolean to make the day disabled or not.  */
	isDisabledDate?: string;

	/**  Minimum date which can be selected by the user. Dates before this will be shown as disabled. Supports ISO 8601 format  */
	min?: string;

	/**  Maximum date which can be selected by the user. Dates after this will be shown as disabled. Supports ISO 8601 format  */
	max?: string;

	/**  Is the dropdown part opened or not?  */
	opened?: boolean | 'true' | 'false';

	/**  Disable the typing a new date  */
	"not-typeable"?: boolean | 'true' | 'false';

	/**  Which day should be shown as the first day of the week. A number between 0-6 (0 = Sunday, 6 = Saturday)  */
	"first-day"?: number | string;

	/**  Array of messages to pass to help-text component. See help-text component for more info  */
	"help-text-messages"?: string;

	/**  If you have more than one help text message , you should pass a title to it. See help-text component for more info  */
	"help-text-title"?: string;

	/**  To change the help text icon and style if needed. See help-text component for more info  */
	"help-text-type"?: string;

	/**  Error messages to show underneath of the input when it has error  */
	"error-messages"?: string;

	/**  Error title, if there are more than one error message  */
	"error-title"?: string;

	/**  If the text field has an error, to show error messages and change the style of the input  */
	"has-error"?: boolean | 'true' | 'false';

	/**  To remove the deselect button and show the asterisk in the label. Not doing the validation, you should set the has-error and error messages yourself  */
	required?: boolean | 'true' | 'false';

}

export interface TSDatePicker {
	/**  Can be used for customizing placeholder, days abbreviations, months abbreviations and providing translations for them <br> see the structure in its storybook knobs section. <br>  */
	translations?: Record<string, unknown>;

	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  For setting the date of the date picker you can use this prop/attribute. It will get update after the user changes the date.  */
	selectedDate?: string;

	/**  This date can be used as a way to customize the month that date picker dropdown will be opened in, <br>  by default it's the current month. You can pass any date in the preferred month.  */
	pageDate?: string;

	/**  Label of the date picker.  */
	label?: string;

	/**  Is the date picker disabled?  */
	disabled?: boolean;

	/**  Is the date picker readonly?  */
	readonly?: boolean;

	/**  You can pass a function to this prop, which will get js Date object of the days in the calendar view as input, <br>  and expect a boolean to make the day disabled or not.  */
	isDisabledDate?: Function;

	/**  Minimum date which can be selected by the user. Dates before this will be shown as disabled. Supports ISO 8601 format  */
	min?: string;

	/**  Maximum date which can be selected by the user. Dates after this will be shown as disabled. Supports ISO 8601 format  */
	max?: string;

	/**  Is the dropdown part opened or not?  */
	opened?: boolean;

	/**  Disable the typing a new date  */
	notTypeable?: boolean;

	/**  Which day should be shown as the first day of the week. A number between 0-6 (0 = Sunday, 6 = Saturday)  */
	firstDay?: number;

	/**  Array of messages to pass to help-text component. See help-text component for more info  */
	helpTextMessages?: any[];

	/**  If you have more than one help text message , you should pass a title to it. See help-text component for more info  */
	helpTextTitle?: string;

	/**  To change the help text icon and style if needed. See help-text component for more info  */
	helpTextType?: string;

	/**  Error messages to show underneath of the input when it has error  */
	errorMessages?: any[];

	/**  Error title, if there are more than one error message  */
	errorTitle?: string;

	/**  If the text field has an error, to show error messages and change the style of the input  */
	hasError?: boolean;

	/**  To remove the deselect button and show the asterisk in the label. Not doing the validation, you should set the has-error and error messages yourself  */
	required?: boolean;

}
