import { calcFileSize } from '../utils/calcFileSize';

export function downloadState(file) {
  const fileExtension = file.name.split('.').pop();

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
        <label>${file.name}</label>
        <div>
          <small class="filesize">${calcFileSize(file).display} - </small>
          <small class="filetype"><small>${fileExtension}</small> Document</small>
        </div>
      </div>
    </div>
    <div class="icon">
      <span class="file-card--menu">...</span>
    </div>
  </div>`;
}