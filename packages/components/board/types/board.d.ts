export interface TSBoardHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Board header title  */
	"data-title"?: string;

}

export interface TSBoard {
	/**  Direction of the component 'rtl' or 'ltr'  */
	dir?: string;

	/**  Board header title  */
	title?: string;

}
