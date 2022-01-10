export interface TSTabHTMLAttributes {
	/**  The label text for the header  */
	label?: string;

	/**  Make the tab selected  */
	selected?: boolean;

	/**  Icon name from the available icons in the ts-icon component  */
	icon?: string;

	/**  Number for counter badge next to the label  */
	counter?: number;

	/**  Id of the tab which will be added to the tab button in the header of tabs. It can also be used for identifying the tab on tab-click event   */
	id?: string;

}

export interface TSTab {
	/**  The label text for the header  */
	label?: string;

	/**  Make the tab selected  */
	selected?: boolean;

	/**  Icon name from the available icons in the ts-icon component  */
	icon?: string;

	/**  Number for counter badge next to the label  */
	counter?: number;

	/**  Id of the tab which will be added to the tab button in the header of tabs. It can also be used for identifying the tab on tab-click event   */
	id?: string;

}
