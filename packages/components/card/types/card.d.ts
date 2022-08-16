export interface TSCardHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	type?: string;

	orientation?: string;

	rtl?: boolean;

	size?: string;

	"no-padding"?: boolean;

	"no-horizontal-padding"?: boolean;

	"no-vertical-padding"?: boolean;

}

export interface TSCard {
	type?: string;

	orientation?: string;

	rtl?: boolean;

	size?: string;

	noPadding?: boolean;

	noHorizontalPadding?: boolean;

	noVerticalPadding?: boolean;

}
