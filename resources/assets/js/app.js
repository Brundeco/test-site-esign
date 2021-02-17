/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import 'classlist-polyfill';

import objectFitImages from 'object-fit-images';
import responsiveVideos from './components/layout/responsiveVideos';
import navigation from './components/layout/navigation';
import validation from './components/forms/validation';
import { form } from './components/forms/form';
import CookieNotification from './components/cookies/CookieNotification';
import ModalManager from './components/modals/ModalManager';

import Contact from './pages/Contact';
import Components from './pages/Components';

// Set js class
const htmlClassList = document.documentElement.classList;
htmlClassList.add('js');
htmlClassList.remove('no-js');

// eslint-disable-next-line
window.modalManager = new ModalManager();

// Layout setup
responsiveVideos();
navigation();
window.cookieNotification = new CookieNotification();
objectFitImages();

// Forms
validation();

if (document.getElementById('form-newsletter')) {
  form('#form-newsletter');
}

// Page specific classes
const pages = {
  Contact,
  Components,
};

const currentPage = document.documentElement.getAttribute('data-page');
if (currentPage) {
  const pageClassName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  if (pageClassName !== '' && typeof pages[pageClassName] === 'function') {
    new pages[pageClassName](); // eslint-disable-line no-new
  }
}

window.modalManager.checkModalOnPageLoad();
