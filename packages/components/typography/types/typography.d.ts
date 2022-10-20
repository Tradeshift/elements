export interface TSTypographyHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	text?: string;

	tooltip?: string;

	variant?: string;

	type?: string;

	inline?: boolean | 'true' | 'false';

	"no-wrap"?: boolean | 'true' | 'false';

	"no-tooltip"?: boolean | 'true' | 'false';

}

export interface TSTypography {
	text?: string;

	tooltip?: string;

	variant?: string;

	type?: string;

	inline?: boolean;

	noWrap?: boolean;

	noTooltip?: boolean;

}
