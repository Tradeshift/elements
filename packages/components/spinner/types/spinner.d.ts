export interface TSSpinnerHTMLAttributes {
	/**  Spinner color, `blue`, `mono`, `white`  */
	"data-color"?: string;

	/**  Text to show below the spinner  */
	"data-message"?: string;

	/**  Size of the spinner, `large`, `medium`, `small`  */
	"data-size"?: string;

	/**  Show/hide the spinner  */
	"data-visible"?: boolean;

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
