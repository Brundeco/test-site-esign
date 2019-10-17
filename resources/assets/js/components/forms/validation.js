import { Validation } from 'bunnyjs/src/Validation';
import {
  validationEn,
  validationNl,
  validationFr,
  validationDe,
} from './validationTranslations';

const getLang = () => {
  switch (document.documentElement.lang) {
    case 'nl':
      return validationNl;
    case 'fr':
      return validationFr;
    case 'de':
      return validationDe;
    default:
      return validationEn;
  }
};

export default function () {
  Validation.ui.config = {
    classInputGroup: 'input-group',
    classInputGroupError: 'input-group--has-error',
    classLabel: 'input-group__label',
    tagNameError: 'small',
    classError: 'input-group__error',
    selectorInput: '[name]',
  };

  Validation.lang = getLang();

  [...document.querySelectorAll('form.validate')].forEach((form) => {
    Validation.init(form, true);
  });
}
