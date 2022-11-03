export interface TSFileUploaderInputHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	rtl?: boolean | 'true' | 'false';

	/**  Disable the input  */
	disabled?: boolean | 'true' | 'false';

	/**  Allow multiple file select.  */
	multiple?: boolean | 'true' | 'false';

	/**  Size of the input: 'full'(default), 'medium', 'small'  */
	size?: string;

	/**  List of accepted file extensions  */
	"accepted-file-extensions"?: string;

	/**  Disable drag and drop functionality  */
	"disable-drag-and-drop"?: boolean | 'true' | 'false';

	"help-text-title"?: string;

	"help-text-messages"?: string;

	/**  Hide the help text about allowed file types.  */
	"hide-file-type-help-text"?: boolean | 'true' | 'false';

	/**  Hide the help text about maximum number of files.  */
	"hide-max-file-number-help-text"?: boolean | 'true' | 'false';

	/**  Maximum limit for number of files to be shown as helper message  */
	"max-file-number"?: number | string;

}

export interface TSFileUploaderInput {
	rtl?: boolean;

	/**  Disable the input  */
	disabled?: boolean;

	/**  Allow multiple file select.  */
	multiple?: boolean;

	/**  Size of the input: 'full'(default), 'medium', 'small'  */
	size?: string;

	/**  List of accepted file extensions  */
	acceptedFileExtensions?: any[];

	/**  Disable drag and drop functionality  */
	disableDragAndDrop?: boolean;

	helpTextTitle?: string;

	helpTextMessages?: any[];

	/**  Hide the help text about allowed file types.  */
	hideFileTypeHelpText?: boolean;

	/**  Hide the help text about maximum number of files.  */
	hideMaxFileNumberHelpText?: boolean;

	/**  Maximum limit for number of files to be shown as helper message  */
	maxFileNumber?: number;

}
