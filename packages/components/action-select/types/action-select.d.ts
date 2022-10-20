export interface TSActionSelectHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean | 'true' | 'false';

	/**  Is the action select opened or not  */
	opened?: boolean | 'true' | 'false';

	/**  Array of action items. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: string;

}

export interface TSActionSelect {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  Is component disabled or not.  */
	disabled?: boolean;

	/**  Is the action select opened or not  */
	opened?: boolean;

	/**  Array of action items. Item must have 'id' and 'title', it can also have an 'icon' which is the name of the icon  */
	items?: any[];

}
