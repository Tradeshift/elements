import { Translations } from './utils/translations';

export type TSSelectItem = {
	id: string | number;
	title: string;
	icon?: string;
}

export declare class TSSelect {
	items: Array<TSSelectItem>;
	selected?: Array<string | number>;
	disabled?: boolean;
	dir?: 'rtl' | 'ltr' | 'auto';
	opened?: boolean;
	multiselect?: boolean;
	placeholder?: string;
	translations?: Translations;
}
