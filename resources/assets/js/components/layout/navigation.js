/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
export default function() {
  const header = document.querySelector('.js-header');
  const headerPush = document.querySelector('.js-header-push');
  let headerHeight;
  let pageHasLoaded = false;

  const calculateHeaderPush = () => {
    headerPush.style.height = `${headerHeight}px`;

    // Remove initial min-height of push element (which purpose is to prevent jumping effect when loading page)
    if (headerPush.style.minHeight !== null && pageHasLoaded) {
      headerPush.style.minHeight = '0';
    }
  };

  const init = () => {
    // Only change height when page has loaded to prevent getting wrong height value
    window.addEventListener('load', () => {
      headerHeight = header.offsetHeight;
      calculateHeaderPush();
    });

    // Resize event
    window.addEventListener('resize', () => {
      headerHeight = header.offsetHeight;
      pageHasLoaded = true;
      calculateHeaderPush();
    });

    // Add resizeobserver for resizing header with inspect element a tive
    const headerHeightObserver = new ResizeObserver(() => {
      calculateHeaderPush();
    });

    headerHeightObserver.observe(header);
  };

  init();
}
