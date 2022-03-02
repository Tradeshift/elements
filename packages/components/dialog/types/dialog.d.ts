export interface TSDialogHTMLAttributes {
	/**  Dialog can be toggled by adding/removing this attribute  */
	"data-visible"?: boolean;

	/**  Text content of the modal  */
	text?: string;

	/**  If you need a different icon that default ones, you can use one of Elements icon names. Notifications will ignore this  */
	icon?: string;

	/**  `success`, `info`, `confirm`, `warning`, `danger`, `error`  */
	type?: string;

	/**  can be used for customizing the buttons text and translations  */
	translations?: object;

	/**  set the default focus on the button, either `accept` or `cancel`  */
	focused?: string;

	/**  either `accept` or `cancel` can be used to change the button type, based on the dialog type, by default both are secondary  */
	primary?: string;

	/**  If it is a notification, no cancel button will be rendered. Notifications of type 'success' will auto-close on timeout, if they are not `non-dismissable`  */
	notification?: boolean;

	/**  Render no buttons. This only affects notifications of type 'success'  */
	"no-buttons"?: boolean;

	/**  Cannot be dismissed. This only affect notifications  */
	"non-dismissable"?: boolean;

}

export interface TSDialog {
	/**  Dialog can be toggled by adding/removing this attribute  */
	visible?: boolean;

	/**  Text content of the modal  */
	text?: string;

	/**  If you need a different icon that default ones, you can use one of Elements icon names. Notifications will ignore this  */
	icon?: string;

	/**  `success`, `info`, `confirm`, `warning`, `danger`, `error`  */
	type?: string;

	/**  can be used for customizing the buttons text and translations  */
	translations?: object;

	/**  set the default focus on the button, either `accept` or `cancel`  */
	focused?: string;

	/**  either `accept` or `cancel` can be used to change the button type, based on the dialog type, by default both are secondary  */
	primary?: string;

	/**  If it is a notification, no cancel button will be rendered. Notifications of type 'success' will auto-close on timeout, if they are not `non-dismissable`  */
	notification?: boolean;

	/**  Render no buttons. This only affects notifications of type 'success'  */
	noButtons?: boolean;

	/**  Cannot be dismissed. This only affect notifications  */
	nonDismissable?: boolean;

}
