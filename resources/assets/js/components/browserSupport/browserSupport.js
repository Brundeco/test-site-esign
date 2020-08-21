import Bowser from 'bowser';
import Cookies from 'js-cookie';

function browserSupport() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  const isValidBrowser = browser.satisfies({
    'internet explorer': '>10',
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
      document.querySelector('.browser-support').style.display = 'block';
    }
  }
  document.querySelector('.js-browser-support-close').addEventListener('click', () => {
    document.querySelector('.browser-support').style.display = 'none';
    Cookies.set('browser-notify', 'true', { expires: 7 });
  });
}

browserSupport();
