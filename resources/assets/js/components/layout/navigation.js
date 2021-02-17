/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
export default function() {
  const header = document.querySelector('.js-header');
  const headerPush = document.querySelector('.js-header-push');
  let headerHeight = header.offsetHeight;
  const compensateHeaderItems = document.querySelectorAll('.js-compensate-header');
  let stickySupport = true;
  let lastScroll = 0;
  let scrolled;
  const offset = 120;

  if (document.documentMode) {
    stickySupport = false;
  }

  function calculateHeaderPush() {
    headerPush.style.height = `${headerHeight}px`;
  }

  // Add js-header-compensation class to absolute / fixed / sticky elements to compensate top-positioning
  const compensateHeader = () => {
    headerHeight = header.offsetHeight;
    [...compensateHeaderItems].forEach(elem => {
      elem.style.top = `${headerHeight + 30}px`;
    });
  };

  function checkScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Make sure they scroll more than delta
    if (Math.abs(lastScroll - scrollTop) <= offset) return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (scrollTop > lastScroll && scrollTop > headerHeight) {
      // Scroll Down
      header.classList.add('page-header--collapsed');
    } else {
      // Scroll Up
      header.classList.remove('page-header--collapsed');
    }

    lastScroll = scrollTop;
  }

  calculateHeaderPush();
  checkScroll();

  window.addEventListener('scroll', () => {
    checkScroll();
    if (stickySupport) {
      compensateHeader();
    }
    scrolled = true;
  });

  setInterval(() => {
    if (scrolled) {
      checkScroll();
      scrolled = false;
    }
  }, 250);

  window.addEventListener('resize', () => {
    calculateHeaderPush();
    if (stickySupport) {
      compensateHeader();
    }
    checkScroll();
  });

  // Add resizeobserver for resizing header with inspect element a tive
  const headerHeightObserver = new ResizeObserver(() => {
    calculateHeaderPush();
    if (stickySupport) {
      compensateHeader();
    }
    checkScroll();
  });

  headerHeightObserver.observe(header);
}
