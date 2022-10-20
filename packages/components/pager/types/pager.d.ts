export interface TSPagerHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Total number of pages  */
	"total-pages"?: string;

	/**  Currently active page  */
	"active-page"?: string;

	/**  Determining maximum number of items in the page, should be either of 10,20,30,40,50  */
	"per-page"?: string;

	/**  Translated messages for the user locale  */
	translations?: string;

}

export interface TSPager {
	/**  Total number of pages  */
	totalPages?: number;

	/**  Currently active page  */
	activePage?: number;

	/**  Determining maximum number of items in the page, should be either of 10,20,30,40,50  */
	perPage?: number;

	/**  Translated messages for the user locale  */
	translations?: Record<string, unknown>;

}
