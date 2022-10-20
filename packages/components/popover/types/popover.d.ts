export interface TSPopoverHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	/**  Is the popover visible or not  */
	opened?: boolean | 'true' | 'false';

	/**  Placement, relative to the anchor. Could be 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'  */
	placement?: string;

	/**  Text in the title  */
	header?: string;

	/**  Anchor element for relative positioning. If you need to position absolutely, leave this empty  */
	anchor?: string;

	/**  Left offset when popover is positioned absolutely. Use any valid css syntax for the 'left' property  */
	"position-left"?: string;

	/**  Top offset when popover is positioned absolutely. Use any valid css syntax for the 'top' property  */
	"position-top"?: string;

}

export interface TSPopover {
	/**  Is the popover visible or not  */
	opened?: boolean;

	/**  Placement, relative to the anchor. Could be 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'  */
	placement?: string;

	/**  Text in the title  */
	header?: string;

	/**  Anchor element for relative positioning. If you need to position absolutely, leave this empty  */
	anchor?: string;

	/**  Left offset when popover is positioned absolutely. Use any valid css syntax for the 'left' property  */
	positionLeft?: string;

	/**  Top offset when popover is positioned absolutely. Use any valid css syntax for the 'top' property  */
	positionTop?: string;

}
