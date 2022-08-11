export interface TSConfirmationPromptHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Dialog can be toggled by add/removing this attribute  */
	"data-visible"?: boolean;

	/**  Header of the modal  */
	"data-header"?: string;

	/**  Title on top of the text part  */
	"data-title"?: string;

	/**  Text content of the modal  */
	text?: string;

	/**  Label of the text field component  */
	"text-field-label"?: string;

	/**  Placeholder of the text field component  */
	"text-field-placeholder"?: string;

	/**  Array of messages to pass to help-text component. See help-text component for more info   */
	"help-text-messages"?: string;

	/**  If you have more than one help text message, you should pass a title to it. See help-text component for more info   */
	"help-text-title"?: string;

	/**  Can be used for customizing the buttons text and providing translations for them  */
	translations?: string;

	/**  Text that the user need to type for confirmation   */
	"text-to-match"?: string;

}

export interface TSConfirmationPrompt {
	/**  Dialog can be toggled by add/removing this attribute  */
	visible?: boolean;

	/**  Header of the modal  */
	header?: string;

	/**  Title on top of the text part  */
	title?: string;

	/**  Text content of the modal  */
	text?: string;

	/**  Label of the text field component  */
	textFieldLabel?: string;

	/**  Placeholder of the text field component  */
	textFieldPlaceholder?: string;

	/**  Array of messages to pass to help-text component. See help-text component for more info   */
	helpTextMessages?: any[];

	/**  If you have more than one help text message, you should pass a title to it. See help-text component for more info   */
	helpTextTitle?: string;

	/**  Can be used for customizing the buttons text and providing translations for them  */
	translations?: object;

	/**  Text that the user need to type for confirmation   */
	textToMatch?: string;

}
