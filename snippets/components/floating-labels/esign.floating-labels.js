esign.floatingLabels = function(){

  if (document.createElement("input").placeholder == undefined) {
    $('.floating-label--container input').addClass('active');
    $('.floating-label--container label').addClass('active');
  } else {
    $('.floating-label--container').each(function (index, element) {
      $(element).find('input').on('select keydown', function () {
        $(this).parent().find('label').addClass('active');
        $(this).addClass('active');
      });

      $(element).find('input').on('keyup blur ', function () {
        if ($(this).parent().find('input').val().length == 0) {
          $(this).parent().find('label').removeClass('active');
          $(this).removeClass('active');
        }
      });
    });
  }

};
