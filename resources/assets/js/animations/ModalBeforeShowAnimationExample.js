const EventEmitter = require('events');

export default class ModalBeforeShowAnimationExample extends EventEmitter {
  start() {
    // Creating and styling everything in JS to avoid default styles in front-end template
    const modal = document.getElementById('custom-modal');
    modal.style.background = 'transparent';
    modal.style.opacity = 0;
    modal.style.transition = 'all .6s ease-out';
    const modalBg = document.createElement('div');
    modalBg.setAttribute('id', 'custom-modal-bg');
    modalBg.style.background = 'black';
    modalBg.style.transition = 'all .2s ease-out';
    modalBg.style.position = 'fixed';
    modalBg.style.zIndex = '100';
    modalBg.style.top = '50%';
    modalBg.style.left = '50%';
    modalBg.style.transform = 'translateX(-50%) translateY(-50%)';
    modalBg.style.width = '100%';
    modalBg.style.height = '0';
    modal.parentElement.appendChild(modalBg, modal);
    setTimeout(() => {
      modalBg.style.height = '100vh';
    }, 20);

    setTimeout(() => {
      this.emit('finished');
    }, 200);
  }
}
