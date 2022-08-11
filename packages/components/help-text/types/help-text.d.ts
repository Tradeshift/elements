export interface TSHelpTextHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  List of message(s)  */
	messages?: string;

	/**  If there are multiple messages, there should be a title for the help text  */
	title?: string;

	size?: string;

	rtl?: boolean;

	/**  Apply disabled style for the message  */
	disabled?: boolean;

	/**  Type of the help text which changes the styling and icon: 'error', 'warning'  */
	type?: string;

}

export interface TSHelpText {
	/**  List of message(s)  */
	messages?: any[];

	/**  If there are multiple messages, there should be a title for the help text  */
	title?: string;

	size?: string;

	rtl?: boolean;

	/**  Apply disabled style for the message  */
	disabled?: boolean;

	/**  Type of the help text which changes the styling and icon: 'error', 'warning'  */
	type?: string;

}
