import { constants } from '@tradeshift/elements';

const { colors } = constants;

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
	SUGGESTED: 'suggested'
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
	[types.DISABLED]: colors.GRAY,
	[types.SUGGESTED]: colors.PURPLE
};

export const sizes = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large'
};
