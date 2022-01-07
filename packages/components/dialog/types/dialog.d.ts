export interface TSDialogHTMLAttributes {
	/**  Dialog can be toggled by add/removing this attribute  */
	"data-visible"?: boolean;

	/**  Text content of the modal  */
	text?: string;

	/**  If you need a different icon that default ones, you can use one of Elements icon names  */
	icon?: string;

	/**  `confirm`, `warning`, `danger`  */
	type?: string;

	/**  can be used for customizing the buttons text and translations  */
	translations?: object;

	/**  set the default focus on the button, either `accept` or `cancel`  */
	focused?: string;

	/**  either `accept` or `cancel` can be used to change the button type, based on the dialog type, by default both are secondary  */
	primary?: string;

}

export interface TSDialog {
	/**  Dialog can be toggled by add/removing this attribute  */
	visible?: boolean;

	/**  Text content of the modal  */
	text?: string;

	/**  If you need a different icon that default ones, you can use one of Elements icon names  */
	icon?: string;

	/**  `confirm`, `warning`, `danger`  */
	type?: string;

	/**  can be used for customizing the buttons text and translations  */
	translations?: object;

	/**  set the default focus on the button, either `accept` or `cancel`  */
	focused?: string;

	/**  either `accept` or `cancel` can be used to change the button type, based on the dialog type, by default both are secondary  */
	primary?: string;

}
