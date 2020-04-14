export class CloseOnEscBehavior {
    constructor(parentElement: any);
    parentElement: any;
    onKeyDown(event: any): void;
    /** Registers a listener to `keydown` event. */
    start(): void;
    /** Unregisters a listener to `keydown` event. */
    stop(): void;
}
