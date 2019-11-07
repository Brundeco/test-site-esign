import RecaptchaForm from '../components/forms/RecaptchaForm';
import BasicGoogleMap from '../components/maps/BasicGoogleMap';
import JsonFetcher from '../components/layout/JsonFetcher';
import ModalBeforeShowAnimationExample from '../animations/ModalBeforeShowAnimationExample';
import ModalAfterShowAnimationExample from '../animations/ModalAfterShowAnimationExample';
import ModalAfterHideAnimationExample from '../animations/ModalAfterHideAnimationExample';
import ModalBeforeHideAnimationExample from '../animations/ModalBeforeHideAnimationExample';

export default class Components {
  constructor() {
    // Recaptcha submit handler for each form
    const contactForm = new RecaptchaForm('#form-contact');
    window.submitRecaptchaFormContact = () => {
      contactForm.submitCallback();
    };

    // Map
    const map = new BasicGoogleMap();
    map.init();

    // JsonFetcher
    const jsonFetcher = new JsonFetcher(document.querySelector('.json-fetcher'));
    jsonFetcher.init();

    // Custom modal
    const customModal = window.modalManager.createModal(document.querySelector('.js-specific-modal-name'));
    customModal.setBeforeShowAnimation(new ModalBeforeShowAnimationExample());
    customModal.setAfterShowAnimation(new ModalAfterShowAnimationExample());
    customModal.setBeforeHideAnimation(new ModalBeforeHideAnimationExample());
    customModal.setAfterHideAnimation(new ModalAfterHideAnimationExample());
  }
}
