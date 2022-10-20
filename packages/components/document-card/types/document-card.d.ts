export interface TSDocumentCardHTMLAttributes {
	/** css class name. Use it instead of "className" */
	class?: string;
	dir?: string;

	name?: string;

	description?: string;

	selected?: boolean | 'true' | 'false';

	"mobile-description"?: string;

	type?: string;

}

export interface TSDocumentCard {
	dir?: string;

	name?: string;

	description?: string;

	selected?: boolean;

	mobileDescription?: string;

	type?: string;

}
