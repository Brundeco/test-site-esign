export default function() {
  const containers = document.querySelectorAll('.accordion__parent');
  const toggleContainers = document.querySelectorAll('.accordion__hide');
  const buttons = document.querySelectorAll('.button-state');

  containers.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (toggleContainers[index].className === 'accordion__show') {
        toggleContainers[index].className = 'accordion__hide';
        buttons[index].textContent = '+';
      } else {
        toggleContainers[index].className = 'accordion__show';
        buttons[index].textContent = '-';
      }
    });
  });
}
