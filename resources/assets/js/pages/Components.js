import RecaptchaForm from '../components/forms/RecaptchaForm';
import BasicGoogleMap from '../components/maps/BasicGoogleMap';
import initJsonFetcher from '../components/json-fetcher/init-json-fetcher';

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
    this.init();
  }

  init() {
    initJsonFetcher();
  }
}
