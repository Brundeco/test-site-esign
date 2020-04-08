import hyperform from 'hyperform';

import { setHyperformLang } from './validationTranslations';

export default function() {
  setHyperformLang();

  [...document.querySelectorAll('form.validate')].forEach(form => {
    hyperform(form, {
      classes: {
        warning: 'input-group__error',
      },
    });
  });

  const inputClass = 'input-group';
  const errorClass = 'input-group--error';

  // changed warning renderer
  hyperform.setRenderer('attachWarning', (warning, element) => {
    const parent = element.parentNode;
    parent.appendChild(warning);

    if (parent.classList.contains(inputClass)) {
      parent.classList.add(errorClass);
    } else if (parent.parentNode.classList.contains(inputClass)) {
      parent.parentNode.classList.add(errorClass);
    }
  });

  // set detach
  hyperform.setRenderer('detachWarning', (warning, element) => {
    const parent = element.parentNode;
    parent.removeChild(warning);
    parent.classList.remove(errorClass);
    parent.parentNode.classList.remove(errorClass);
  });
}
