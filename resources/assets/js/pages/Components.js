import RecaptchaForm from '../components/forms/RecaptchaForm';
import BasicGoogleMap from '../components/maps/BasicGoogleMap';
import JsonFetcher from '../components/layout/JsonFetcher';
import ModalAnimationExample from '../animations/ModalAnimationExample';
import ModalAnimationExample2 from '../animations/ModalAnimationExample2';

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
    customModal.setBeforeShowAnimation(new ModalAnimationExample());
    customModal.setAfterShowAnimation(new ModalAnimationExample2());
    customModal.setBeforeHideAnimation(new ModalAnimationExample());
    customModal.setAfterHideAnimation(new ModalAnimationExample2());
  }
}
