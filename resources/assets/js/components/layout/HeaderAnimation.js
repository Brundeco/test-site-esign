export default function() {
  const header = document.querySelector('.page-header');
  const currentPage = document.body.classList.value;

  const myScrollFunc = () => {
    const y = window.scrollY;
    if (y >= 30) {
      header.classList.add('header--light-bg');
      header.classList.remove('header--light-no-bg');
    } else {
      header.classList.add('header--light-no-bg');
      header.classList.remove('header--light-bg');
    }
  };
  if (currentPage === 'home') {
    header.classList.add('header--light-no-bg');
    window.addEventListener('scroll', myScrollFunc);
  }
}
