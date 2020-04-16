import { sizes, types } from './utils';

export declare class TSButton {
	type?: types;
	size?: sizes;
	busy?: boolean;
	icon?: string;
	disabled?: boolean;
	grouped?: boolean;
	dir?: 'rtl' | 'ltr' | 'auto';
}

export { sizes, types } from './utils';
