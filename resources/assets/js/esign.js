import navigation from './components/layout/navigation';
import responsiveVideos from './components/layout/responsiveVideos';
import validation from './components/forms/validation';
import RecaptchaForm from './components/forms/RecaptchaForm';
import BasicGoogleMap from './components/maps/BasicGoogleMap';

require('./utils/nativeConsole');
// require('jquery-touchswipe/jquery.touchSwipe'); // use with fancybox, cycle2, etc

// Set js class
const htmlClassList = document.documentElement.classList;
htmlClassList.add('js');
htmlClassList.remove('no-js');

// Layout setup
navigation();
responsiveVideos();

// Forms
validation();

// Recaptcha submit handler for each form
const contactForm = new RecaptchaForm('#form-contact');
window.submitRecaptchaFormContact = () => {
  contactForm.submitCallback();
};

const newsletterForm = new RecaptchaForm('#form-newsletter');
window.submitRecaptchaFormNewsletter = () => {
  newsletterForm.submitCallback();
};

// Maps
const map = new BasicGoogleMap();
map.init();

// Enable this if you want to test ga calls in development
// gaDevelopment();
