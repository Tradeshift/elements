export function calcFileSize(rawFilesize, maxFileSize) {
  const numBytes = rawFilesize;
  let filesize;

  // pulled from MDN
  for (let sizes = ["kb", "mb", "gb", "tb"],
    nMultiple = 0,
    nApprox = numBytes / 1024;
    nApprox > 1;
    nApprox /= 1024,
    nMultiple++) {
      filesize = nApprox.toFixed(1) + sizes[nMultiple];
  }

  const maxFileSizeMB = maxFileSize * 1000000;
  const fileTooLarge = numBytes > maxFileSizeMB ? true : false;

  return {
    display: filesize,
    raw: numBytes,
    tooLarge: fileTooLarge,
  };
}