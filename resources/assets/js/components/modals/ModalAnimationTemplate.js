const EventEmitter = require('events');

export default class ModalAnimationTemplate extends EventEmitter {
    constructor() {
        super();
    }

    /* Before show */

    beforeShow() {
        this.emit('before-show-finished');
    }

    cancelBeforeShow() {}

    /* After show */

    afterShow() {
        this.emit('after-show-finished');
    }

    cancelAfterShow() {}

    /* Before hide */

    beforeHide() {
        this.emit('before-hide-finished');
    }

    cancelBeforeHide() {}

    /* After hide */

    afterHide() {
        this.emit('after-hide-finished');
    }

    cancelAfterHide() {}
}
