import $ from 'jquery';

// Send form via ajax
export default function() {
  $('.form-ajax').submit(e => {
    const $form = $(e.currentTarget);
    $form.find('button,input[type="submit"]').attr('disabled', 'disabled');

    $.post($form.attr('action'), $form.serializeArray(), data => {
      if (data.errors === false) {
        $form.html(data.result);
      } else {
        $form.find('.result').html(data.result);
        $form.find('button, input[type="submit"]').removeAttr('disabled');
      }
    });

    e.preventDefault();
    return false;
  });
}
