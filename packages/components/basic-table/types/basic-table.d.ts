export interface TSBasicTableHTMLAttributes {
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  <br> List of columns configs, including: <br> - property: Property key of the column in data object, <br> - value: value of the title of column', <br> - visibility?: Which screen sizes this column should be visible -> 'always-visible'(default) or 'desktop-only' or 'mobile-only', <br> - size?: 'small' or 'medium' or 'large', <br> - display?: 'left' or 'right' or 'center', <br> - renderer?: you can pass a renderer function to customize the content of the cells in this column, args: (cellValue, rowObject) <br>  */
	cols?: any[];

	/**  List of selected rows ids (caveat: the row should include id property)   */
	selectedIds?: any[];

	/**  List of rows data objects  */
	data?: any[];

}

export interface TSBasicTable {
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  <br> List of columns configs, including: <br> - property: Property key of the column in data object, <br> - value: value of the title of column', <br> - visibility?: Which screen sizes this column should be visible -> 'always-visible'(default) or 'desktop-only' or 'mobile-only', <br> - size?: 'small' or 'medium' or 'large', <br> - display?: 'left' or 'right' or 'center', <br> - renderer?: you can pass a renderer function to customize the content of the cells in this column, args: (cellValue, rowObject) <br>  */
	cols?: any[];

	/**  List of selected rows ids (caveat: the row should include id property)   */
	selectedIds?: any[];

	/**  List of rows data objects  */
	data?: any[];

}
