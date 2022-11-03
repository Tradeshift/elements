export interface TSFileSizeHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Size of the file  */
	size?: number | string;

	/**  How many decimal points should be shown  */
	"decimal-point"?: number | string;

	/**  Typography variant  */
	variant?: string;

	/**  Typography type  */
	type?: string;

}

export interface TSFileSize {
	/**  Size of the file  */
	size?: number;

	/**  How many decimal points should be shown  */
	decimalPoint?: number;

	/**  Typography variant  */
	variant?: string;

	/**  Typography type  */
	type?: string;

}
