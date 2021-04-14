export default function() {
  const accordions = document.querySelectorAll('.js-accordion');

  accordions.forEach(element => {
    const panel = element.querySelector('.js-accordion-panel');
    const button = element.querySelector('.js-accordion-trigger');
    const panelState = element.querySelector('.js-accordion-panel-state');

    button.addEventListener('click', () => {
      if (panel.classList.contains('accordion--show')) {
        panel.classList.remove('accordion--show');
        panelState.textContent = '-';
      } else {
        panel.classList.add('accordion--show');
        panelState.textContent = '+';
      }
    });
  });
}
