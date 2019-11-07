import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Modal from './Modal';

export default class ModalManager {
  constructor() {
    this.defaultModalsQuery = '.js-modal';
    this.idModalMap = new Map();
    this.activeModal = null;
    this.activeModalTrigger = null;
    this.isOpeningNewModal = false;
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

    // add to map
    this.idModalMap.set(modal.id, modal);

    // bind modal hide
    modal.on('hide', () => {
      this.onModalHide(modal);
    });

    modal.on('before-show', () => {
      this.onModalBeforeShow(modal);
    });

    // bind modal show
    modal.on('show', () => {
      this.onModalShow(modal);
    });

    return modal;
  }

  onModalHide(modal) {
    if (!this.isOpeningNewModal) {
      if (this.activeModalTrigger) {
        this.activeModalTrigger.focus();
      }
      this.activeModal = null;
    }
    if (!modal.backgroundScroll) {
      enableBodyScroll(modal.element);
    }
    setTimeout(() => {
      document.body.style.marginRight = 0;
    });
    document.documentElement.classList.remove('has-active-modal');
    this.removeHash();
  }

  onModalBeforeShow(modal) {
    if (!modal.backgroundScroll) {
      disableBodyScroll(modal.element);
      // scrollbar width as padding
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      setTimeout(() => {
        document.body.style.marginRight = `${scrollBarWidth}px`;
      });
    }
  }

  onModalShow(modal) {
    document.documentElement.classList.add('has-active-modal');
    this.isOpeningNewModal = false;
    this.activeModal = modal;
    if (modal.showHash) {
      this.setHash(`#${modal.id}`);
    } else {
      this.removeHash();
    }
  }

  bindModalTriggers() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('js-modal-trigger')) {
        const trigger = e.target;
        const modalId = trigger.getAttribute('data-modal-id');
        const modal = this.idModalMap.get(modalId);
        this.isOpeningNewModal = true;

        if (this.activeModal) {
          this.activeModal.hide();
          setTimeout(() => {
            modal.show();
          }, this.activeModal.hideTimeout);
        } else { // Only keep the activeModalTrigger when not in a modal
          this.activeModalTrigger = trigger;
          modal.show();
        }
      }
    });
  }

  bindWindowPopState() {
    window.addEventListener('popstate', () => {
      if (this.activeModal
        && this.activeModal.element.querySelector(window.location.hash) == null) {
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
