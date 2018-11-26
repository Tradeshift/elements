/*
 * Babel freaks out if it doesn't see `class XXX extends BuiltInClass {}`,
 * So these extends need to be written out here, so they can be used
 * in the TSElement, which might use a different superclass.
 */
export default {
	HTMLElement: class extends HTMLElement {},
	HTMLBodyElement: class extends HTMLBodyElement {}
};
