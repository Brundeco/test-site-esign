const EventEmitter = require('events');

export default class Modal extends EventEmitter {
  constructor(element) {
    super();
    this.element = element;
    this.id = element.getAttribute('id');
    this.modalInner = null;
    this.modalDialog = null;
    this.modalDocument = null;
    this.closeButton = null;
    this.isAlert = element.dataset.alert === 'true';
    this.title = element.dataset.title;
    this.focusableElements = null;
    this.activeClass = 'modal--active';
    this.eventListeners = [];
    this.init();
  }

  init() {
    // DOM Setup
    this.addA11Y();
    // Focusable elements (for TAB key)
    this.focusableElements = [...this.element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])')];
    this.closeButton = this.element.querySelector('.js-modal-close');
  }

  addA11Y() {
    this.element.setAttribute('aria-hidden', true);

    // Create inner div
    this.modalInner = document.createElement('div');
    this.modalInner.classList.add('modal__inner');

    // Create modal wrapper
    this.modalDialog = document.createElement('div');
    const role = this.isAlert ? 'alertdialog' : 'dialog';
    this.modalDialog.setAttribute('role', role);
    if (this.title) {
      this.modalDialog.setAttribute('aria-labelledby', this.title);
    }

    // Create content wrapper
    this.modalDocument = document.createElement('div');
    this.modalDocument.setAttribute('role', 'document');

    // Wrap content with content wrapper and then wrap content wrapper with modal wrapper
    const originalHtml = this.element.innerHTML;
    this.element.innerHTML = '';
    this.element.append(this.modalInner);
    this.modalInner.append(this.modalDialog);
    this.modalDialog.append(this.modalDocument);
    this.modalDocument.innerHTML = originalHtml;
  }

  /* Show / Hide functionality */

  show() {
    this.element.setAttribute('aria-hidden', false);
    this.modalDialog.setAttribute('tabindex', -1);
    this.modalDialog.scrollTop = 0;

    // Set focus
    setTimeout(() => {
      if (this.focusableElements.length) {
        this.focusableElements[0].focus();
      } else {
        this.modalDialog.focus();
      }
    });

    this.addEventListeners();
    this.element.classList.add(this.activeClass);
    this.emit('show');
  }

  hide() {
    this.element.setAttribute('aria-hidden', true);
    this.modalDialog.removeAttribute('tabindex');

    this.removeEventListeners();
    this.element.classList.remove(this.activeClass);
    this.emit('hide');
  }

  /* Event Listeners */

  onModalDialogClick(e) {
    if (e.target === this.modalDialog) {
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
    const onModalDialogClick = (e) => { this.onModalDialogClick(e); };
    this.modalDialog.addEventListener('click', onModalDialogClick);
    this.eventListeners.push({ ctx: this.modalDialog, type: 'click', fn: onModalDialogClick });

    const onCloseButtonClick = () => { this.hide(); };
    this.closeButton.addEventListener('click', onCloseButtonClick);
    this.eventListeners.push({ ctx: this.closeButton, type: 'click', fn: onCloseButtonClick });

    // Keydown
    const onDocumentKeyDown = (e) => { this.onKeyDown(e); };
    document.addEventListener('keydown', onDocumentKeyDown);
    this.eventListeners.push({ ctx: document, type: 'keydown', fn: onDocumentKeyDown });
  }

  removeEventListeners() {
    this.eventListeners.forEach((listener) => {
      console.log(listener);
      listener.ctx.removeEventListener(listener.type, listener.fn);
    });
  }
}
