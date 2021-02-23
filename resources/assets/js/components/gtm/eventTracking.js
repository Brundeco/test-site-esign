export default function() {
  const trackingTargets = document.querySelectorAll('[data-gtm-track]');
  window.dataLayer = window.dataLayer || [];

  [...trackingTargets].forEach(target => {
    target.addEventListener('click', () => {
      const event = target.hasAttribute('download') ? 'download' : 'button';
      const title = target.dataset.gtmTitle ? target.dataset.gtmTitle : document.title;
      const label = target.dataset.gtmLabel ? target.dataset.gtmLabel : target.textContent;
      window.dataLayer.push({
        event,
        [`${event}Title`]: title,
        [`${event}Label`]: label,
      });
    });
  });
}
