export interface TSSelectMenuHTMLAttributes {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean;

	/**  List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: any[];

	/**  List of filtered options based on the select filter input value. You should update the   */
	"filtered-items"?: any[];

	/**  Allow users to select several options or not.  */
	multiselect?: boolean;

	/**  Do not show the apply button and directly emit select-menu-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior.  */
	"no-apply-button"?: boolean;

	/**  List of selected items' ids  */
	selected?: any[];

	/**  Translated messages for the user locale  */
	translations?: object;

	/**  Set component in loading state and render a spinner instead of list of items  */
	loading?: boolean;

	/**  Make client side filtering case sensitive which by default is case-insensitive  */
	"case-sensitive"?: boolean;

}

export interface TSSelectMenu {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean;

	/**  List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: any[];

	/**  List of filtered options based on the select filter input value. You should update the   */
	filteredItems?: any[];

	/**  Allow users to select several options or not.  */
	multiselect?: boolean;

	/**  Do not show the apply button and directly emit select-menu-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior.  */
	noApplyButton?: boolean;

	/**  List of selected items' ids  */
	selected?: any[];

	/**  Translated messages for the user locale  */
	translations?: object;

	/**  Set component in loading state and render a spinner instead of list of items  */
	loading?: boolean;

	/**  Make client side filtering case sensitive which by default is case-insensitive  */
	caseSensitive?: boolean;

}
