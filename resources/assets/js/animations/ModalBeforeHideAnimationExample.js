const EventEmitter = require('events');

export default class ModalBeforeHideAnimationExample extends EventEmitter {
  start() {
    // Creating and styling everything in JS to avoid default styles in front-end template
    const modal = document.getElementById('custom-modal');
    modal.style.transition = 'all .2s ease-out';
    modal.style.opacity = 0;

    setTimeout(() => {
      this.emit('finished');
    }, 200);
  }
}
