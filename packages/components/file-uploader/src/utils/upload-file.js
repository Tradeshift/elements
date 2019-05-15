export function uploadFile(file, endpoint) {
	const formData = new FormData();
	formData.append('file', file);

	return fetch(endpoint, {
		method: 'POST',
		body: formData
	}).then(res => res.json());
}
