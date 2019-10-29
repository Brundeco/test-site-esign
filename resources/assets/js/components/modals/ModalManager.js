import Modal from './Modal';

export default class ModalManager {
  constructor() {
    this.modalsQuery = '.js-modal';
    this.modalTriggersQuery = '.js-modal-trigger';
    this.modalElements = [...document.querySelectorAll(this.modalsQuery)];
    this.idModalMap = new Map();
    this.activeModal = null;
    this.activeModalTrigger = null;
    this.init();
  }

  init() {
    if (!this.modalElements.length) {
      return;
    }

    this.modalElements.forEach((el) => {
      const modal = new Modal(el);

      // add to map
      this.idModalMap.set(el.getAttribute('id'), modal);

      // bind modal hide
      modal.on('hide', () => {
        this.onModalHide();
      });
    });

    this.bindModalTriggers();
  }

  onModalHide() {
    this.activeModalTrigger.focus();
  }

  bindModalTriggers() {
    [...document.querySelectorAll(this.modalTriggersQuery)].forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const modal = this.idModalMap.get(trigger.getAttribute('data-modal-id'));
        this.activeModalTrigger = trigger;
        modal.show();
      });
    });
  }

  setHash(hash) {
    if (window.history.pushState) {
      window.history.pushState(window.history.state, '', hash);
    } else {
      window.location.hash = hash;
    }
  }

  removeHash() {
    const { history, location } = window;
    if (history.pushState) {
      history.replaceState(history.state, '', '#');
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      const scrollV = document.body.scrollTop;
      const scrollH = document.body.scrollLeft;
      location.hash = '';
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scrollV;
      document.body.scrollLeft = scrollH;
    }
  }
}
