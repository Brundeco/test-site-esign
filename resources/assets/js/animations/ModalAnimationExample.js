const EventEmitter = require('events');

export default class ModalAnimationExample extends EventEmitter {
  start() {
    document.querySelector('body').style.background = 'red';
    setTimeout(() => {
      this.emit('finished');
    }, 1000);
  }
}
