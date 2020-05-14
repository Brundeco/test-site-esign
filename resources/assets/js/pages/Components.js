import RecaptchaForm from '../components/forms/RecaptchaForm';
import BasicGoogleMap from '../components/maps/BasicGoogleMap';
import CustomModalAnimation from '../components/modals/CustomModalAnimation';

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

    // Custom modal
    const customModal = window.modalManager.createModal(
      document.querySelector('.js-specific-modal-name'),
    );
    customModal.setAnimation(new CustomModalAnimation());
  }
}
