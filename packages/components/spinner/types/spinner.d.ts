export interface TSSpinnerHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Spinner color, `blue`, `mono`, `white`  */
	"data-color"?: string;

	/**  Text to show below the spinner  */
	"data-message"?: string;

	/**  Size of the spinner, `large`, `medium`, `small`  */
	"data-size"?: string;

	/**  Show/hide the spinner  */
	"data-visible"?: boolean | 'true' | 'false';

}

export interface TSSpinner {
	/**  Spinner color, `blue`, `mono`, `white`  */
	color?: string;

	/**  Text to show below the spinner  */
	message?: string;

	/**  Size of the spinner, `large`, `medium`, `small`  */
	size?: string;

	/**  Show/hide the spinner  */
	visible?: boolean;

}
