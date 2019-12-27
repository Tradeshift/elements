import { constants } from '@tradeshift/elements';

const { colors, colorModifiers } = constants;

export const types = {
	DEFAULT: 'default',
	INVERTED: 'inverted',
	PRIMARY: 'primary',
	DANGER: 'danger',
	ERROR: 'error',
	SUCCESS: 'success',
	ACTIVE: 'active',
	INFO: 'info',
	FOCUS: 'focus',
	WARNING: 'warning',
	DISABLED: 'disabled',
	DISABLED_CHECKED: 'disabled-checked',
	SUGGESTED: 'suggested',
	ACTION_PRIMARY: 'action-primary',
	ACTION_SECONDARY: 'action-secondary'
};

export const typeColors = {
	[types.DEFAULT]: colors.SLATE,
	[types.INVERTED]: colors.WHITE,
	[types.DANGER]: colors.RED,
	[types.ERROR]: colors.RED,
	[types.SUCCESS]: colors.GREEN,
	[types.PRIMARY]: colors.BLUE,
	[types.ACTIVE]: colors.BLUE,
	[types.INFO]: colors.BLUE,
	[types.FOCUS]: colors.BLUE,
	[types.WARNING]: colors.ORANGE,
	[types.DISABLED]: colors.GRAY + colorModifiers.LIGHTER,
	[types.SUGGESTED]: colors.PURPLE,
	[types.DISABLED_CHECKED]: colors.GRAY + colorModifiers.LIGHT,
	[types.ACTION_PRIMARY]: colors.GRAY,
	[types.ACTION_SECONDARY]: colors.BLUE
};

export const sizes = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large'
};
