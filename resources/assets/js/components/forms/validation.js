import $ from 'jquery';
import { isMobile } from '../../utils/isMobile';

require('../validationengine/languages/jquery.validationEngine-nl');
require('../validationengine/jquery.validationEngine');

export default function () {
  if (isMobile) {
    $('.validate').validationEngine();
  } else {
    $('.validate').validationEngine({ scroll: false });
  }
}
