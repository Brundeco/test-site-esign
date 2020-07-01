import Bowser from 'bowser';
import Cookies from 'js-cookie';

export default function() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  const isValidBrowser = browser.satisfies({
    'internet explorer': '>11',
    firefox: '>31',
    chrome: '>29',
    safari: '>7',

    mobile: {
      safari: '>=9',
      'android browser': '>= 4.4',
    },
  });

  if (!isValidBrowser && typeof isValidBrowser !== 'undefined') {
    if (!Cookies.get('browser-notify')) {
      Cookies.set('browser-notify', 'true', { expires: 7 });
      document.documentElement.classList.add('show-browser-support');
    }
  }
  document.querySelector('.js-browser-support-close').addEventListener('click', () => {
    document.querySelector('.browser-support').style.display = 'none';
  });
}
