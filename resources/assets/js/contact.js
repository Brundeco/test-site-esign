function addContactGoogleMaps(container, latitude, longitude) {

  var zoom = 15,
      disable = true,
      scroll = false,
      styledMap = new google.maps.StyledMapType(googleMapsStyles, { name: 'Styled Map' }),
      mapCenter = new google.maps.LatLng(latitude, longitude),
      mapOptions = {
        zoom: zoom,
        panControl: true,
        zoomControl: disable,
        scaleControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        minZoom : 2,
        scrollwheel: scroll,
        center: mapCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(document.getElementById(container), mapOptions);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(mapCenter);
  });

  return map;
}

function addContactGoogleMapsMarker(map, latitude, longitude, title, externUrl) {
  var myLatlng = new google.maps.LatLng(latitude, longitude),
      markerIcon = {
          url: baseUrl + 'assets/images/marker.png',
          size: new google.maps.Size(100, 128),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(25, 64),
        scaledSize: new google.maps.Size(50, 64)
      },
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: markerIcon
      });

  google.maps.event.addListener(marker, 'click', function() {
    window.open(externUrl, '_blank');
  });

  return marker;
}

// Recaptcha
window.esignContact = window.esignContact || {};

esignContact.init = function () {
  esignContact.formAjax();
};

/* Captcha */
esignContact.formAjax = function () {
  $('.form-ajax-recaptcha').submit(function(e) {
    e.preventDefault();
    var $form = $(this);


    if($form.hasClass('validate')){
      if ($form.validationEngine('validate') == false) {
        return false;
      }
    }

    if($form.find('[name="g-recaptcha-response"]').length && $form.find('[name="g-recaptcha-response"]').val() != ''){
      grecaptcha.reset();
    }

    grecaptcha.execute($form.find('.g-recaptcha').data('widgetid'));

    return false;
  });
};

/**
 * async ReCaptcha inladen en toevegen aan elk recaptcha blokje
 */
var onloadReCaptchaCallback = function() {
  $('.g-recaptcha').each(function(i,el){
    var attributes = {
      'sitekey'  : $(el).data('sitekey'),
      'size'     : $(el).data('size'),
      'callback' : $(el).data('callback')
    };

    var widgetid = grecaptcha.render(el, attributes);
    $(el).data('widgetid',widgetid);
  });
};

esignContact.recaptchaFormSend = function(form){

  $form = $(form);
  $form.find('input[type="submit"], button').attr('disabled', 'disabled');

  form_data = $form.serializeArray();

  $.post($form.attr('action'), form_data, function (data) {

    $('li').removeClass('error');
    var $result = $form.find('.result');

    if (data.errors === false) {
      $form.html(data.result);

      if(typeof ga === "function"){
        ga('send', 'pageview', $form.attr('action'));
      }

    } else {
      $result.html(data.result);
      if (data.fields) {
        $.each(data.fields, function (i, field) {
          $('input[name="' + field + '"],textarea[name="' + field + '"]').addClass('error');
        });
      }
    }

    $form.find('input[type="submit"], button').removeAttr('disabled');

  }).fail(function(response) {
    alert('Error: ' + response.responseText);
  });

};

require([
  'requirejs/require',
  'jquery/dist/jquery',
  'js/libs/validation/languages/jquery.validationEngine-nl',
  'js/libs/validation/jquery.validationEngine',
  'js/googlemaps-styles'
], function() {
  $(function() {

    if(!Modernizr.touch) {
      $('.validate').validationEngine();
    } else {
      $('.validate').validationEngine({scroll: false});
    }

    var mapData = {
      title: 'Esign',
      lat: 51.0325538,
      long: 3.7333816,
      externUrl: 'https://www.google.be/maps/place/Esign+-+Web+%26+Graphics/@51.0325538,3.7333816,19z/data=!3m1!4b1!4m5!3m4!1s0x47c373970c763623:0xde317546f86febc9!8m2!3d51.0325538!4d3.7339288'
    };

    if ($('#map').length > 0) {
      var map = addContactGoogleMaps('map', mapData.lat, mapData.long);
      addContactGoogleMapsMarker(map, mapData.lat, mapData.long, mapData.title, mapData.externUrl);
    }

  });


  // initialize on docready
  $(esignContact.init);
});
