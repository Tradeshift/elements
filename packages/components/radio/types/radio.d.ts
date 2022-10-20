export interface TSRadioHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Value of the radio  */
	value?: string;

	/**  Label of the radio  */
	label?: string;

	/**  Check status  */
	checked?: boolean | 'true' | 'false';

	/**  Disabled status  */
	disabled?: boolean | 'true' | 'false';

}

export interface TSRadio {
	/**  Value of the radio  */
	value?: string;

	/**  Label of the radio  */
	label?: string;

	/**  Check status  */
	checked?: boolean;

	/**  Disabled status  */
	disabled?: boolean;

}
