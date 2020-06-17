import BasicGoogleMap from '../components/maps/BasicGoogleMap';
import { form } from '../components/forms/form';

export default class Contact {
  constructor() {
    // Recaptcha submit handler for each form
    form('#form-contact', {
      async: true,
      recaptcha: true,
      recaptchaCallbackName: 'recaptchaCallbackFormContact',
    });

    // Map
    const map = new BasicGoogleMap();
    map.init();
  }
}
