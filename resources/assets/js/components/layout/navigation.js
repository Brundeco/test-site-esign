
export default function () {
  const $header = $('.page-header--fixed');
  let lastScrollTop = 0;
  $(window).scroll(function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      $header.addClass('page-header--collapsed');
    } else {
    }
    if (st < 50) {
      $header.removeClass('page-header--collapsed');
    }
    lastScrollTop = st;
  });
}
