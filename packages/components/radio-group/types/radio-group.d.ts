export interface TSRadioGroupHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Value of currently chosen ts-radio node  */
	value?: string;

	/**  Title of radio group  */
	title?: string;

	/**  Index of checked ts-radio node  */
	index?: string;

	/**  Is group currently focused for keyboard input  */
	focused?: boolean;

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

}

export interface TSRadioGroup {
	/**  Value of currently chosen ts-radio node  */
	value?: string;

	/**  Title of radio group  */
	title?: string;

	/**  Index of checked ts-radio node  */
	index?: number;

	/**  Is group currently focused for keyboard input  */
	focused?: boolean;

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

}
