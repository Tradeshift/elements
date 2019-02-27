export function uploadingState(filename) {
  return `
  <div class="file-card file-card--uploading">
    <div class="file-info--wrapper">
      <div class="icon-wrapper">
        <div class="icon">
          <span>&#8593;</span>
        </div>
      </div>
      <div class="file-upload--info">
        <label>${filename}</label>
        <div class="progress">
          <div class="track"></div>
          <div class="indicator"></div>
        </div>
      </div>
    </div>
    <div class="file-card--close icon">
      <span class="file-card--close">x</span>
    </div>
  </div>`;
}