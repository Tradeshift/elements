export interface TSIconHTMLAttributes {
	/**  Icon name, ex: 'arrow-up' or inline svg string  */
	icon?: string;

	/**  Url to svg for icon. It will override the icon property  */
	src?: string;

	/**  'small' or 'medium' or 'large'  */
	size?: string;

	/**  Determining icon color, ex: 'error', 'focus'  */
	type?: string;

	/**  Add circular background for icon  */
	circular?: boolean;

	/**  90, 180, 270  */
	rotate?: number;

	/**  'h', 'horizontal', 'v', 'vertical'  */
	flip?: string;

}

export interface TSIcon {
	/**  Icon name, ex: 'arrow-up' or inline svg string  */
	icon?: string;

	/**  Url to svg for icon. It will override the icon property  */
	src?: string;

	/**  'small' or 'medium' or 'large'  */
	size?: string;

	/**  Determining icon color, ex: 'error', 'focus'  */
	type?: string;

	/**  Add circular background for icon  */
	circular?: boolean;

	/**  90, 180, 270  */
	rotate?: number;

	/**  'h', 'horizontal', 'v', 'vertical'  */
	flip?: string;

}
