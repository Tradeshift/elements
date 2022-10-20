export interface TSOverlayHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  The element where the container will be rendered.  */
	anchor?: string;

	/**  Should the width be based on content (true) or inherited from the anchor (false).  */
	autoWidth?: boolean | 'true' | 'false';

}

export interface TSOverlay {
	/**  Direction of the component 'rtl' or 'ltr'.  */
	dir?: string;

	/**  The element where the container will be rendered.  */
	anchor?: Record<string, unknown>;

	/**  Should the width be based on content (true) or inherited from the anchor (false).  */
	autoWidth?: boolean;

}
