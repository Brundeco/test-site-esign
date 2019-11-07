const EventEmitter = require('events');

export default class ModalAnimationExample2 extends EventEmitter {
  start() {
    document.querySelector('body').style.background = 'white';
    setTimeout(() => {
      this.emit('finished');
    }, 1000);
  }
}
