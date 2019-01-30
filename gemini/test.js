const generateSuite = (element, states) =>
	gemini.suite(element, suite => {
		states.forEach(state =>
			suite
				.setUrl(
					`/iframe.html?selectedKind=${encodeURIComponent(
						element + '/states'
					)}&selectedStory=${encodeURIComponent(state)}`
				)
				.setCaptureElements(element)
				.capture(state, (actions, find) => {
					actions.waitForElementToShow(element);
				})
				.capture(`${state}:hover`, (actions, find) => {
					actions.mouseMove(find(element));
				})
		);
	});

generateSuite('ts-button', [
	'default type',
	'type=primary',
	'type=secondary',
	'type=text'
]);
