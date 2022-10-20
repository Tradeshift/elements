export interface TSSelectMenuHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean | 'true' | 'false';

	/**  List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: string;

	/**  List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items.  */
	"filtered-items"?: string;

	/**  Allow users to select several options or not.  */
	multiselect?: boolean | 'true' | 'false';

	/**  Do not show the apply button and directly emit select-menu-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior.  */
	"no-apply-button"?: boolean | 'true' | 'false';

	/**  List of selected items' ids  */
	selected?: string;

	/**  Translated messages for the user locale  */
	translations?: string;

	/**  Set component in loading state and render a spinner instead of list of items  */
	loading?: boolean | 'true' | 'false';

	/**  Make client side filtering case sensitive which by default is case-insensitive  */
	"case-sensitive"?: boolean | 'true' | 'false';

}

export interface TSSelectMenu {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean;

	/**  List of available options. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: any[];

	/**  List of filtered options based on the select filter input value. `items` should be updated to always include all filtered items.  */
	filteredItems?: any[];

	/**  Allow users to select several options or not.  */
	multiselect?: boolean;

	/**  Do not show the apply button and directly emit select-menu-changed when the selection changes. <br> Only affects the behaviour when multiselect is enabled, for single selection this is the default behavior.  */
	noApplyButton?: boolean;

	/**  List of selected items' ids  */
	selected?: any[];

	/**  Translated messages for the user locale  */
	translations?: Record<string, unknown>;

	/**  Set component in loading state and render a spinner instead of list of items  */
	loading?: boolean;

	/**  Make client side filtering case sensitive which by default is case-insensitive  */
	caseSensitive?: boolean;

}
