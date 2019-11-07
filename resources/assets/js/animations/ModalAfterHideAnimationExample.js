const EventEmitter = require('events');

export default class ModalAfterHideAnimationExample extends EventEmitter {
  start() {
    // Creating and styling everything in JS to avoid default styles in front-end template
    document.querySelector('body').style.background = 'white';
    const modalBg = document.getElementById('custom-modal-bg');
    modalBg.style.height = '0';
    setTimeout(() => {
      this.emit('finished');
      modalBg.remove();
    }, 200);
  }
}
