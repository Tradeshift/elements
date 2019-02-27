import { TSElement, defineElement } from '@tradeshift/elements';
import css from './file-card.css';

import { downloadState } from './states/download';
import { uploadingState } from './states/uploading';
import { failedState } from './states/failed';
import { getFileInfo } from './utils/getFileInfo';

const [$state, $fileurl, $rightleft, $viewonly, $resetFileInfo, $handleDownload, $showDownloadMessage] = [Symbol('state'), Symbol('fileurl'), Symbol('rightleft'), Symbol('viewonly'), Symbol('resetFileInfo'), Symbol('handleDownload'), Symbol('showDownloadMessage') ];

export class FileCard extends TSElement('FileCard') {
  static get observedAttributes() {
    return ['state', 'fileurl', 'rightleft', 'viewonly'];
  }
  static get tagName() {
    return 'ts-file-card';
  }
  static get html() {
    return `<div class="file-card-wrapper"></div >`;
  }
  static get css() {
    return css;
  }

  constructor() {
    super();

    this.state = this.getAttribute('state');
    this.fileurl = this.getAttribute('fileurl');
    this.rightleft = this.getAttribute('rightleft');
    this.viewonly = this.getAttribute('viewonly');
    this.resetFileInfo = this.resetFileInfo.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
    this.showDownloadMessage = this.showDownloadMessage.bind(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    
    const fileInfo = getFileInfo(this.fileurl);

    if (name === 'viewonly' && newValue === 'true') {
      this.shadowRoot.querySelector('.file-card-wrapper').classList.add('view-only');
    }
    
    if (newValue === 'download') {
      this.shadowRoot.querySelector('.file-card-wrapper').innerHTML = downloadState(fileInfo, this.viewonly);
      this.shadowRoot.querySelector('.file-card--download').addEventListener('mouseenter', this.showDownloadMessage);
      this.shadowRoot.querySelector('.file-card--download').addEventListener('mouseleave', this.resetFileInfo);
    }

    if (newValue === 'download' && name === 'viewonly' && newValue === 'true') {
      this.shadowRoot.querySelector('.file-card--download').addEventListener('click', () => {
        this.handleDownload(this.fileurl, fileInfo.name);
      }, false);
    }

    if (newValue === 'uploading') {
      this.shadowRoot.querySelector('.file-card-wrapper').innerHTML = uploadingState(fileInfo.name);
    }

    if (newValue === 'failed') {
      this.shadowRoot.querySelector('.file-card-wrapper').innerHTML = failedState(fileInfo.name);
    }

    if (name === 'rightleft' && newValue === 'true') {
      this.shadowRoot.querySelector('.file-card-wrapper').classList.add('right-left');
    }
  }
  get state() {
    return this[$state];
  }
  set state(state) {
    if (state === this[$state]) {
      return;
    }

    this[$state] = state;
    this[state ? 'setAttribute' : 'removeAttribute']('state', state);
  }
  get fileurl() {
    return this[$fileurl];
  }
  set fileurl(fileurl) {
    if (fileurl === this[$fileurl]) {
      return;
    }

    this[$fileurl] = fileurl;
    this[fileurl ? 'setAttribute' : 'removeAttribute']('fileurl', fileurl);
  }
  get viewonly() {
    return this[$viewonly];
  }
  set viewonly(viewonly) {
    if (viewonly === this[$viewonly]) {
      return;
    }

    this[$viewonly] = viewonly;
    this[viewonly ? 'setAttribute' : 'removeAttribute']('viewonly', viewonly);
  }
  get rightleft() {
    return this[$rightleft];
  }
  set rightleft(rightleft) {
    if (rightleft === this[$rightleft]) {
      return;
    }

    this[$rightleft] = rightleft;
    this[rightleft ? 'setAttribute' : 'removeAttribute']('rightleft', rightleft);
  }
  showDownloadMessage() {
    const message = (this.viewonly === 'true') ? 'Download' : 'Remove';
    this.shadowRoot.querySelector('.file-card-wrapper').classList.add('hovering');
    this.fileInfo = this.shadowRoot.querySelector('.file-upload--info > div').innerHTML;

    this.shadowRoot.querySelector('.filetype').innerHTML = `<small class="message">${message}</span>`;
    this.shadowRoot.querySelector('.filesize').innerHTML = '';
  }
  handleDownload(file, filename) {
    const link = document.createElement('a');
    link.href = file;
    link.download = filename;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  resetFileInfo() {
    this.shadowRoot.querySelector('.file-card-wrapper').classList.remove('hovering');
    this.shadowRoot.querySelector('.file-upload--info > div').innerHTML = this.fileInfo;
  }
}

defineElement(FileCard);