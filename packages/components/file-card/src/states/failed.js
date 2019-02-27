export function failedState(filename) {
  return `
  <div class="file-card file-card--failed">
    <div class="file-info--wrapper">
      <div class="icon-wrapper">
        <div class="icon">
          <span>!</span>
        </div>
      </div>
      <div>
        <label>Upload failed</label>
        <div class="file-upload--info">
          <small class="filename">${filename} - </small>
          <small class="retry">Retry</small>
        </div>
      </div>
    </div>
    <div class="file-card--close icon">
      <span class="file-card--close">x</span>
    </div>
  </div>`;
}