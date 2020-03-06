const EventEmitter = require('events');

/* eslint no-underscore-dangle: ["error", { "allow": ["_show", "_hide"] }] */

export default class Modal extends EventEmitter {
  constructor(element) {
    super();
    this.element = element;
    this.id = element.getAttribute('id');
    this.modalDialog = null;
    this.modalDocument = null;
    this.closeTriggers = null;
    this.accessibilityWrap = element.dataset.accessibilityWrap !== 'false';
    this.isAlert = element.dataset.alert === 'true';
    this.title = element.dataset.title;
    this.showHash = element.dataset.hideHash !== 'true';
    this.backgroundScroll = element.dataset.backgroundScroll === 'true';
    this.focusableElements = null;
    this.eventListeners = [];
    this.activeClass = 'modal--active';
    this.beforeShowClass = 'modal--before-show';
    this.beforeHideClass = 'modal--before-hide';
    this.animation = null;
    this.showTimeout = element.dataset.showTimeout || 0;
    this.hideTimeout = element.dataset.hideTimeout || 0;
    this.showTimeoutReference = null;
    this.hideTimeoutReference = null;
    this.isOpening = false;
    this.isClosing = false;
    this.state = null;
    this.init();
  }

  init() {
    // DOM Setup
    if (this.accessibilityWrap) {
      this.addA11Y();
    } else {
      this.modalVaWrap = this.element.querySelector('.modal__va-wrap');
      this.modalVaM = this.element.querySelector('.modal__va-m');
      this.modalDialog = this.element.querySelector('.modal__dialog');
    }
    // Focusable elements (for TAB key)
    this.focusableElements = [...this.element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])')];
    this.closeTriggers = [...this.element.querySelectorAll('.js-modal-close')];
  }

  addA11Y() {
    this.element.setAttribute('aria-hidden', true);

    // Create va-wrap ; va-m
    this.modalVaWrap = document.createElement('div');
    this.modalVaWrap.classList.add('modal__va-wrap');
    this.modalVaM = document.createElement('div');
    this.modalVaM.classList.add('modal__va-m');

    // Create modal wrapper
    this.modalDialog = document.createElement('div');
    const role = this.isAlert ? 'alertdialog' : 'dialog';
    this.modalDialog.setAttribute('role', role);
    this.modalDialog.classList.add('modal__dialog');
    if (this.title) {
      this.modalDialog.setAttribute('aria-labelledby', this.title);
    }

    // Create content wrapper
    this.modalDocument = document.createElement('div');
    this.modalDocument.setAttribute('role', 'document');

    // Wrap content with content wrapper and then wrap content wrapper with modal wrapper
    const originalHtml = this.element.innerHTML;
    this.element.innerHTML = '';
    this.element.appendChild(this.modalVaWrap);
    this.modalVaWrap.appendChild(this.modalVaM);
    this.modalVaM.appendChild(this.modalDialog);
    this.modalDialog.appendChild(this.modalDocument);
    this.modalDocument.innerHTML = originalHtml;
  }

  /* Show / Hide functionality */

  show() {
    if (!this.isOpening) {
      this.isOpening = true;
      if (this.isClosing && this.animation) {
        if (this.state === 'before-hide') {
          this.animation.cancelBeforeHide();
        } else {
          this.animation.cancelAfterHide();
        }
      }
      this.isClosing = false;
      this.state = 'before-show';
      clearTimeout(this.hideTimeoutReference);
      this.element.classList.add(this.beforeShowClass);
      this.element.classList.remove(this.beforeHideClass);
      this.element.setAttribute('aria-hidden', false);
      this.addEventListeners();
      this.emit('before-show');
      if (this.animation) {
        this.animation.beforeShow();
      } else {
        this.showTimeoutReference = setTimeout(() => {
          this._show();
        }, this.showTimeout);
      }
    }
  }

  _show() {
    this.state = 'after-show';
    this.modalDialog.setAttribute('tabindex', -1);
    this.modalDialog.scrollTop = 0;
    this.element.classList.remove(this.beforeShowClass);
    this.element.classList.add(this.activeClass);
    this.emit('show');

    if (this.animation) {
      this.animation.afterShow();
    } else {
      this.isOpening = false;
    }

    // Set focus
    setTimeout(() => {
      this.modalDialog.focus({ preventScroll: true });
    }, 50);
  }

  hide() {
    if (!this.isClosing) {
      this.isClosing = true;
      if (this.isOpening && this.animation) {
        if (this.state === 'before-show') {
          this.animation.cancelBeforeShow();
        } else {
          this.animation.cancelAfterShow();
        }
      }
      this.isOpening = false;
      this.state = 'before-hide';
      clearTimeout(this.showTimeoutReference);
      this.element.setAttribute('aria-hidden', true);
      this.emit('before-hide');
      this.element.classList.add(this.beforeHideClass);
      this.element.classList.remove(this.beforeShowClass);
      this.removeEventListeners();
      if (this.animation) {
        this.animation.beforeHide();
      } else {
        this.hideTimeoutReference = setTimeout(() => {
          this._hide();
        }, this.hideTimeout);
      }
    }
  }

  _hide() {
    this.state = 'after-hide';
    this.modalDialog.removeAttribute('tabindex');
    this.element.classList.remove(this.beforeHideClass);
    this.element.classList.remove(this.activeClass);
    this.emit('hide');

    if (this.animation) {
      this.animation.afterHide();
    } else {
      this.isClosing = false;
    }
  }

  /* Event Listeners */

  onModalVaMClick(e) {
    if (e.target === this.modalVaM) {
      this.hide();
    }
  }

  onKeyDown(e) {
    if (e.keyCode === 27) { // ESC
      this.hide();
    }

    if (e.keyCode === 9) { // TAB
      const focusedIndex = this.focusableElements.indexOf(document.activeElement);
      if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
        this.focusableElements[this.focusableElements.length - 1].focus();
        e.preventDefault();
      } else if (!e.shiftKey && focusedIndex === this.focusableElements.length - 1) {
        this.focusableElements[0].focus();
        e.preventDefault();
      }
    }
  }

  addEventListeners() {
    // Close modal
    const onModalVaMClick = (e) => { this.onModalVaMClick(e); };
    this.element.addEventListener('click', onModalVaMClick);
    this.eventListeners.push({ ctx: this.modalDialog, type: 'click', fn: onModalVaMClick });

    const onCloseTriggerClick = () => { this.hide(); };
    this.closeTriggers.forEach((closeTrigger) => {
      closeTrigger.addEventListener('click', onCloseTriggerClick);
      this.eventListeners.push({ ctx: closeTrigger, type: 'click', fn: onCloseTriggerClick });
    });

    // Keydown
    const onDocumentKeyDown = (e) => { this.onKeyDown(e); };
    document.addEventListener('keydown', onDocumentKeyDown);
    this.eventListeners.push({ ctx: document, type: 'keydown', fn: onDocumentKeyDown });
  }

  removeEventListeners() {
    this.eventListeners.forEach((listener) => {
      listener.ctx.removeEventListener(listener.type, listener.fn);
    });
  }

  /* Animations */

  setAnimation(animation) {
    if (this.animation) {
      this.animation.removeEventListeners();
    }
    this.animation = animation;

    this.animation.on('before-hide-finished', () => {
      this._hide();
    });

    this.animation.on('after-hide-finished', () => {
      this.isClosing = false;
    });

    this.animation.on('before-show-finished', () => {
      this._show();
    });

    this.animation.on('after-show-finished', () => {
      this.isOpening = false;
    });
  }
}
