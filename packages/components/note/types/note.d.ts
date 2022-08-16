export interface TSNoteHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	icon?: string;

	type?: string;

	dir?: string;

	closeable?: boolean;

	hidden?: boolean;

	buttons?: string;

}

export interface TSNote {
	icon?: string;

	type?: string;

	dir?: string;

	closeable?: boolean;

	hidden?: boolean;

	buttons?: any[];

}
