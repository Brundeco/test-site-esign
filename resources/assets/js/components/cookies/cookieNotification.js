import Cookies from 'js-cookie';

export default function() {
  if (!Cookies.get('cookie-consent')) {
    const cookieNotificationEl = document.getElementById('cookie-notification');
    const acceptCookiesTrigger = document.getElementById('accept-cookies');

    acceptCookiesTrigger.addEventListener('click', () => {
      Cookies.set('cookie-consent', '1', { expires: 365 });
      cookieNotificationEl.classList.add('hide');
    });

    cookieNotificationEl.classList.remove('hide');
  }
}
