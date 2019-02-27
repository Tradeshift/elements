import { calcFileSize } from '../utils/calcFilesize.js';

export function downloadState(fileInfo, viewOnly) {
  const fileExtension = fileInfo.name.split('.').pop();
  const closeIcon = `
    <div class="file-card--close icon">
      <span class="file-card--close">x</span>
    </div>
  `;
  const downloadIcon = `
    <div class="file-card--downlaod icon">
      <span class="file-card--downlaod">↓</span>
    </div>
  `;

  return `
  <div class="file-card file-card--download">
    <div class="file-info--wrapper">
      <div class="icon-wrapper">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="44" viewBox="3 1 18 22" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
          </svg>
          <span>${fileExtension}</span>
        </div>
      </div>
      <div class="file-upload--info">
        <label>${fileInfo.name}</label>
        <div>
          <small class="filesize">${calcFileSize(fileInfo.size)} | </small>
          <small class="filetype"><small>${fileExtension}</small> Document</small>
        </div>
      </div>
    </div>
    ${(viewOnly === 'true') ? downloadIcon : closeIcon}
  </div>`;
}