module.exports = function getSlotData(componentName, fileContent) {
	const slots = [];
	const contentSplitBySlot = fileContent.split('<slot');

	contentSplitBySlot.forEach((content, index) => {
		let name,
			description = '';
		if (content.includes('-->', content.length - 3)) {
			description = content.substring(content.lastIndexOf('<!--') + 4).slice(0, -3);
		}

		if (index < contentSplitBySlot.length - 1) {
			const slotContent = contentSplitBySlot[index + 1].split('</slot>')[0].split('>');
			if (slotContent.length > 1) {
				const splitByName = slotContent[0].split('name="');
				name = splitByName.length > 1 ? splitByName[1].split('"')[0] : 'default';
			}

			slots.push({
				name,
				description
			});
		}
	});
	return slots;
};
