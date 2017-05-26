// custom-modal.js required!

$(function() {


  if($(window).width() <= 752 ) {
    $('body').addClass('mobile');
  }else{
    $('body').removeClass('mobile');
  }

  esign.modals();
  $('.md-show').removeClass('md-show');


  Response.crossover('width', function() {
    if(Response.band(752)) {

      $nav.css('display', 'block');
      $('body').removeClass('mobile');
      $('.md-show').removeClass('md-show');
    } else {
      $nav.css('display', 'block');
      $('body').addClass('mobile');
    }
  });


});
