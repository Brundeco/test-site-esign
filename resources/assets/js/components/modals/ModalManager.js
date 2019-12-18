import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Modal from './Modal';

export default class ModalManager {
  constructor() {
    this.defaultModalsQuery = '.js-modal';
    this.idModalMap = new Map();
    this.activeModal = null;
    this.activeModalTrigger = null;
    this.isOpeningModal = false;
    this.showModalTimeoutReference = null;
    this.init();
  }

  init() {
    [...document.querySelectorAll(this.defaultModalsQuery)].forEach((el) => {
      this.createModal(el);
    });

    this.bindModalTriggers();
    this.bindWindowPopState();
  }

  checkModalOnPageLoad() {
    setTimeout(() => {
      const hashOnPageLoad = window.location.hash.substring(1, window.location.hash.length);
      const modal = this.idModalMap.get(hashOnPageLoad);
      if (modal) {
        modal.show();
      }
    });
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
      enableBodyScroll(modal.element, { reserveScrollBarGap: true });
      setTimeout(() => {
        [...document.querySelectorAll('.js-compensate-for-scrollbar')].forEach((el) => {
          el.style.transform = `translateX(0px)`; // eslint-disable-line
        });
      });
    }
  }

  onModalBeforeShow(modal) {
    if (!modal.backgroundScroll) {
      // scrollbar width as margin
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      disableBodyScroll(modal.element, { reserveScrollBarGap: true });
      setTimeout(() => {
        [...document.querySelectorAll('.js-compensate-for-scrollbar')].forEach((el) => {
          el.style.transform = `translateX(-${scrollBarWidth}px)`; // eslint-disable-line
        });
      });
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
        e.preventDefault();
        const modalTrigger = e.target;
        this.isOpeningModal = true;
        const modalId = modalTrigger.getAttribute('data-modal-id');
        const modal = this.idModalMap.get(modalId);

        if (this.activeModal && !this.isClosingModal) {
          this.activeModal.once('hide', () => {
            modal.show();
          });
          this.activeModal.hide();
        } else { // Only keep the activeModalTrigger when not in a modal
          this.activeModalTrigger = modalTrigger;
          modal.show();
        }
      }
    });
  }

  bindWindowPopState() {
    window.addEventListener('popstate', () => {
      const windowHash = window.location.hash;
      if (this.activeModal && (windowHash === '' || this.activeModal.element.querySelector(windowHash) == null)) {
        this.activeModal.hide();
      }
      if (windowHash.length > 1) {
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
