import { unsafeCSS } from 'lit-element';

export const styles = cssString => {
	console.log('styles', cssString);
	return unsafeCSS`${cssString}`;
};
