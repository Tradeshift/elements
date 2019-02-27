export function calcFileSize(rawFilesize) {
  const numBytes = rawFilesize;
  let filesize;

  // pulled from MDN
  for (let sizes = [" KB", " MB", " GB", " TB"],
    nMultiple = 0,
    nApprox = numBytes / 1024;
    nApprox > 1;
    nApprox /= 1024,
    nMultiple++) {
    filesize = nApprox.toFixed(1) + sizes[nMultiple];
  }

  return filesize;
}