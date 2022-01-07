export interface TSFileCardHTMLAttributes {
	/**  type/state of the file card: 'download', 'failed', 'uploading'  */
	state?: string;

	/**  File data object, {name, size, ...}  */
	"file-object"?: object;

	rtl?: boolean;

	/**  Show a remove button on the card, which emit an event when it's been clicked  */
	removable?: boolean;

	/**  Size of the file card: 'full','medium','small'  */
	size?: string;

	/**  The error message to be shown on the file card when it's in failed state  */
	"error-message"?: string;

}

export interface TSFileCard {
	/**  type/state of the file card: 'download', 'failed', 'uploading'  */
	state?: string;

	/**  File data object, {name, size, ...}  */
	fileObject?: object;

	rtl?: boolean;

	/**  Show a remove button on the card, which emit an event when it's been clicked  */
	removable?: boolean;

	/**  Size of the file card: 'full','medium','small'  */
	size?: string;

	/**  The error message to be shown on the file card when it's in failed state  */
	errorMessage?: string;

}
