import cookie from 'cookiejs';

export default function () {
  if (!cookie.get('cookie-consent')) {
    const cookieNotificationEl = document.getElementById('cookie-notification');
    const acceptCookiesTrigger = document.getElementById('accept-cookies');

    acceptCookiesTrigger.addEventListener('click', () => {
      cookie.set('cookie-consent', '1', 365);
      cookieNotificationEl.classList.add('hide');
    });

    cookieNotificationEl.classList.remove('hide');
  }
}
