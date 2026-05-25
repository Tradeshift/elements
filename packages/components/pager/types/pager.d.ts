export interface TSPagerHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Total number of pages  */
	"total-pages"?: number | string;

	/**  Currently active page  */
	"active-page"?: number | string;

	/**  Determining maximum number of items in the page, should be either of 10,20,30,40,50  */
	"per-page"?: number | string;

	/**  Custom list of per-page options, overrides the default [10,20,30,40,50]  */
	"per-page-options"?: string;

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

	/**  Custom list of per-page options, overrides the default [10,20,30,40,50]  */
	perPageOptions?: number[];

	/**  Translated messages for the user locale  */
	translations?: Record<string, unknown>;

}
