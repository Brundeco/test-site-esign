import $ from 'jquery';
import googleMapsStyles from './constants/googleMapsStyles';

require('./polyfills/native-console');
// require('jquery-touchswipe/jquery.touchSwipe'); // use with fancybox, cycle2, etc
require('./components/validation/languages/jquery.validationEngine-nl');
require('./components/validation/jquery.validationEngine');

const esign = window.esign || {};

const google = window.google || {};
const grecaptcha = window.grecaptcha || {};
let { ga } = window;
const baseUrl = window.baseUrl || '';
const matchMobile = window.matchMedia('(min-width: 768px)');

esign.init = () => {
  $('html').removeClass('no-js').addClass('js');

  // esign.gaDevelopment();
  esign.cacheSelectors();

  esign.navigation();
  esign.responsiveVideos();

  esign.initMaps();

  esign.formValidation();
  esign.formAjax();
  esign.formAjaxRecaptcha();
};

esign.cacheSelectors = () => {
  esign.cache = {
    // general
    isMobile: esign.isMobile(),

    // navigation
    $nav: $('.main-nav__wrap'),
  };
};

esign.navigation = () => {
  $('.main-nav__trigger').click((e) => {
    e.preventDefault();
    $(e.currentTarget).next('.main-nav__wrap').slideToggle('fast');
  });

  matchMobile.addListener((mediaQuery) => {
    if (mediaQuery.matches) {
      esign.cache.$nav.css('display', 'block');
    } else {
      esign.cache.$nav.css('display', 'none');
    }
  });
};

esign.responsiveVideos = () => {
  $('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"], iframe[src*="player.vimeo"]').wrap('<div class="video-container"></div>');
};


// Maps
/* TODO: class of google maps map */
function addContactGoogleMaps(container, latitude, longitude) {
  const zoom = 15;
  const disable = true;
  const scroll = false;
  const styledMap = new google.maps.StyledMapType(
    googleMapsStyles,
    { name: 'Styled Map' },
  );
  const mapCenter = new google.maps.LatLng(latitude, longitude);
  const mapOptions = {
    zoom,
    panControl: true,
    zoomControl: disable,
    scaleControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    minZoom: 2,
    scrollwheel: scroll,
    center: mapCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  const map = new google.maps.Map(document.getElementById(container), mapOptions);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  google.maps.event.addDomListener(window, 'resize', () => {
    map.setCenter(mapCenter);
  });

  return map;
}

function addContactGoogleMapsMarker(map, latitude, longitude, title, externUrl) {
  const myLatlng = new google.maps.LatLng(latitude, longitude);

  const markerIcon = {
    url: `${baseUrl}assets/images/marker.png`,
    size: new google.maps.Size(100, 128),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 64),
    scaledSize: new google.maps.Size(50, 64),
  };

  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    icon: markerIcon,
  });

  google.maps.event.addListener(marker, 'click', () => {
    window.open(externUrl, '_blank');
  });

  return marker;
}

esign.initMaps = () => {
  const mapData = {
    title: 'Esign',
    lat: 51.0325538,
    long: 3.7333816,
    externUrl: 'https://www.google.be/maps/place/Esign+-+Web+%26+Graphics/@51.0325538,3.7333816,19z/data=!3m1!4b1!4m5!3m4!1s0x47c373970c763623:0xde317546f86febc9!8m2!3d51.0325538!4d3.7339288',
  };

  if ($('#map').length > 0) {
    const map = addContactGoogleMaps('map', mapData.lat, mapData.long);
    addContactGoogleMapsMarker(map, mapData.lat, mapData.long, mapData.title, mapData.externUrl);
  }
};


// ---------------------------------------
// ----------------- FORMS & Captcha -----
// ---------------------------------------

// normaal formulier versturen met post
esign.formAjax = () => {
  $('.form-ajax').submit((e) => {
    const $form = $(this);
    $form.find('button,input[type="submit"]').attr('disabled', 'disabled');

    $.post($form.attr('action'), $form.serializeArray(), (data) => {
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
};

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

        if (typeof ga === 'function') {
          ga('send', 'pageview', $form.attr('action'));
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


// ---------------------------------------
// ----------------- FORMS validation ----
// ---------------------------------------

esign.formValidation = () => {
  if (esign.cache.isMobile) {
    $('.validate').validationEngine();
  } else {
    $('.validate').validationEngine({ scroll: false });
  }
};


// ---------------------------------------
// ----------------- UTILS -----------
// ---------------------------------------
esign.isMobile = () => {
  const deviceAgent = navigator.userAgent.toLowerCase();
  const isMobile = (
    deviceAgent.match(/(iphone|ipod|ipad)/)
    || deviceAgent.match(/(android)/)
    || deviceAgent.match(/(iemobile)/)
    || deviceAgent.match(/blackberry/i)
    || deviceAgent.match(/bada/i))
    || (/OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent)
    );

  if (isMobile) {
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
esign.gaDevelopment = () => {
  if (typeof ga === typeof undefined) {
    ga = (...args) => {
      const msg = `[GA DEV] Call with arguments "${args.join('", "')}"`;
      // eslint-disable-next-line no-console
      console.log(`%c${msg}`, 'background: #ff9800; color: #fff;');
    };
  }
};

$(esign.init);
