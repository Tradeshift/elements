export interface TSDialogHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Dialog can be toggled by adding/removing this attribute  */
	"data-visible"?: boolean | 'true' | 'false';

	/**  Text content of the modal  */
	text?: string;

	/**  If you need a different icon that default ones, you can use one of Elements icon names. Notifications will ignore this  */
	icon?: string;

	/**  `success`, `info`, `confirm`, `warning`, `danger`, `error`  */
	type?: string;

	/**  can be used for customizing the buttons text and translations  */
	translations?: string;

	/**  set the default focus on the button, either `accept` or `cancel`  */
	focused?: string;

	/**  either `accept` or `cancel` can be used to change the button type, based on the dialog type, by default both are secondary  */
	primary?: string;

	/**  If it is a notification, no cancel button will be rendered. Notifications of type 'success' will auto-close on timeout, if they are not `non-dismissable`  */
	notification?: boolean | 'true' | 'false';

	/**  Cannot be dismissed except by clicking available buttons in the dialog/notification  */
	"non-dismissable"?: boolean | 'true' | 'false';

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
	translations?: Record<string, unknown>;

	/**  set the default focus on the button, either `accept` or `cancel`  */
	focused?: string;

	/**  either `accept` or `cancel` can be used to change the button type, based on the dialog type, by default both are secondary  */
	primary?: string;

	/**  If it is a notification, no cancel button will be rendered. Notifications of type 'success' will auto-close on timeout, if they are not `non-dismissable`  */
	notification?: boolean;

	/**  Cannot be dismissed except by clicking available buttons in the dialog/notification  */
	nonDismissable?: boolean;

}
