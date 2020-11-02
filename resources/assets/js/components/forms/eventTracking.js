export default function() {
  const trackingTargets = document.querySelectorAll('[data-gtm-track]');
  window.dataLayer = window.dataLayer || [];

  [...trackingTargets].forEach(target => {
    target.addEventListener('click', () => {
      const event = target.hasAttribute('download') ? 'download' : 'button';
      window.dataLayer.push({
        event,
        [`${event}Title`]: document.title,
        [`${event}Label`]: target.textContent,
      });
    });
  });
}
