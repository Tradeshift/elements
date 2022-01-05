export interface TSPagerHTMLAttributes {
	/**  Total number of pages  */
	"total-pages"?: number;

	/**  Currently active page  */
	"active-page"?: number;

	/**  Determining maximum number of items in the page, should be either of 10,20,30,40,50  */
	"per-page"?: number;

	/**  Translated messages for the user locale  */
	translations?: object;

}

export interface TSPager {
	/**  Total number of pages  */
	totalPages?: number;

	/**  Currently active page  */
	activePage?: number;

	/**  Determining maximum number of items in the page, should be either of 10,20,30,40,50  */
	perPage?: number;

	/**  Translated messages for the user locale  */
	translations?: object;

}
