import { isEscapeKeyEvent } from './helper-functions';

export class CloseOnEscBehavior {
	constructor(parentElement) {
		this.parentElement = parentElement;
		this.onKeyDown = this.onKeyDown.bind(this);
	}

	start() {
		document.addEventListener('keydown', this.onKeyDown);
	}

	stop() {
		document.removeEventListener('keydown', this.onKeyDown);
	}

	onKeyDown(event) {
		if (
			!this.parentElement.visible ||
			this.parentElement.noCloseOnEscKey ||
			event.isComposing ||
			!isEscapeKeyEvent(event)
		) {
			return;
		}
		this.parentElement.close();
	}
}
