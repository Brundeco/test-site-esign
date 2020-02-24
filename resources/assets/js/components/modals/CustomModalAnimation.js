const EventEmitter = require('events');

export default class CustomModalAnimation extends EventEmitter {
  constructor() {
    super();
    // Creating and styling everything in JS to avoid default styles in front-end template
    this.modal = document.getElementById('custom-modal');
    this.modalBg = document.createElement('div');
    this.modal.style.background = 'transparent';
    this.modal.style.opacity = 0;
    this.modal.style.transition = 'all .2s ease-out';
    this.modalBg.setAttribute('id', 'custom-modal-bg');
    this.modalBg.style.background = 'black';
    this.modalBg.style.transition = 'all .2s ease-out';
    this.modalBg.style.position = 'fixed';
    this.modalBg.style.zIndex = '100';
    this.modalBg.style.top = '50%';
    this.modalBg.style.left = '50%';
    this.modalBg.style.transform = 'translateX(-50%) translateY(-50%)';
    this.modalBg.style.width = '100%';
    this.modalBg.style.height = '0';
    this.modal.parentElement.appendChild(this.modalBg, this.modal);
  }

  /* Before show */

  beforeShow() {
    this.modalBg.style.height = '100vh';

    this.beforeShowTimeout = setTimeout(() => {
      this.emit('before-show-finished');
    }, 200);
  }

  cancelBeforeShow() {
    clearTimeout(this.beforeShowTimeout);
  }

  /* After show */

  afterShow() {
    this.modal.style.opacity = 1;

    this.afterShowTimeout = setTimeout(() => {
      this.emit('after-show-finished');
    }, 200);
  }

  cancelAfterShow() {
    clearTimeout(this.afterShowTimeout);
  }

  /* Before hide */

  beforeHide() {
    this.modal.style.opacity = 0;

    this.beforeHideTimeout = setTimeout(() => {
      this.emit('before-hide-finished');
    }, 200);
  }

  cancelBeforeHide() {
    clearTimeout(this.beforeHideTimeout);
  }

  /* After hide */

  afterHide() {
    this.modalBg.style.height = '0';
    this.afterHideTimeout = setTimeout(() => {
      this.emit('after-hide-finished');
    }, 200);
  }

  cancelAfterHide() {
    clearTimeout(this.afterHideTimeout);
  }
}
