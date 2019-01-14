import $ from 'jquery';

import { grecaptcha } from './constants/defaults';
import navigation from './components/layout/navigation';
import responsiveVideos from './components/layout/responsiveVideos';

import BasicGoogleMap from './components/maps/BasicGoogleMap';
import validation from './components/forms/validation';

require('./utils/nativeConsole');
// require('jquery-touchswipe/jquery.touchSwipe'); // use with fancybox, cycle2, etc


const esign = window.esign || {};

// Set js class
const htmlClassList = document.documentElement.classList;
htmlClassList.add('js');
htmlClassList.remove('no-js');

// Layout setup
navigation();
responsiveVideos();

// Forms
validation();

// Maps
const map = new BasicGoogleMap();
map.init();

// Enable this if you want to test ga calls in development
// gaDevelopment();


// recaptcha formulier versturen met post
esign.formAjaxRecaptcha = () => {
  $('.form-ajax-recaptcha').submit((e) => {
    e.preventDefault();
    const $form = $(this);

    if ($form.hasClass('validate')) {
      if ($form.validationEngine('validate') === false) {
        return false;
      }
    }

    if (
      $form.find('[name="g-recaptcha-response"]').length
      && $form.find('[name="g-recaptcha-response"]').val() !== '') {
      grecaptcha.reset();
    }

    grecaptcha.execute($form.find('.g-recaptcha').data('widgetid'));

    return false;
  });
};

// recaptcha submit handler
esign.recaptchaFormSend = (form) => {
  const $form = $(form);
  $form.find('input[type="submit"], button').attr('disabled', 'disabled');

  $.ajax({
    type: 'POST',
    url: $form.attr('action'),
    data: new FormData($form[0]),
    processData: false,
    // Allows us to get file fields via JS
    contentType: false,
    success(data) {
      $('li').removeClass('error');
      const $result = $form.find('.result');

      if (data.errors === false) {
        $form.html(data.result);

        if (typeof window.ga === 'function') {
          window.ga('send', 'pageview', $form.attr('action'));
        }

        // todo GTM trigger event
      } else {
        $result.html(data.result);
        if (data.fields) {
          $.each(data.fields, (i, field) => {
            $(`input[name="${field}"],textarea[name="${field}"]`).addClass('error');
          });
        }
      }

      $form.find('input[type="submit"], button').removeAttr('disabled');
    },
  }).fail((response) => {
    // eslint-disable-next-line no-console
    console.log(`Error: ${response.responseText}`);
  });
};

// recaptcha submit handler per formulier
window.submitRecaptchaFormContact = () => {
  // use argument token if needed
  esign.recaptchaFormSend($('#form-contact'));
};

window.submitRecaptchaFormNewsletter = () => {
  esign.recaptchaFormSend($('#form-newsletter'));
};

// explicit recaptcha methode (zodat er meerdere op 1 pagina kunnen)
window.onloadReCaptchaCallback = () => {
  $('.g-recaptcha').each((i, el) => {
    const attributes = {
      sitekey: $(el).data('sitekey'),
      size: $(el).data('size'),
      callback: $(el).data('callback'),
    };

    const widgetid = grecaptcha.render(el, attributes);
    $(el).data('widgetid', widgetid);
  });
};
