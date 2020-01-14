import { NEW_LINE_CHARACTER, ROWS_MAX, ROWS_MIN } from './constants';

export function getRowsInRange(value) {
	if (value <= ROWS_MIN) {
		return ROWS_MIN;
	}
	if (value >= ROWS_MAX) {
		return ROWS_MAX;
	}
	return value;
}

export function countLines(text) {
	return text.split(NEW_LINE_CHARACTER).length;
}
