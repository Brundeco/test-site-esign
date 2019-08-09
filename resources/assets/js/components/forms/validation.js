import { Validation } from 'bunnyjs/src/Validation';
import { validationEn } from './validationTranslations';

export default function () {
  Validation.ui.config = {
    classInputGroup: 'input-group',
    classInputGroupError: 'input-group--has-error',
    classLabel: 'input-group__label',
    tagNameError: 'small',
    classError: 'input-group__error',
    selectorInput: '[name]',
  };

  // TODO: load correct language from html lang attribute
  Validation.lang = validationEn;

  [...document.querySelectorAll('form.validate')].forEach((form) => {
    Validation.init(form, true);
  });
}
