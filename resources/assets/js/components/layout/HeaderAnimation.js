export default function() {
  const replaceColor = '#fff';
  const navElement = document.querySelector('.page-header');
  const myScrollFunc = () => {
    const y = window.scrollY;
    console.log(y);
    if (y >= 30) {
      navElement.style.background = replaceColor;
      navElement.style.height = '10vh';
    } else {
      navElement.style.background = 'rgba(50, 50, 50, 0)';
      navElement.style.height = '15vh';
    }
  };

  window.addEventListener('scroll', myScrollFunc);
}
