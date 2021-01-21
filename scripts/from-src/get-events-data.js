module.exports = function getEventsData(componentName, fileContent) {
	const events = [];
	const contentSplitByEvent = fileContent.split("this.dispatchCustomEvent('");

	contentSplitByEvent.forEach((content, index) => {
		let name,
			payload,
			description = '';
		if (content.includes('*/', content.length - 2)) {
			const jsdoc = content.substring(content.lastIndexOf('/**') + 3).slice(0, -2);
			const splitByPayload = jsdoc.split('@payload');
			description = splitByPayload[0].replace(/\*/g, ' ').trim();
			payload = splitByPayload[1] ? splitByPayload[1].split('*')[0].trim() : '';
		}

		if (index < contentSplitByEvent.length - 1) {
			name = contentSplitByEvent[index + 1].split("'")[0];
			events.push({
				name,
				description,
				payload
			});
		}
	});
	return events;
};
