export { customEventNames, sizes } from './utils';

export declare class TSModal {
	'data-dir'?: 'rtl' | 'ltr' | 'auto';
	'data-size'?: string;
	'data-title'?: string;
	'data-visible'?: boolean;
	'no-close-on-esc-key'?: boolean;
	'hide-header'?: boolean;
	'no-padding'?: boolean;

	open(): void;
	close(): void;
}
