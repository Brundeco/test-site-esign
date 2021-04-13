export default function() {
  const replaceColor = '#fff';
  const navElement = document.querySelector('.page-header');
  const links = document.querySelectorAll('.main-nav__link');
  const logo = document.querySelector('.page-header__logo');

  const myScrollFunc = () => {
    const y = window.scrollY;
    if (y >= 30) {
      navElement.style.background = replaceColor;
      navElement.style.height = '10vh';
      logo.style.color = '#000';
      links.forEach(element => {
        element.style.color = '#000';
      });
    } else {
      navElement.style.background = 'rgba(0, 0, 0, 0)';
      navElement.style.height = '15vh';
      logo.style.color = '#fff';
      links.forEach(element => {
        element.style.color = '#fff';
      });
    }
  };

  if (window.location.href.indexOf('index') > -1) {
    window.addEventListener('scroll', myScrollFunc);
  } else {
    links.forEach(element => {
      element.style.color = '#000';
      logo.style.color = '#000';
    });
  }
}
