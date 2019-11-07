const EventEmitter = require('events');

export default class ModalAfterShowAnimationExample extends EventEmitter {
  start() {
    // Creating and styling everything in JS to avoid default styles in front-end template
    const modal = document.getElementById('custom-modal');
    modal.style.opacity = 1;

    setTimeout(() => {
      this.emit('finished');
    }, 600);
  }
}
