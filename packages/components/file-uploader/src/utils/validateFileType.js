export function validateFileType(file, fileTypes) {
  const filenameParts = file.name.split('.');
  const fileExtension = filenameParts[filenameParts.length - 1];
  const allowedFileTypes = fileTypes.split(',').map(fileType => fileType.trim().replace(/\./g, ''));

  if (allowedFileTypes.includes(fileExtension)) {
    return true
  } else {
    return false;
  }
}