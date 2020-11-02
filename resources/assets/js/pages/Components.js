import BasicGoogleMap from '../components/maps/BasicGoogleMap';
import CustomModalAnimation from '../components/modals/CustomModalAnimation';
import { form } from '../components/forms/form';
import eventTracking from '../components/forms/eventTracking';

export default class Components {
  constructor() {
    // Recaptcha submit handler for each form
    form('#form-contact');
    eventTracking();
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
