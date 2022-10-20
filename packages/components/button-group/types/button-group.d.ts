export interface TSButtonGroupHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Make the buttons inline instead of stacking which is the default behaviour  */
	inline?: boolean | 'true' | 'false';

}

export interface TSButtonGroup {
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Make the buttons inline instead of stacking which is the default behaviour  */
	inline?: boolean;

}
