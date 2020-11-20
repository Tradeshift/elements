export const dialogTypes = {
	CONFIRM: 'confirm',
	WARNING: 'warning',
	DANGER: 'danger',
	SUCCESS: 'success'
};

export const dialogTypeIcon = {
	[dialogTypes.CONFIRM]: 'question',
	[dialogTypes.WARNING]: 'alert',
	[dialogTypes.DANGER]: 'remove',
	[dialogTypes.SUCCESS]: 'check-alt'
};

export const dialogTypeIconTypes = {
	[dialogTypes.CONFIRM]: 'primary',
	[dialogTypes.WARNING]: 'warning',
	[dialogTypes.DANGER]: 'danger',
	[dialogTypes.SUCCESS]: 'success'
};

export const dialogTypeButtonType = {
	[dialogTypes.CONFIRM]: 'primary',
	[dialogTypes.WARNING]: 'warning',
	[dialogTypes.DANGER]: 'danger',
	[dialogTypes.SUCCESS]: 'accept'
};
