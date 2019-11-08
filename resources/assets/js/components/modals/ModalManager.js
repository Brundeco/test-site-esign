import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Modal from './Modal';

export default class ModalManager {
  constructor() {
    this.defaultModalsQuery = '.js-modal';
    this.modalTriggerQuery = '.js-modal-trigger';
    this.isOpeningModalClass = 'is-opening-modal';
    this.isClosingModalClass = 'is-closing-modal';
    this.hasActiveModalClass = 'has-active-modal';
    this.idModalMap = new Map();
    this.activeModal = null;
    this.activeModalTrigger = null;
    this.isOpeningModal = false;
    this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    this.showModalTimeoutReference = null;
    this.init();
  }

  init() {
    [...document.querySelectorAll(this.defaultModalsQuery)].forEach((el) => {
      this.createModal(el);
    });

    this.bindModalTriggers();
    this.bindWindowPopState();


    // show modal on page load
    const hashOnPageLoad = window.location.hash.substring(1, window.location.hash.length);
    const modal = this.idModalMap.get(hashOnPageLoad);
    if (modal) {
      modal.show();
    }
  }

  createModal(modalElement) {
    const modal = new Modal(modalElement);

    this.idModalMap.set(modal.id, modal);

    modal.on('before-hide', () => {
      this.onModalBeforeHide(modal);
    });

    modal.on('hide', () => {
      this.onModalHide(modal);
    });

    modal.on('before-show', () => {
      this.onModalBeforeShow(modal);
    });

    modal.on('show', () => {
      this.onModalShow(modal);
    });

    return modal;
  }

  onModalBeforeHide() {
    this.isOpeningModal = false;
    this.isClosingModal = true;
    clearTimeout(this.showModalTimeoutReference);
    this.removeHash();
  }

  onModalHide(modal) {
    this.isClosingModal = false;
    this.activeModal = null;
    if (!this.isOpeningModal) {
      if (this.activeModalTrigger) {
        this.activeModalTrigger.focus();
      }
    }
    if (!modal.backgroundScroll) {
      enableBodyScroll(modal.element);
    }
    document.body.style.marginRight = 0;
  }

  onModalBeforeShow(modal) {
    if (!modal.backgroundScroll) {
      // scrollbar width as margin
      disableBodyScroll(modal.element);
      document.body.style.marginRight = `${this.scrollbarWidth}px`;
    }
    if (modal.showHash) {
      this.setHash(`#${modal.id}`);
    } else {
      this.removeHash();
    }
    this.activeModal = modal;
  }

  onModalShow() {
    this.isOpeningModal = false;
  }

  bindModalTriggers() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('js-modal-trigger')) {
        const modalTrigger = e.target;
        this.isOpeningModal = true;
        const modalId = modalTrigger.getAttribute('data-modal-id');
        const modal = this.idModalMap.get(modalId);

        if (this.activeModal && !this.isClosingModal) {
          this.activeModal.hide();
          this.showModalTimeoutReference = setTimeout(() => {
            modal.show();
          }, this.activeModal.hideTimeout);
        } else { // Only keep the activeModalTrigger when not in a modal
          this.activeModalTrigger = modalTrigger;
          modal.show();
        }
      }
    });
  }

  bindWindowPopState() {
    window.addEventListener('popstate', () => {
      if (this.activeModal
        && (window.location.hash === '' || this.activeModal.element.querySelector(window.location.hash) == null)) {
        this.activeModal.hide();
      } else if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el != null && el.classList.contains('modal')) {
          const modal = this.idModalMap.get(el.getAttribute('id'));
          if (modal) {
            modal.show();
          }
        }
      }
    }, false);
  }

  setHash(hash) {
    if (window.history.pushState) {
      window.history.pushState(window.history.state, '', hash);
    } else {
      window.location.hash = hash;
    }
  }

  removeHash() {
    const currentHash = window.location.hash.substring(1, window.location.hash.length);
    if (currentHash.length) {
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
}
