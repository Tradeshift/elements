export interface TSOverlayHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  The element where the container will be rendered.  */
	anchor?: string;

	/**  Should the width be based on content (true) or inherited from the anchor (false).  */
	autoWidth?: boolean;

}

export interface TSOverlay {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  The element where the container will be rendered.  */
	anchor?: object;

	/**  Should the width be based on content (true) or inherited from the anchor (false).  */
	autoWidth?: boolean;

}
