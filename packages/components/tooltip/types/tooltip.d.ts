export interface TSTooltipHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Text that should be shown in the tooltip popover  */
	tooltip?: string;

	/**  'top', 'bottom', 'right', 'left'  */
	position?: string;

	/**  Determining width of thee tooltip  */
	width?: string;

	/**  Disable the tooltip and hide it  */
	disabled?: boolean;

}

export interface TSTooltip {
	/**  Text that should be shown in the tooltip popover  */
	tooltip?: string;

	/**  'top', 'bottom', 'right', 'left'  */
	position?: string;

	/**  Determining width of thee tooltip  */
	width?: string;

	/**  Disable the tooltip and hide it  */
	disabled?: boolean;

}
