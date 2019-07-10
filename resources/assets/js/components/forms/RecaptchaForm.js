import $ from 'jquery';
import { grecaptcha } from '../../constants/defaults';

export default class RecaptchaForm {
  constructor(formId) {
    this.$form = $(formId);

    this.$form.submit((e) => {
      e.preventDefault();

      if (this.$form.hasClass('validate')) {
        if (this.$form.validationEngine('validate') === false) {
          return false;
        }
      }

      const $recaptchaResponse = this.$form.find('[name="g-recaptcha-response"]');
      if ($recaptchaResponse.length && $recaptchaResponse.val() !== '') {
        grecaptcha.reset();
      }

      grecaptcha.execute(this.$form.find('.g-recaptcha').data('widgetid'));

      return false;
    });
  }

  submitCallback() {
    if (!this.$form.is('.form-ajax')) {
      this.$form.off('submit').submit();
      return;
    }

    const url = this.$form.attr('action');
    const data = new FormData(this.$form[0]);
    const $buttons = this.$form.find('input[type="submit"], button');

    $.ajax({
      type: 'POST',
      url,
      data,
      processData: false,
      // Allows us to get file fields via JS
      contentType: false,
    }).then((response) => {
      $('li').removeClass('error');

      if (response.errors === false) {
        this.$form.html(response.result);

        // Trigger GA or GTM event
        if (typeof window.ga === 'function') {
          window.ga('send', 'pageview', url);
        }
      }

      $buttons.removeAttr('disabled');
    }).catch((responseData) => {
      const response = responseData.responseJSON;
      // eslint-disable-next-line no-console
      console.log(`Error: ${responseData.responseText}`);

      this.$form.find('.result').html(response.result);
      if (response.fields) {
        $.each(response.fields, (i, field) => {
          $(`input[name="${field}"],textarea[name="${field}"]`).addClass('error');
        });
      }
    }).then(() => {
      $buttons.prop('disabled', false);
    });
  }
}

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