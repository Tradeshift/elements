export interface TSProgressBarHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	total?: string;

	done?: string;

	indeterminate?: boolean;

}

export interface TSProgressBar {
	total?: number;

	done?: number;

	indeterminate?: boolean;

}
