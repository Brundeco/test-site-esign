esign.imageLoading = function () {

  $('.b-lazy').each(function (index, element) {

    var thisEl = element;

    $(element).on('load', function () {
      $(element).parent().parent().find('.loading').addClass('done');
      $(element).parent().addClass('loaded');
    })

  });


  var bLazy = new Blazy({
    success: function (e) {
      //$(e).parent().parent().find('.loading').remove();
      console.log('success')
    },
    error: function (e, msg) {
      console.log("Error: ", e, msg);
    }
  });
  //fix om op te lossen dat soms sommige images niet laden na herbezoeken pagina
  //https://github.com/dinbror/blazy/issues/24
  setTimeout(bLazy.revalidate, 100);


};