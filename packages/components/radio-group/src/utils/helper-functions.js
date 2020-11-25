import { constants } from '@tradeshift/elements';
import { directionTypes } from './constants';

const { keyboardEventKeys } = constants;

export function getDirectionByKey(keyCode) {
	switch (keyCode) {
		case keyboardEventKeys.ARROW_RIGHT:
		case keyboardEventKeys.ARROW_DOWN:
			return directionTypes.FORWARD;
		case keyboardEventKeys.ARROW_LEFT:
		case keyboardEventKeys.ARROW_UP:
			return directionTypes.BACKWARD;
		default:
			return directionTypes.NONE;
	}
}

export function getNextElementIndex(direction, index, collectionLength) {
	switch (direction) {
		case directionTypes.FORWARD:
			if (index === collectionLength - 1) {
				return 0;
			}
			index++;
			return index;
		case directionTypes.BACKWARD:
			if (index === 0 || index === -1) {
				return collectionLength - 1;
			}
			index--;
			return index;
		case directionTypes.NONE:
			return index;
		default:
			throw new Error(`Direction ${direction} isn't handled in switch`);
	}
}
