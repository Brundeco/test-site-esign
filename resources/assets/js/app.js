import 'whatwg-fetch';
import navigation from './components/layout/navigation';
import responsiveVideos from './components/layout/responsiveVideos';
import validation from './components/forms/validation';
import RecaptchaForm from './components/forms/RecaptchaForm';
import cookieNotification from './components/cookies/cookieNotification';

import Contact from './pages/Contact';
import Components from './pages/Components';

require('./utils/nativeConsole');
// require('jquery-touchswipe/jquery.touchSwipe'); // use with fancybox, cycle2, etc

// Set js class
const htmlClassList = document.documentElement.classList;
htmlClassList.add('js');
htmlClassList.remove('no-js');

// Layout setup
navigation();
responsiveVideos();
cookieNotification();

// Forms
validation();

if (document.getElementById('form-newsletter')) {
  const newsletterForm = new RecaptchaForm('#form-newsletter');
  window.submitRecaptchaFormNewsletter = () => {
    newsletterForm.submitCallback();
  };
}

// Enable this if you want to test ga calls in development
// gaDevelopment();

// Page specific classes
const pages = {
  Contact,
  Components,
};

const currentPage = document.documentElement.getAttribute('data-page');
if (currentPage) {
  const pageClassName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  if (pageClassName !== '' && typeof pages[pageClassName] === 'function') {
    // Exceptional use of new
    // eslint-disable-next-line no-new
    new pages[pageClassName]();
  }
}
