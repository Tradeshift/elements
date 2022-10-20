export interface TSInputHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Show error style  */
	hasError?: boolean | 'true' | 'false';

	/**  Disable state of the input  */
	disabled?: boolean | 'true' | 'false';

	/**  Readonly state of the input  */
	readonly?: boolean | 'true' | 'false';

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Icon that appears at the beginning of the input (left in ltr direction)  */
	"icon-start"?: string;

	/**  Icon that appears at the ending part of the input (right in ltr direction). Readonly and disabled state will show a lock icon instead.  */
	"icon-end"?: string;

}

export interface TSInput {
	/**  Show error style  */
	hasError?: boolean;

	/**  Disable state of the input  */
	disabled?: boolean;

	/**  Readonly state of the input  */
	readonly?: boolean;

	/**  Direction 'rtl' or 'ltr'  */
	dir?: string;

	/**  Icon that appears at the beginning of the input (left in ltr direction)  */
	iconStart?: string;

	/**  Icon that appears at the ending part of the input (right in ltr direction). Readonly and disabled state will show a lock icon instead.  */
	iconEnd?: string;

}
