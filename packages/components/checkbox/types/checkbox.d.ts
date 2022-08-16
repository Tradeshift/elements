export interface TSCheckboxHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Name of checkbox  */
	name?: string;

	/**  Value of checkbox  */
	value?: string;

	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Label of checkbox. To customize the label and have something more than simple string, use the slot, and remove this attribute  */
	"data-label"?: string;

	/**  Status of checkbox  */
	checked?: boolean;

	/**  disabled  */
	disabled?: boolean;

	/**  readonly, user can't change the value like disabled, but with different styling  */
	readonly?: boolean;

}

export interface TSCheckbox {
	/**  Name of checkbox  */
	name?: string;

	/**  Value of checkbox  */
	value?: string;

	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Label of checkbox. To customize the label and have something more than simple string, use the slot, and remove this attribute  */
	label?: string;

	/**  Status of checkbox  */
	checked?: boolean;

	/**  disabled  */
	disabled?: boolean;

	/**  readonly, user can't change the value like disabled, but with different styling  */
	readonly?: boolean;

}
