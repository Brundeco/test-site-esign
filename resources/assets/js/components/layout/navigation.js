export default function () {
  const header = document.querySelector('.page-header--fixed');
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.classList.add('page-header--collapsed');
    } else if (scrollTop < 50) {
      header.classList.remove('page-header--collapsed');
    }
    lastScrollTop = scrollTop;
  });
}
