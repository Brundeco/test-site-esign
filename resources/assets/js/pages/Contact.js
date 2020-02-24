import RecaptchaForm from '../components/forms/RecaptchaForm';
import BasicGoogleMap from '../components/maps/BasicGoogleMap';

export default class Contact {
  constructor() {
    // Recaptcha submit handler for each form
    const contactForm = new RecaptchaForm('#form-contact');
    window.submitRecaptchaFormContact = () => {
      contactForm.submitCallback();
    };

    // Map
    const map = new BasicGoogleMap();
    map.init();
  }
}
