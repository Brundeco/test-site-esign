import RecaptchaForm from '../components/forms/RecaptchaForm';
import BasicGoogleMap from '../components/maps/BasicGoogleMap';
import Form from '../components/forms/form';

export default class Contact {
  constructor() {
    // Recaptcha submit handler for each form
    // const contactForm = new RecaptchaForm('#form-contact');
    const contactForm = new Form(document.querySelector('#form-contact'), {
      async: true,
      recaptcha: true,
      recaptchaCallbackName: 'recaptchaCallbackFormContact'
    });
    /*window.submitRecaptchaFormContact = () => {
      contactForm.submitCallback();
    };*/

    // Map
    const map = new BasicGoogleMap();
    map.init();
  }
}
