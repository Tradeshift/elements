export function getFileInfo(fileUrl) {
  const url = document.createElement('a');
  url.href = fileUrl;
  const urlParams = url.search.substring(1);  

  return JSON.parse('{"' + decodeURI(urlParams).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}