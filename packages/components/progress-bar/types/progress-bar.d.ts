export interface TSProgressBarHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	total?: string;

	done?: string;

	indeterminate?: boolean | 'true' | 'false';

}

export interface TSProgressBar {
	total?: number;

	done?: number;

	indeterminate?: boolean;

}
