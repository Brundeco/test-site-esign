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
  let pageHasLoaded = false;
  const offset = 120;

  const calculateHeaderPush = () => {
    headerPush.style.height = `${headerHeight}px`;

    // Remove initial min-height of push element (which purpose was to prevent jumping effect when loading page)
    if (headerPush.style.minHeight !== null && pageHasLoaded) {
      headerPush.style.minHeight = '0';
    }
  };

  // Add js-header-compensation class to absolute / fixed / sticky elements to compensate top-positioning
  const compensateHeader = () => {
    headerHeight = header.offsetHeight;
    [...compensateHeaderItems].forEach(elem => {
      elem.style.top = `${headerHeight + 30}px`;
    });
  };

  const checkScroll = () => {
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
  };

  const init = () => {
    if (document.documentMode) {
      stickySupport = false;
    }

    // Only change height when page has loaded to prevent getting wrong height value
    window.addEventListener('load', () => {
      calculateHeaderPush();
      if (stickySupport) {
        compensateHeader();
      }
      checkScroll();
    });

    // Scroll event
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

    // Resize event
    window.addEventListener('resize', () => {
      pageHasLoaded = true;
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
  };

  init();
}
