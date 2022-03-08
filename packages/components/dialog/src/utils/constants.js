export const dialogTypes = {
	SUCCESS: 'success',
	INFO: 'info',
	ERROR: 'error',
	CONFIRM: 'confirm',
	WARNING: 'warning',
	DANGER: 'danger'
};

export const dialogTypeIcon = {
	[dialogTypes.SUCCESS]: 'checkmark',
	[dialogTypes.INFO]: 'info',
	[dialogTypes.ERROR]: 'remove',
	[dialogTypes.CONFIRM]: 'question',
	[dialogTypes.WARNING]: 'alert',
	[dialogTypes.DANGER]: 'remove'
};

export const dialogTypeIconTypes = {
	[dialogTypes.SUCCESS]: 'success',
	[dialogTypes.INFO]: 'info',
	[dialogTypes.ERROR]: 'error',
	[dialogTypes.CONFIRM]: 'primary',
	[dialogTypes.WARNING]: 'warning',
	[dialogTypes.DANGER]: 'danger'
};

export const dialogTypeButtonType = {
	[dialogTypes.SUCCESS]: 'accept',
	[dialogTypes.INFO]: 'primary',
	[dialogTypes.ERROR]: 'danger',
	[dialogTypes.CONFIRM]: 'primary',
	[dialogTypes.WARNING]: 'warning',
	[dialogTypes.DANGER]: 'danger'
};

export const timeout = 1500;
