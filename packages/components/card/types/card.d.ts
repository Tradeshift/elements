export interface TSCardHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	type?: string;

	orientation?: string;

	rtl?: boolean | 'true' | 'false';

	size?: string;

	"no-padding"?: boolean | 'true' | 'false';

	"no-horizontal-padding"?: boolean | 'true' | 'false';

	"no-vertical-padding"?: boolean | 'true' | 'false';

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
