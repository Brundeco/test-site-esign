window.esign = window.esign || {};

esign.init = function () {
  Response.create({
    prop: "width",
    prefix: "min-width- r src",
    breakpoints: [752,0],
    lazy: true
  });

  esign.gaDevelopment();
  esign.cacheSelectors();

  esign.navigation();
  esign.responsiveVideos();

  esign.initMaps();

  esign.formValidation();
  esign.formAjax();
  esign.formAjaxRecaptcha();
};

esign.cacheSelectors = function () {
  esign.cache = {
    // general
    isMobile: esign.isMobile(),

    // navigation
    $nav: $('.main-nav__wrap')
  };
};

esign.navigation = function () {
  $('.main-nav__trigger').click(function(e) {
    e.preventDefault();
    $(this).next('.main-nav__wrap').slideToggle('fast');
  });

  Response.crossover('width', function() {
    if(Response.band(752)) {
      esign.cache.$nav.css('display', 'block');
    } else {
      esign.cache.$nav.css('display', 'none');
    }
  });
};

esign.responsiveVideos = function () {
  $('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"], iframe[src*="player.vimeo"]').wrap('<div class="video-container"></div>');
};


// ---------------------------------------
// ----------------- Maps ----------------
// ---------------------------------------

function addContactGoogleMaps(container, latitude, longitude) {

  var zoom = 15,
    disable = true,
    scroll = false,
    styledMap = new google.maps.StyledMapType(googleMapsStyles, {name: 'Styled Map'}),
    mapCenter = new google.maps.LatLng(latitude, longitude),
    mapOptions = {
      zoom: zoom,
      panControl: true,
      zoomControl: disable,
      scaleControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      minZoom: 2,
      scrollwheel: scroll,
      center: mapCenter,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(document.getElementById(container), mapOptions);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  google.maps.event.addDomListener(window, 'resize', function () {
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

  google.maps.event.addListener(marker, 'click', function () {
    window.open(externUrl, '_blank');
  });

  return marker;
}

esign.initMaps = function () {
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
};


// ---------------------------------------
// ----------------- FORMS & Captcha -----
// ---------------------------------------

// normaal formulier versturen met post
esign.formAjax = function () {
  $('.form-ajax').submit(function(e) {
    var $form = $(this);
    $form.find('button,input[type="submit"]').attr("disabled", "disabled");

    $.post($form.attr('action'), $form.serializeArray(), function(data) {
      if(data.errors === false) {
        $form.html(data.result);
      } else {
        $form.find('.result').html(data.result);
        $form.find('button, input[type="submit"]').removeAttr('disabled');
      }
    });

    e.preventDefault();
    return false;
  });
};

// recaptcha formulier versturen met post
esign.formAjaxRecaptcha = function () {
  $('.form-ajax-recaptcha').submit(function (e) {
    e.preventDefault();
    var $form = $(this);

    if ($form.hasClass('validate')) {
      if ($form.validationEngine('validate') == false) {
        return false;
      }
    }

    if ($form.find('[name="g-recaptcha-response"]').length && $form.find('[name="g-recaptcha-response"]').val() != '') {
      grecaptcha.reset();
    }

    grecaptcha.execute($form.find('.g-recaptcha').data('widgetid'));

    return false;
  });
};

// recaptcha submit handler
esign.recaptchaFormSend = function (form) {
  $form = $(form);
  $form.find('input[type="submit"], button').attr('disabled', 'disabled');
  form_data = $form.serializeArray();

  $.post($form.attr('action'), form_data, function (data) {

    $('li').removeClass('error');
    var $result = $form.find('.result');

    if (data.errors === false) {
      $form.html(data.result);

      if (typeof ga === "function") {
        ga('send', 'pageview', $form.attr('action'));
      }

      //todo GTM trigger event

    } else {
      $result.html(data.result);
      if (data.fields) {
        $.each(data.fields, function (i, field) {
          $('input[name="' + field + '"],textarea[name="' + field + '"]').addClass('error');
        });
      }
    }

    $form.find('input[type="submit"], button').removeAttr('disabled');

  }).fail(function (response) {
    alert('Error: ' + response.responseText);
  });
};

// recaptcha submit handler per formulier
var submitRecaptchaFormContact = function (token) {
  esign.recaptchaFormSend($('#form-contact'));
};
var submitRecaptchaFormNewsletter = function (token) {
  esign.recaptchaFormSend($('#form-newsletter'));
};

// explicit recaptcha methode (zodat er meerdere op 1 pagina kunnen)
var onloadReCaptchaCallback = function () {
  $('.g-recaptcha').each(function (i, el) {
    var attributes = {
      'sitekey': $(el).data('sitekey'),
      'size': $(el).data('size'),
      'callback': $(el).data('callback')
    };

    var widgetid = grecaptcha.render(el, attributes);
    $(el).data('widgetid', widgetid);
  });
};


// ---------------------------------------
// ----------------- FORMS validation ----
// ---------------------------------------

esign.formValidation = function () {
  if(esign.cache.isMobile) {
    $('.validate').validationEngine();
  } else {
    $('.validate').validationEngine({scroll: false});
  }
};


// ---------------------------------------
// ----------------- UTILS -----------
// ---------------------------------------
esign.isMobile = function () {
  var deviceAgent = navigator.userAgent.toLowerCase(),
      isMobile = (deviceAgent.match(/(iphone|ipod|ipad)/) ||
        deviceAgent.match(/(android)/)  ||
        deviceAgent.match(/(iemobile)/) ||
        deviceAgent.match(/blackberry/i) ||
        deviceAgent.match(/bada/i)) ||
        (/OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent));

  if(isMobile) {
    $('html').addClass('mobile');
  } else {
    $('html').addClass('no-mobile');
  }

  return isMobile;
};


// ---------------------------------------
// ----------------- DEV TOOLS -----------
// ---------------------------------------

// Log ga calls in development
esign.gaDevelopment = function() {
  if (typeof ga === typeof undefined) {
    window.ga = function() {
      var argumentsArray = [];
      for (var key in arguments) {
        if (arguments.hasOwnProperty(key)) {
          argumentsArray.push(arguments[key]);
        }
      }

      var msg = '[GA DEV] Call with arguments [' + argumentsArray.join(',') + ']';
      console.log('%c' + msg, 'background: #ff9800; color: #fff;');
    };
  }
};

require([
  'requirejs/require',
  'jquery/dist/jquery',
  'js/polyfills/native-console',
  'response.js/response',
  'jquery-touchswipe/jquery.touchSwipe',
  'js/libs/validation/languages/jquery.validationEngine-nl',
  'js/libs/validation/jquery.validationEngine',
  'js/googlemaps-styles'
], function() {
  // Initialize on docready
  $(esign.init);
});
