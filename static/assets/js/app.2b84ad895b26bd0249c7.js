/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/navigation */ "./resources/assets/js/components/layout/navigation.js");
/* harmony import */ var _components_layout_responsiveVideos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/responsiveVideos */ "./resources/assets/js/components/layout/responsiveVideos.js");
/* harmony import */ var _components_forms_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/validation */ "./resources/assets/js/components/forms/validation.js");
/* harmony import */ var _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forms/RecaptchaForm */ "./resources/assets/js/components/forms/RecaptchaForm.js");
/* harmony import */ var _components_tracking_gatracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tracking/gatracking */ "./resources/assets/js/components/tracking/gatracking.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Contact */ "./resources/assets/js/pages/Contact.js");








__webpack_require__(/*! ./utils/nativeConsole */ "./resources/assets/js/utils/nativeConsole.js"); // require('jquery-touchswipe/jquery.touchSwipe'); // use with fancybox, cycle2, etc
// Set js class


var htmlClassList = document.documentElement.classList;
htmlClassList.add('js');
htmlClassList.remove('no-js'); // Layout setup

Object(_components_layout_navigation__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_components_layout_responsiveVideos__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Forms

Object(_components_forms_validation__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Tracking

Object(_components_tracking_gatracking__WEBPACK_IMPORTED_MODULE_5__["default"])();
var newsletterForm = new _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_4__["default"]('#form-newsletter');

window.submitRecaptchaFormNewsletter = function () {
  newsletterForm.submitCallback();
}; // Enable this if you want to test ga calls in development
// gaDevelopment();
// Page specific classes


var pages = {
  Contact: _pages_Contact__WEBPACK_IMPORTED_MODULE_6__["default"]
};
var currentPage = document.documentElement.getAttribute('data-page');

if (currentPage) {
  var pageClassName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  if (pageClassName !== '' && typeof pages[pageClassName] === 'function') {
    // Exceptional use of new
    // eslint-disable-next-line no-new
    new pages[pageClassName]();
  }
}

/***/ }),

/***/ "./resources/assets/js/components/forms/RecaptchaForm.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/forms/RecaptchaForm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecaptchaForm; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var RecaptchaForm =
/*#__PURE__*/
function () {
  function RecaptchaForm(formId) {
    var _this = this;

    _classCallCheck(this, RecaptchaForm);

    this.$form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(formId);
    this.$form.submit(function (e) {
      e.preventDefault();

      if (_this.$form.hasClass('validate')) {
        if (_this.$form.validationEngine('validate') === false) {
          return false;
        }
      }

      var $recaptchaResponse = _this.$form.find('[name="g-recaptcha-response"]');

      if ($recaptchaResponse.length && $recaptchaResponse.val() !== '') {
        // Use window.grecaptcha as recaptcha is async loaded
        window.grecaptcha.reset();
      }

      window.grecaptcha.execute(_this.$form.find('.g-recaptcha').data('widgetid'));
      return false;
    });
  }

  _createClass(RecaptchaForm, [{
    key: "submitCallback",
    value: function submitCallback() {
      var _this2 = this;

      if (!this.$form.is('.form-ajax')) {
        this.$form.off('submit').submit();
        return;
      }

      var url = this.$form.attr('action');
      var data = new FormData(this.$form[0]);
      var $buttons = this.$form.find('input[type="submit"], button');
      jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
        type: 'POST',
        url: url,
        data: data,
        processData: false,
        // Allows us to get file fields via JS
        contentType: false
      }).then(function (response) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('li').removeClass('error');

        if (response.errors === false) {
          _this2.$form.html(response.result); // Trigger GA or GTM event


          if (typeof window.ga === 'function') {
            window.ga('send', 'pageview', url);
          }
        }

        $buttons.removeAttr('disabled');
      }).catch(function (responseData) {
        var response = responseData.responseJSON; // eslint-disable-next-line no-console

        console.log("Error: ".concat(responseData.responseText));

        _this2.$form.find('.result').html(response.result);

        if (response.fields) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default.a.each(response.fields, function (i, field) {
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("input[name=\"".concat(field, "\"],textarea[name=\"").concat(field, "\"]")).addClass('error');
          });
        }
      }).then(function () {
        $buttons.prop('disabled', false);
      });
    }
  }]);

  return RecaptchaForm;
}(); // explicit recaptcha methode (zodat er meerdere op 1 pagina kunnen)




window.onloadReCaptchaCallback = function () {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.g-recaptcha').each(function (i, el) {
    var attributes = {
      sitekey: jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).data('sitekey'),
      size: jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).data('size'),
      callback: jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).data('callback')
    };
    var widgetid = window.grecaptcha.render(el, attributes);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).data('widgetid', widgetid);
  });
};

/***/ }),

/***/ "./resources/assets/js/components/forms/validation.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/forms/validation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/isMobile */ "./resources/assets/js/utils/isMobile.js");



__webpack_require__(/*! ../validationengine/languages/jquery.validationEngine-nl */ "./resources/assets/js/components/validationengine/languages/jquery.validationEngine-nl.js");

__webpack_require__(/*! ../validationengine/jquery.validationEngine */ "./resources/assets/js/components/validationengine/jquery.validationEngine.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (_utils_isMobile__WEBPACK_IMPORTED_MODULE_1__["isMobile"]) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.validate').validationEngine();
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.validate').validationEngine({
      scroll: false
    });
  }
});

/***/ }),

/***/ "./resources/assets/js/components/layout/navigation.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/layout/navigation.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/defaults */ "./resources/assets/js/constants/defaults.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var $nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav__wrap');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.main-nav__trigger').click(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).next('.main-nav__wrap').slideToggle('fast');
  });
  _constants_defaults__WEBPACK_IMPORTED_MODULE_1__["matchMobile"].addListener(function (mediaQuery) {
    if (mediaQuery.matches) {
      $nav.css('display', 'block');
    } else {
      $nav.css('display', 'none');
    }
  });
});

/***/ }),

/***/ "./resources/assets/js/components/layout/responsiveVideos.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/layout/responsiveVideos.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("iframe[src*=\"youtube.com/embed\"],\n    iframe[src*=\"youtube-nocookie.com/embed\"],\n    iframe[src*=\"player.vimeo\"]").wrap('<div class="video-container"></div>');
});

/***/ }),

/***/ "./resources/assets/js/components/maps/BasicGoogleMap.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/maps/BasicGoogleMap.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicGoogleMap; });
/* harmony import */ var _constants_googleMapsStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/googleMapsStyles */ "./resources/assets/js/constants/googleMapsStyles.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Docs: https://docs.esign.eu/books/development/page/front-end-template#bkmrk-basicgooglemap

var defaultMapData = {
  holderId: 'map',
  title: 'Esign',
  lat: 51.0325538,
  long: 3.7333816,
  externUrl: 'https://www.google.be/maps/place/Esign+-+Web+%26+Graphics/@51.0325538,3.7333816,19z/data=!3m1!4b1!4m5!3m4!1s0x47c373970c763623:0xde317546f86febc9!8m2!3d51.0325538!4d3.7339288'
};

var BasicGoogleMap =
/*#__PURE__*/
function () {
  function BasicGoogleMap() {
    _classCallCheck(this, BasicGoogleMap);
  }

  _createClass(BasicGoogleMap, [{
    key: "init",
    value: function init() {
      var mapSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var google = window.google || {};
      this.googleMaps = google.maps;
      this.baseUrl = window.baseUrl || ''; // override default map data if param is set

      var mapData = mapSettings || defaultMapData;
      var holder = document.getElementById(mapData.holderId);

      if (holder) {
        var map = this.addMap(holder, mapData.lat, mapData.long);
        this.addMarker(map, mapData.lat, mapData.long, mapData.title, mapData.externUrl);
      }
    }
  }, {
    key: "addMap",
    value: function addMap(holder, latitude, longitude) {
      var zoom = 15;
      var disable = true;
      var scroll = false;
      var styledMap = new this.googleMaps.StyledMapType(_constants_googleMapsStyles__WEBPACK_IMPORTED_MODULE_0__["default"], {
        name: 'Styled Map'
      });
      var mapCenter = new this.googleMaps.LatLng(latitude, longitude);
      var mapOptions = {
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
        mapTypeId: this.googleMaps.MapTypeId.ROADMAP
      };
      var map = new this.googleMaps.Map(holder, mapOptions);
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
      this.googleMaps.event.addDomListener(window, 'resize', function () {
        map.setCenter(mapCenter);
      });
      return map;
    }
  }, {
    key: "addMarker",
    value: function addMarker(map, latitude, longitude, title, externUrl) {
      var myLatlng = new this.googleMaps.LatLng(latitude, longitude);
      var markerIcon = {
        url: window.markerImg,
        size: new this.googleMaps.Size(100, 128),
        origin: new this.googleMaps.Point(0, 0),
        anchor: new this.googleMaps.Point(25, 64),
        scaledSize: new this.googleMaps.Size(50, 64)
      };
      var marker = new this.googleMaps.Marker({
        position: myLatlng,
        map: map,
        icon: markerIcon
      });
      this.googleMaps.event.addListener(marker, 'click', function () {
        window.open(externUrl, '_blank');
      });
      return marker;
    }
  }]);

  return BasicGoogleMap;
}();



/***/ }),

/***/ "./resources/assets/js/components/tracking/gatracking.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/tracking/gatracking.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  var external = [];
  var mails = [];
  var files = [];
  var trackbtns = [];
  var filetypes = ['pdf', 'jpg'];
  var links = jquery__WEBPACK_IMPORTED_MODULE_6___default()('a');
  var lLength = links.length;

  for (var i = 0; i < lLength; i += 1) {
    var $elem = jquery__WEBPACK_IMPORTED_MODULE_6___default()(links[i]);
    var href = $elem.attr('href');

    if (href !== undefined) {
      if (href.match(/^https?:/i) && !href.match(document.domain)) {
        external.push(links[i]);
      } else if (href.match(/^mailto:/i)) {
        mails.push(links[i]);
      } else if (jquery__WEBPACK_IMPORTED_MODULE_6___default.a.inArray(href.split('.')[href.split('.').length - 1], filetypes) >= 0) {
        files.push(links[i]);
      } else if ($elem.hasClass('tracking')) {
        trackbtns.push(links[i]);
      }
    }
  }

  jquery__WEBPACK_IMPORTED_MODULE_6___default()(external).on('click', function () {
    var link = jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this);
    var linkTxt = link.attr('title') !== '' ? "".concat(link.attr('title'), " [").concat(link.attr('href').replace(/^https?:\/\//i, ''), " ]") : link.attr('href').replace(/^https?:\/\//i, '');
    ga('send', 'event', 'external', 'visit', linkTxt); // eslint-disable-line no-undef
  });
  jquery__WEBPACK_IMPORTED_MODULE_6___default()(mails).on('click', function () {
    var email = jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this);
    var emailTxt = email.attr('href').substring(7);
    ga('send', 'event', 'mailto', 'click', emailTxt); // eslint-disable-line no-undef
  });
  jquery__WEBPACK_IMPORTED_MODULE_6___default()(files).on('click', function () {
    var file = jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this);
    var fileHref = file.attr('href');
    var fileExt = fileHref.split('.')[fileHref.split('.').length - 1];
    var filename = fileHref.substring(fileHref.lastIndexOf('/') + 1);
    ga('send', 'event', 'download', fileExt, filename); // eslint-disable-line no-undef
  });
  jquery__WEBPACK_IMPORTED_MODULE_6___default()(trackbtns).on('click', function () {
    var link = jquery__WEBPACK_IMPORTED_MODULE_6___default()(_this);
    var txt = link.data('title') !== 'undefined' ? link.data('title') : link.attr('href').replace(/^https?:\/\//i, '');
    ga('send', 'event', 'button', 'click', txt); // eslint-disable-line no-undef
  });
});

/***/ }),

/***/ "./resources/assets/js/components/validationengine/jquery.validationEngine.js":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/validationengine/jquery.validationEngine.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);






















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */
// Esign: update to 2.6.2 to fix usage of .size() -> was removed in jQuery 3
// Releases on repo are not up to date, this is a direct copy of the repo file instead of a release download (BertH)

/*
 * Inline Form Validation Engine 2.6.2, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
(function ($) {
  "use strict";

  var methods = {
    /**
     * Kind of the constructor, called before any action
     * @param {Map} user options
     */
    init: function init(options) {
      var form = this;

      if (!form.data('jqv') || form.data('jqv') == null) {
        options = methods._saveOptions(form, options); // bind all formError elements to close on click

        $(document).on("click", ".formError", function () {
          $(this).fadeOut(150, function () {
            // remove prompt once invisible
            $(this).closest('.formError').remove();
          });
        });
      }

      return this;
    },

    /**
     * Attachs jQuery.validationEngine to form.submit and field.blur events
     * Takes an optional params: a list of options
     * ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
     */
    attach: function attach(userOptions) {
      var form = this;
      var options;
      if (userOptions) options = methods._saveOptions(form, userOptions);else options = form.data('jqv');
      options.validateAttribute = form.find("[data-validation-engine*=validate]").length ? "data-validation-engine" : "class";

      if (options.binded) {
        // delegate fields
        form.on(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
        form.on("click", "[" + options.validateAttribute + "*=validate][type=checkbox],[" + options.validateAttribute + "*=validate][type=radio]", methods._onFieldEvent);
        form.on(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate][class*=datepicker]", {
          "delay": 300
        }, methods._onFieldEvent);
      }

      if (options.autoPositionUpdate) {
        $(window).bind("resize", {
          "noAnimation": true,
          "formElem": form
        }, methods.updatePromptsPosition);
      }

      form.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
      form.removeData('jqv_submitButton'); // bind form.submit

      form.on("submit", methods._onSubmitEvent);
      return this;
    },

    /**
     * Unregisters any bindings that may point to jQuery.validaitonEngine
     */
    detach: function detach() {
      var form = this;
      var options = form.data('jqv'); // unbind fields

      form.off(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
      form.off("click", "[" + options.validateAttribute + "*=validate][type=checkbox],[" + options.validateAttribute + "*=validate][type=radio]", methods._onFieldEvent);
      form.off(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate][class*=datepicker]", methods._onFieldEvent); // unbind form.submit

      form.off("submit", methods._onSubmitEvent);
      form.removeData('jqv');
      form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
      form.removeData('jqv_submitButton');
      if (options.autoPositionUpdate) $(window).off("resize", methods.updatePromptsPosition);
      return this;
    },

    /**
     * Validates either a form or a list of fields, shows prompts accordingly.
     * Note: There is no ajax form validation with this method, only field ajax validation are evaluated
     *
     * @return true if the form validates, false if it fails
     */
    validate: function validate(userOptions) {
      var element = $(this);
      var valid = null;
      var options;

      if (element.is("form") || element.hasClass("validationEngineContainer")) {
        if (element.hasClass('validating')) {
          // form is already validating.
          // Should abort old validation and start new one. I don't know how to implement it.
          return false;
        } else {
          element.addClass('validating');
          if (userOptions) options = methods._saveOptions(element, userOptions);else options = element.data('jqv');

          var valid = methods._validateFields(this); // If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again


          setTimeout(function () {
            element.removeClass('validating');
          }, 100);

          if (valid && options.onSuccess) {
            options.onSuccess();
          } else if (!valid && options.onFailure) {
            options.onFailure();
          }
        }
      } else if (element.is('form') || element.hasClass('validationEngineContainer')) {
        element.removeClass('validating');
      } else {
        // field validation
        var form = element.closest('form, .validationEngineContainer');
        options = form.data('jqv') ? form.data('jqv') : $.validationEngine.defaults;
        valid = methods._validateField(element, options);
        if (valid && options.onFieldSuccess) options.onFieldSuccess();else if (options.onFieldFailure && options.InvalidFields.length > 0) {
          options.onFieldFailure();
        }
        return !valid;
      }

      if (options.onValidationComplete) {
        // !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
        return !!options.onValidationComplete(form, valid);
      }

      return valid;
    },

    /**
     *  Redraw prompts position, useful when you change the DOM state when validating
     */
    updatePromptsPosition: function updatePromptsPosition(event) {
      if (event && this == window) {
        var form = event.data.formElem;
        var noAnimation = event.data.noAnimation;
      } else var form = $(this.closest('form, .validationEngineContainer'));

      var options = form.data('jqv'); // No option, take default one

      if (!options) options = methods._saveOptions(form, options);
      form.find('[' + options.validateAttribute + '*=validate]').not(":disabled").each(function () {
        var field = $(this);
        if (options.prettySelect && field.is(":hidden")) field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);

        var prompt = methods._getPrompt(field);

        var promptText = $(prompt).find(".formErrorContent").html();
        if (prompt) methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
      });
      return this;
    },

    /**
     * Displays a prompt on a element.
     * Note that the element needs an id!
     *
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
     */
    showPrompt: function showPrompt(promptText, type, promptPosition, showArrow) {
      var form = this.closest('form, .validationEngineContainer');
      var options = form.data('jqv'); // No option, take default one

      if (!options) options = methods._saveOptions(this, options);
      if (promptPosition) options.promptPosition = promptPosition;
      options.showArrow = showArrow == true;

      methods._showPrompt(this, promptText, type, false, options);

      return this;
    },

    /**
     * Closes form error prompts, CAN be invidual
     */
    hide: function hide() {
      var form = $(this).closest('form, .validationEngineContainer');
      var options = form.data('jqv'); // No option, take default one

      if (!options) options = methods._saveOptions(form, options);
      var fadeDuration = options && options.fadeDuration ? options.fadeDuration : 0.3;
      var closingtag;

      if (form.is("form") || form.hasClass("validationEngineContainer")) {
        closingtag = "parentForm" + methods._getClassName($(form).attr("id"));
      } else {
        closingtag = methods._getClassName($(form).attr("id")) + "formError";
      }

      $('.' + closingtag).fadeTo(fadeDuration, 0, function () {
        $(this).closest('.formError').remove();
      });
      return this;
    },

    /**
     * Closes all error prompts on the page
     */
    hideAll: function hideAll() {
      var form = this;
      var options = form.data('jqv');
      var duration = options ? options.fadeDuration : 300;
      $('.formError').fadeTo(duration, 0, function () {
        $(this).closest('.formError').remove();
      });
      return this;
    },

    /**
     * Typically called when user exists a field using tab or a mouse click, triggers a field
     * validation
     */
    _onFieldEvent: function _onFieldEvent(event) {
      var field = $(this);
      var form = field.closest('form, .validationEngineContainer');
      var options = form.data('jqv'); // No option, take default one

      if (!options) options = methods._saveOptions(form, options);
      options.eventTrigger = "field";

      if (options.notEmpty == true) {
        if (field.val().length > 0) {
          // validate the current field
          window.setTimeout(function () {
            methods._validateField(field, options);
          }, event.data ? event.data.delay : 0);
        }
      } else {
        // validate the current field
        window.setTimeout(function () {
          methods._validateField(field, options);
        }, event.data ? event.data.delay : 0);
      }
    },

    /**
     * Called when the form is submited, shows prompts accordingly
     *
     * @param {jqObject}
     *            form
     * @return false if form submission needs to be cancelled
     */
    _onSubmitEvent: function _onSubmitEvent() {
      var form = $(this);
      var options = form.data('jqv'); //check if it is trigger from skipped button

      if (form.data("jqv_submitButton")) {
        var submitButton = $("#" + form.data("jqv_submitButton"));

        if (submitButton) {
          if (submitButton.length > 0) {
            if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true") return true;
          }
        }
      }

      options.eventTrigger = "submit"; // validate each field
      // (- skip field ajax validation, not necessary IF we will perform an ajax form validation)

      var r = methods._validateFields(form);

      if (r && options.ajaxFormValidation) {
        methods._validateFormWithAjax(form, options); // cancel form auto-submission - process with async call onAjaxFormComplete


        return false;
      }

      if (options.onValidationComplete) {
        // !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
        return !!options.onValidationComplete(form, r);
      }

      return r;
    },

    /**
     * Return true if the ajax field validations passed so far
     * @param {Object} options
     * @return true, is all ajax validation passed so far (remember ajax is async)
     */
    _checkAjaxStatus: function _checkAjaxStatus(options) {
      var status = true;
      $.each(options.ajaxValidCache, function (key, value) {
        if (!value) {
          status = false; // break the each

          return false;
        }
      });
      return status;
    },

    /**
     * Return true if the ajax field is validated
     * @param {String} fieldid
     * @param {Object} options
     * @return true, if validation passed, false if false or doesn't exist
     */
    _checkAjaxFieldStatus: function _checkAjaxFieldStatus(fieldid, options) {
      return options.ajaxValidCache[fieldid] == true;
    },

    /**
     * Validates form fields, shows prompts accordingly
     *
     * @param {jqObject}
     *            form
     * @param {skipAjaxFieldValidation}
     *            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
     *
     * @return true if form is valid, false if not, undefined if ajax form validation is done
     */
    _validateFields: function _validateFields(form) {
      var options = form.data('jqv'); // this variable is set to true if an error is found

      var errorFound = false; // Trigger hook, start validation

      form.trigger("jqv.form.validating"); // first, evaluate status of non ajax fields

      var first_err = null;
      form.find('[' + options.validateAttribute + '*=validate]').not(":disabled").each(function () {
        var field = $(this);
        var names = [];

        if ($.inArray(field.attr('name'), names) < 0) {
          errorFound |= methods._validateField(field, options);
          if (errorFound && first_err == null) if (field.is(":hidden") && options.prettySelect) first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);else {
            //Check if we need to adjust what element to show the prompt on
            //and and such scroll to instead
            if (field.data('jqv-prompt-at') instanceof jQuery) {
              field = field.data('jqv-prompt-at');
            } else if (field.data('jqv-prompt-at')) {
              field = $(field.data('jqv-prompt-at'));
            }

            first_err = field;
          }
          if (options.doNotShowAllErrosOnSubmit) return false;
          names.push(field.attr('name')); //if option set, stop checking validation rules after one error is found

          if (options.showOneMessage == true && errorFound) {
            return false;
          }
        }
      }); // second, check to see if all ajax calls completed ok
      // errorFound |= !methods._checkAjaxStatus(options);
      // third, check status and scroll the container accordingly

      form.trigger("jqv.form.result", [errorFound]);

      if (errorFound) {
        if (options.scroll) {
          var destination = first_err.offset().top;
          var fixleft = first_err.offset().left; //prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)

          var positionType = options.promptPosition;
          if (typeof positionType == 'string' && positionType.indexOf(":") != -1) positionType = positionType.substring(0, positionType.indexOf(":"));

          if (positionType != "bottomRight" && positionType != "bottomLeft") {
            var prompt_err = methods._getPrompt(first_err);

            if (prompt_err) {
              destination = prompt_err.offset().top;
            }
          } // Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page


          if (options.scrollOffset) {
            destination -= options.scrollOffset;
          } // get the position of the first error, there should be at least one, no need to check this
          //var destination = form.find(".formError:not('.greenPopup'):first").offset().top;


          if (options.isOverflown) {
            var overflowDIV = $(options.overflownDIV);
            if (!overflowDIV.length) return false;
            var scrollContainerScroll = overflowDIV.scrollTop();
            var scrollContainerPos = -parseInt(overflowDIV.offset().top);
            destination += scrollContainerScroll + scrollContainerPos - 5;
            var scrollContainer = $(options.overflownDIV).filter(":not(:animated)");
            scrollContainer.animate({
              scrollTop: destination
            }, 1100, function () {
              if (options.focusFirstField) first_err.focus();
            });
          } else {
            $("html, body").animate({
              scrollTop: destination
            }, 1100, function () {
              if (options.focusFirstField) first_err.focus();
            });
            $("html, body").animate({
              scrollLeft: fixleft
            }, 1100);
          }
        } else if (options.focusFirstField) first_err.focus();

        return false;
      }

      return true;
    },

    /**
     * This method is called to perform an ajax form validation.
     * During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
     *
     * @param {jqObject} form
     * @param {Map} options
     */
    _validateFormWithAjax: function _validateFormWithAjax(form, options) {
      var data = form.serialize();
      var type = options.ajaxFormValidationMethod ? options.ajaxFormValidationMethod : "GET";
      var url = options.ajaxFormValidationURL ? options.ajaxFormValidationURL : form.attr("action");
      var dataType = options.dataType ? options.dataType : "json";
      $.ajax({
        type: type,
        url: url,
        cache: false,
        dataType: dataType,
        data: data,
        form: form,
        methods: methods,
        options: options,
        beforeSend: function beforeSend() {
          return options.onBeforeAjaxFormValidation(form, options);
        },
        error: function error(data, transport) {
          if (options.onFailure) {
            options.onFailure(data, transport);
          } else {
            methods._ajaxError(data, transport);
          }
        },
        success: function success(json) {
          if (dataType == "json" && json !== true) {
            // getting to this case doesn't necessary means that the form is invalid
            // the server may return green or closing prompt actions
            // this flag helps figuring it out
            var errorInForm = false;

            for (var i = 0; i < json.length; i++) {
              var value = json[i];
              var errorFieldId = value[0];
              var errorField = $($("#" + errorFieldId)[0]); // make sure we found the element

              if (errorField.length == 1) {
                // promptText or selector
                var msg = value[2]; // if the field is valid

                if (value[1] == true) {
                  if (msg == "" || !msg) {
                    // if for some reason, status==true and error="", just close the prompt
                    methods._closePrompt(errorField);
                  } else {
                    // the field is valid, but we are displaying a green prompt
                    if (options.allrules[msg]) {
                      var txt = options.allrules[msg].alertTextOk;
                      if (txt) msg = txt;
                    }

                    if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
                  }
                } else {
                  // the field is invalid, show the red error prompt
                  errorInForm |= true;

                  if (options.allrules[msg]) {
                    var txt = options.allrules[msg].alertText;
                    if (txt) msg = txt;
                  }

                  if (options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
                }
              }
            }

            options.onAjaxFormComplete(!errorInForm, form, json, options);
          } else options.onAjaxFormComplete(true, form, json, options);
        }
      });
    },

    /**
     * Validates field, shows prompts accordingly
     *
     * @param {jqObject}
     *            field
     * @param {Array[String]}
     *            field's validation rules
     * @param {Map}
     *            user options
     * @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
     */
    _validateField: function _validateField(field, options, skipAjaxValidation) {
      if (!field.attr("id")) {
        field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
        ++$.validationEngine.fieldIdCounter;
      }

      if (field.hasClass(options.ignoreFieldsWithClass)) return false;
      if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden"))) return false;
      var rulesParsing = field.attr(options.validateAttribute);
      var getRules = /validate\[(.*)\]/.exec(rulesParsing);
      if (!getRules) return false;
      var str = getRules[1];
      var rules = str.split(/\[|,|\]/); // true if we ran the ajax validation, tells the logic to stop messing with prompts

      var isAjaxValidator = false;
      var fieldName = field.attr("name");
      var promptText = "";
      var promptType = "";
      var required = false;
      var limitErrors = false;
      options.isError = false;
      options.showArrow = options.showArrow == true; // If the programmer wants to limit the amount of error messages per field,

      if (options.maxErrorsPerField > 0) {
        limitErrors = true;
      }

      var form = $(field.closest("form, .validationEngineContainer")); // Fix for adding spaces in the rules

      for (var i = 0; i < rules.length; i++) {
        rules[i] = rules[i].toString().replace(" ", ""); //.toString to worked on IE8
        // Remove any parsing errors

        if (rules[i] === '') {
          delete rules[i];
        }
      }

      for (var i = 0, field_errors = 0; i < rules.length; i++) {
        // If we are limiting errors, and have hit the max, break
        if (limitErrors && field_errors >= options.maxErrorsPerField) {
          // If we haven't hit a required yet, check to see if there is one in the validation rules for this
          // field and that it's index is greater or equal to our current index
          if (!required) {
            var have_required = $.inArray('required', rules);
            required = have_required != -1 && have_required >= i;
          }

          break;
        }

        var errorMsg = undefined;

        switch (rules[i]) {
          case "required":
            required = true;
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
            break;

          case "custom":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
            break;

          case "groupRequired":
            // Check is its the first of group, if not, reload validation with first field
            // AND continue normal validation on present field
            var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
            var firstOfGroup = form.find(classGroup).eq(0);

            if (firstOfGroup[0] != field[0]) {
              methods._validateField(firstOfGroup, options, skipAjaxValidation);

              options.showArrow = true;
            }

            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
            if (errorMsg) required = true;
            options.showArrow = false;
            break;

          case "ajax":
            // AJAX defaults to returning it's loading message
            errorMsg = methods._ajax(field, rules, i, options);

            if (errorMsg) {
              promptType = "load";
            }

            break;

          case "minSize":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
            break;

          case "maxSize":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
            break;

          case "min":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
            break;

          case "max":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
            break;

          case "past":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._past);
            break;

          case "future":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._future);
            break;

          case "dateRange":
            var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
            options.firstOfGroup = form.find(classGroup).eq(0);
            options.secondOfGroup = form.find(classGroup).eq(1); //if one entry out of the pair has value then proceed to run through validation

            if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
              errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._dateRange);
            }

            if (errorMsg) required = true;
            options.showArrow = false;
            break;

          case "dateTimeRange":
            var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
            options.firstOfGroup = form.find(classGroup).eq(0);
            options.secondOfGroup = form.find(classGroup).eq(1); //if one entry out of the pair has value then proceed to run through validation

            if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
              errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._dateTimeRange);
            }

            if (errorMsg) required = true;
            options.showArrow = false;
            break;

          case "maxCheckbox":
            field = $(form.find("input[name='" + fieldName + "']"));
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
            break;

          case "minCheckbox":
            field = $(form.find("input[name='" + fieldName + "']"));
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
            break;

          case "equals":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
            break;

          case "funcCall":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
            break;

          case "creditCard":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
            break;

          case "condRequired":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);

            if (errorMsg !== undefined) {
              required = true;
            }

            break;

          case "funcCallRequired":
            errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCallRequired);

            if (errorMsg !== undefined) {
              required = true;
            }

            break;

          default:
        }

        var end_validation = false; // If we were passed back an message object, check what the status was to determine what to do

        if (_typeof(errorMsg) == "object") {
          switch (errorMsg.status) {
            case "_break":
              end_validation = true;
              break;
            // If we have an error message, set errorMsg to the error message

            case "_error":
              errorMsg = errorMsg.message;
              break;
            // If we want to throw an error, but not show a prompt, return early with true

            case "_error_no_prompt":
              return true;
              break;
            // Anything else we continue on

            default:
              break;
          }
        } //funcCallRequired, first in rules, and has error, skip anything else


        if (i == 0 && str.indexOf('funcCallRequired') == 0 && errorMsg !== undefined) {
          if (promptText != '') {
            promptText += "<br/>";
          }

          promptText += errorMsg;
          options.isError = true;
          field_errors++;
          end_validation = true;
        } // If it has been specified that validation should end now, break


        if (end_validation) {
          break;
        } // If we have a string, that means that we have an error, so add it to the error message.


        if (typeof errorMsg == 'string') {
          if (promptText != '') {
            promptText += "<br/>";
          }

          promptText += errorMsg;
          options.isError = true;
          field_errors++;
        }
      } // If the rules required is not added, an empty field is not validated
      //the 3rd condition is added so that even empty password fields should be equal
      //otherwise if one is filled and another left empty, the "equal" condition would fail
      //which does not make any sense


      if (!required && !field.val() && field.val().length < 1 && $.inArray('equals', rules) < 0) options.isError = false; // Hack for radio/checkbox group button, the validation go into the
      // first radio/checkbox of the group

      var fieldType = field.prop("type");
      var positionType = field.data("promptPosition") || options.promptPosition;

      if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").length > 1) {
        if (positionType === 'inline') {
          field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
        } else {
          field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
        }

        options.showArrow = options.showArrowOnRadioAndCheckbox;
      }

      if (field.is(":hidden") && options.prettySelect) {
        field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
      }

      if (options.isError && options.showPrompts) {
        methods._showPrompt(field, promptText, promptType, false, options);
      } else {
        if (!isAjaxValidator) methods._closePrompt(field);
      }

      if (!isAjaxValidator) {
        field.trigger("jqv.field.result", [field, options.isError, promptText]);
      }
      /* Record error */


      var errindex = $.inArray(field[0], options.InvalidFields);

      if (errindex == -1) {
        if (options.isError) options.InvalidFields.push(field[0]);
      } else if (!options.isError) {
        options.InvalidFields.splice(errindex, 1);
      }

      methods._handleStatusCssClasses(field, options);
      /* run callback function for each field */


      if (options.isError && options.onFieldFailure) options.onFieldFailure(field);
      if (!options.isError && options.onFieldSuccess) options.onFieldSuccess(field);
      return options.isError;
    },

    /**
     * Handling css classes of fields indicating result of validation
     *
     * @param {jqObject}
     *            field
     * @param {Array[String]}
     *            field's validation rules
     * @private
     */
    _handleStatusCssClasses: function _handleStatusCssClasses(field, options) {
      /* remove all classes */
      if (options.addSuccessCssClassToField) field.removeClass(options.addSuccessCssClassToField);
      if (options.addFailureCssClassToField) field.removeClass(options.addFailureCssClassToField);
      /* Add classes */

      if (options.addSuccessCssClassToField && !options.isError) field.addClass(options.addSuccessCssClassToField);
      if (options.addFailureCssClassToField && options.isError) field.addClass(options.addFailureCssClassToField);
    },

    /********************
     * _getErrorMessage
     *
     * @param form
     * @param field
     * @param rule
     * @param rules
     * @param i
     * @param options
     * @param originalValidationMethod
     * @return {*}
     * @private
     */
    _getErrorMessage: function _getErrorMessage(form, field, rule, rules, i, options, originalValidationMethod) {
      // If we are using the custon validation type, build the index for the rule.
      // Otherwise if we are doing a function call, make the call and return the object
      // that is passed back.
      var rule_index = jQuery.inArray(rule, rules);

      if (rule === "custom" || rule === "funcCall" || rule === "funcCallRequired") {
        var custom_validation_type = rules[rule_index + 1];
        rule = rule + "[" + custom_validation_type + "]"; // Delete the rule from the rules array so that it doesn't try to call the
        // same rule over again

        delete rules[rule_index];
      } // Change the rule to the composite rule, if it was different from the original


      var alteredRule = rule;
      var element_classes = field.attr("data-validation-engine") ? field.attr("data-validation-engine") : field.attr("class");
      var element_classes_array = element_classes.split(" "); // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form

      var errorMsg;

      if (rule == "future" || rule == "past" || rule == "maxCheckbox" || rule == "minCheckbox") {
        errorMsg = originalValidationMethod(form, field, rules, i, options);
      } else {
        errorMsg = originalValidationMethod(field, rules, i, options);
      } // If the original validation method returned an error and we have a custom error message,
      // return the custom message instead. Otherwise return the original error message.


      if (errorMsg != undefined) {
        var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);

        if (custom_message) errorMsg = custom_message;
      }

      return errorMsg;
    },
    _getCustomErrorMessage: function _getCustomErrorMessage(field, classes, rule, options) {
      var custom_message = false;
      var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule]; // If there is a validityProp for this rule, check to see if the field has an attribute for it

      if (validityProp != undefined) {
        custom_message = field.attr("data-errormessage-" + validityProp); // If there was an error message for it, return the message

        if (custom_message != undefined) return custom_message;
      }

      custom_message = field.attr("data-errormessage"); // If there is an inline custom error message, return it

      if (custom_message != undefined) return custom_message;
      var id = '#' + field.attr("id"); // If we have custom messages for the element's id, get the message for the rule from the id.
      // Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.

      if (typeof options.custom_error_messages[id] != "undefined" && typeof options.custom_error_messages[id][rule] != "undefined") {
        custom_message = options.custom_error_messages[id][rule]['message'];
      } else if (classes.length > 0) {
        for (var i = 0; i < classes.length && classes.length > 0; i++) {
          var element_class = "." + classes[i];

          if (typeof options.custom_error_messages[element_class] != "undefined" && typeof options.custom_error_messages[element_class][rule] != "undefined") {
            custom_message = options.custom_error_messages[element_class][rule]['message'];
            break;
          }
        }
      }

      if (!custom_message && typeof options.custom_error_messages[rule] != "undefined" && typeof options.custom_error_messages[rule]['message'] != "undefined") {
        custom_message = options.custom_error_messages[rule]['message'];
      }

      return custom_message;
    },
    _validityProp: {
      "required": "value-missing",
      "custom": "custom-error",
      "groupRequired": "value-missing",
      "ajax": "custom-error",
      "minSize": "range-underflow",
      "maxSize": "range-overflow",
      "min": "range-underflow",
      "max": "range-overflow",
      "past": "type-mismatch",
      "future": "type-mismatch",
      "dateRange": "type-mismatch",
      "dateTimeRange": "type-mismatch",
      "maxCheckbox": "range-overflow",
      "minCheckbox": "range-underflow",
      "equals": "pattern-mismatch",
      "funcCall": "custom-error",
      "funcCallRequired": "custom-error",
      "creditCard": "pattern-mismatch",
      "condRequired": "value-missing"
    },

    /**
     * Required validation
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @param {bool} condRequired flag when method is used for internal purpose in condRequired check
     * @return an error string if validation failed
     */
    _required: function _required(field, rules, i, options, condRequired) {
      switch (field.prop("type")) {
        case "radio":
        case "checkbox":
          // new validation style to only check dependent field
          if (condRequired) {
            if (!field.prop('checked')) {
              return options.allrules[rules[i]].alertTextCheckboxMultiple;
            }

            break;
          } // old validation style


          var form = field.closest("form, .validationEngineContainer");
          var name = field.attr("name");

          if (form.find("input[name='" + name + "']:checked").length == 0) {
            if (form.find("input[name='" + name + "']:visible").length == 1) return options.allrules[rules[i]].alertTextCheckboxe;else return options.allrules[rules[i]].alertTextCheckboxMultiple;
          }

          break;

        case "text":
        case "password":
        case "textarea":
        case "file":
        case "select-one":
        case "select-multiple":
        default:
          var field_val = $.trim(field.val());
          var dv_placeholder = $.trim(field.attr("data-validation-placeholder"));
          var placeholder = $.trim(field.attr("placeholder"));

          if (!field_val || dv_placeholder && field_val == dv_placeholder || placeholder && field_val == placeholder) {
            return options.allrules[rules[i]].alertText;
          }

          break;
      }
    },

    /**
     * Validate that 1 from the group field is required
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _groupRequired: function _groupRequired(field, rules, i, options) {
      var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
      var isValid = false; // Check all fields from the group

      field.closest("form, .validationEngineContainer").find(classGroup).each(function () {
        if (!methods._required($(this), rules, i, options)) {
          isValid = true;
          return false;
        }
      });

      if (!isValid) {
        return options.allrules[rules[i]].alertText;
      }
    },

    /**
     * Validate rules
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _custom: function _custom(field, rules, i, options) {
      var customRule = rules[i + 1];
      var rule = options.allrules[customRule];
      var fn;

      if (!rule) {
        alert("jqv:custom rule not found - " + customRule);
        return;
      }

      if (rule["regex"]) {
        var ex = rule.regex;

        if (!ex) {
          alert("jqv:custom regex not found - " + customRule);
          return;
        }

        var pattern = new RegExp(ex);
        if (!pattern.test(field.val())) return options.allrules[customRule].alertText;
      } else if (rule["func"]) {
        fn = rule["func"];

        if (typeof fn !== "function") {
          alert("jqv:custom parameter 'function' is no function - " + customRule);
          return;
        }

        if (!fn(field, rules, i, options)) return options.allrules[customRule].alertText;
      } else {
        alert("jqv:custom type not allowed " + customRule);
        return;
      }
    },

    /**
     * Validate custom function outside of the engine scope
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _funcCall: function _funcCall(field, rules, i, options) {
      var functionName = rules[i + 1];
      var fn;

      if (functionName.indexOf('.') > -1) {
        var namespaces = functionName.split('.');
        var scope = window;

        while (namespaces.length) {
          scope = scope[namespaces.shift()];
        }

        fn = scope;
      } else fn = window[functionName] || options.customFunctions[functionName];

      if (typeof fn == 'function') return fn(field, rules, i, options);
    },
    _funcCallRequired: function _funcCallRequired(field, rules, i, options) {
      return methods._funcCall(field, rules, i, options);
    },

    /**
     * Field match
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _equals: function _equals(field, rules, i, options) {
      var equalsField = rules[i + 1];
      if (field.val() != $("#" + equalsField).val()) return options.allrules.equals.alertText;
    },

    /**
     * Check the maximum size (in characters)
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _maxSize: function _maxSize(field, rules, i, options) {
      var max = rules[i + 1];
      var len = field.val().length;

      if (len > max) {
        var rule = options.allrules.maxSize;
        return rule.alertText + max + rule.alertText2;
      }
    },

    /**
     * Check the minimum size (in characters)
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _minSize: function _minSize(field, rules, i, options) {
      var min = rules[i + 1];
      var len = field.val().length;

      if (len < min) {
        var rule = options.allrules.minSize;
        return rule.alertText + min + rule.alertText2;
      }
    },

    /**
     * Check number minimum value
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _min: function _min(field, rules, i, options) {
      var min = parseFloat(rules[i + 1]);
      var len = parseFloat(field.val());

      if (len < min) {
        var rule = options.allrules.min;
        if (rule.alertText2) return rule.alertText + min + rule.alertText2;
        return rule.alertText + min;
      }
    },

    /**
     * Check number maximum value
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _max: function _max(field, rules, i, options) {
      var max = parseFloat(rules[i + 1]);
      var len = parseFloat(field.val());

      if (len > max) {
        var rule = options.allrules.max;
        if (rule.alertText2) return rule.alertText + max + rule.alertText2; //orefalo: to review, also do the translations

        return rule.alertText + max;
      }
    },

    /**
     * Checks date is in the past
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _past: function _past(form, field, rules, i, options) {
      var p = rules[i + 1];
      var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
      var pdate;

      if (p.toLowerCase() == "now") {
        pdate = new Date();
      } else if (undefined != fieldAlt.val()) {
        if (fieldAlt.is(":disabled")) return;
        pdate = methods._parseDate(fieldAlt.val());
      } else {
        pdate = methods._parseDate(p);
      }

      var vdate = methods._parseDate(field.val());

      if (vdate > pdate) {
        var rule = options.allrules.past;
        if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
        return rule.alertText + methods._dateToString(pdate);
      }
    },

    /**
     * Checks date is in the future
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _future: function _future(form, field, rules, i, options) {
      var p = rules[i + 1];
      var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
      var pdate;

      if (p.toLowerCase() == "now") {
        pdate = new Date();
      } else if (undefined != fieldAlt.val()) {
        if (fieldAlt.is(":disabled")) return;
        pdate = methods._parseDate(fieldAlt.val());
      } else {
        pdate = methods._parseDate(p);
      }

      var vdate = methods._parseDate(field.val());

      if (vdate < pdate) {
        var rule = options.allrules.future;
        if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
        return rule.alertText + methods._dateToString(pdate);
      }
    },

    /**
     * Checks if valid date
     *
     * @param {string} date string
     * @return a bool based on determination of valid date
     */
    _isDate: function _isDate(value) {
      var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
      return dateRegEx.test(value);
    },

    /**
     * Checks if valid date time
     *
     * @param {string} date string
     * @return a bool based on determination of valid date time
     */
    _isDateTime: function _isDateTime(value) {
      var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
      return dateTimeRegEx.test(value);
    },
    //Checks if the start date is before the end date
    //returns true if end is later than start
    _dateCompare: function _dateCompare(start, end) {
      return new Date(start.toString()) < new Date(end.toString());
    },

    /**
     * Checks date range
     *
     * @param {jqObject} first field name
     * @param {jqObject} second field name
     * @return an error string if validation failed
     */
    _dateRange: function _dateRange(field, rules, i, options) {
      //are not both populated
      if (!options.firstOfGroup[0].value && options.secondOfGroup[0].value || options.firstOfGroup[0].value && !options.secondOfGroup[0].value) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      } //are not both dates


      if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      } //are both dates but range is off


      if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }
    },

    /**
     * Checks date time range
     *
     * @param {jqObject} first field name
     * @param {jqObject} second field name
     * @return an error string if validation failed
     */
    _dateTimeRange: function _dateTimeRange(field, rules, i, options) {
      //are not both populated
      if (!options.firstOfGroup[0].value && options.secondOfGroup[0].value || options.firstOfGroup[0].value && !options.secondOfGroup[0].value) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      } //are not both dates


      if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      } //are both dates but range is off


      if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
        return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
      }
    },

    /**
     * Max number of checkbox selected
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _maxCheckbox: function _maxCheckbox(form, field, rules, i, options) {
      var nbCheck = rules[i + 1];
      var groupname = field.attr("name");
      var groupSize = form.find("input[name='" + groupname + "']:checked").length;

      if (groupSize > nbCheck) {
        options.showArrow = false;
        if (options.allrules.maxCheckbox.alertText2) return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
        return options.allrules.maxCheckbox.alertText;
      }
    },

    /**
     * Min number of checkbox selected
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _minCheckbox: function _minCheckbox(form, field, rules, i, options) {
      var nbCheck = rules[i + 1];
      var groupname = field.attr("name");
      var groupSize = form.find("input[name='" + groupname + "']:checked").length;

      if (groupSize < nbCheck) {
        options.showArrow = false;
        return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
      }
    },

    /**
     * Checks that it is a valid credit card number according to the
     * Luhn checksum algorithm.
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return an error string if validation failed
     */
    _creditCard: function _creditCard(field, rules, i, options) {
      //spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
      var valid = false,
          cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');
      var numDigits = cardNumber.length;

      if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {
        var sum = 0,
            i = numDigits - 1,
            pos = 1,
            digit,
            luhn = new String();

        do {
          digit = parseInt(cardNumber.charAt(i));
          luhn += pos++ % 2 == 0 ? digit * 2 : digit;
        } while (--i >= 0);

        for (i = 0; i < luhn.length; i++) {
          sum += parseInt(luhn.charAt(i));
        }

        valid = sum % 10 == 0;
      }

      if (!valid) return options.allrules.creditCard.alertText;
    },

    /**
     * Ajax field validation
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     *            user options
     * @return nothing! the ajax validator handles the prompts itself
     */
    _ajax: function _ajax(field, rules, i, options) {
      var errorSelector = rules[i + 1];
      var rule = options.allrules[errorSelector];
      var extraData = rule.extraData;
      var extraDataDynamic = rule.extraDataDynamic;
      var data = {
        "fieldId": field.attr("id"),
        "fieldValue": field.val()
      };

      if (_typeof(extraData) === "object") {
        $.extend(data, extraData);
      } else if (typeof extraData === "string") {
        var tempData = extraData.split("&");

        for (var i = 0; i < tempData.length; i++) {
          var values = tempData[i].split("=");

          if (values[0] && values[0]) {
            data[values[0]] = values[1];
          }
        }
      }

      if (extraDataDynamic) {
        var tmpData = [];
        var domIds = String(extraDataDynamic).split(",");

        for (var i = 0; i < domIds.length; i++) {
          var id = domIds[i];

          if ($(id).length) {
            var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
            var keyValue = id.replace('#', '') + '=' + escape(inputValue);
            data[id.replace('#', '')] = inputValue;
          }
        }
      } // If a field change event triggered this we want to clear the cache for this ID


      if (options.eventTrigger == "field") {
        delete options.ajaxValidCache[field.attr("id")];
      } // If there is an error or if the the field is already validated, do not re-execute AJAX


      if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
        $.ajax({
          type: options.ajaxFormValidationMethod,
          url: rule.url,
          cache: false,
          dataType: "json",
          data: data,
          field: field,
          rule: rule,
          methods: methods,
          options: options,
          beforeSend: function beforeSend() {},
          error: function error(data, transport) {
            if (options.onFailure) {
              options.onFailure(data, transport);
            } else {
              methods._ajaxError(data, transport);
            }
          },
          success: function success(json) {
            // asynchronously called on success, data is the json answer from the server
            var errorFieldId = json[0]; //var errorField = $($("#" + errorFieldId)[0]);

            var errorField = $("#" + errorFieldId).eq(0); // make sure we found the element

            if (errorField.length == 1) {
              var status = json[1]; // read the optional msg from the server

              var msg = json[2];

              if (!status) {
                // Houston we got a problem - display an red prompt
                options.ajaxValidCache[errorFieldId] = false;
                options.isError = true; // resolve the msg prompt

                if (msg) {
                  if (options.allrules[msg]) {
                    var txt = options.allrules[msg].alertText;

                    if (txt) {
                      msg = txt;
                    }
                  }
                } else msg = rule.alertText;

                if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
              } else {
                options.ajaxValidCache[errorFieldId] = true; // resolves the msg prompt

                if (msg) {
                  if (options.allrules[msg]) {
                    var txt = options.allrules[msg].alertTextOk;

                    if (txt) {
                      msg = txt;
                    }
                  }
                } else msg = rule.alertTextOk;

                if (options.showPrompts) {
                  // see if we should display a green prompt
                  if (msg) methods._showPrompt(errorField, msg, "pass", true, options);else methods._closePrompt(errorField);
                } // If a submit form triggered this, we want to re-submit the form


                if (options.eventTrigger == "submit") field.closest("form").submit();
              }
            }

            errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
          }
        });
        return rule.alertTextLoad;
      }
    },

    /**
     * Common method to handle ajax errors
     *
     * @param {Object} data
     * @param {Object} transport
     */
    _ajaxError: function _ajaxError(data, transport) {
      if (data.status == 0 && transport == null) alert("The page is not served from a server! ajax call failed");else if (typeof console != "undefined") console.log("Ajax error: " + data.status + " " + transport);
    },

    /**
     * date -> string
     *
     * @param {Object} date
     */
    _dateToString: function _dateToString(date) {
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    },

    /**
     * Parses an ISO date
     * @param {String} d
     */
    _parseDate: function _parseDate(d) {
      var dateParts = d.split("-");
      if (dateParts == d) dateParts = d.split("/");

      if (dateParts == d) {
        dateParts = d.split(".");
        return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
      }

      return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    },

    /**
     * Builds or updates a prompt with the given information
     *
     * @param {jqObject} field
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {boolean} ajaxed - use to mark fields than being validated with ajax
     * @param {Map} options user options
     */
    _showPrompt: function _showPrompt(field, promptText, type, ajaxed, options, ajaxform) {
      //Check if we need to adjust what element to show the prompt on
      if (field.data('jqv-prompt-at') instanceof jQuery) {
        field = field.data('jqv-prompt-at');
      } else if (field.data('jqv-prompt-at')) {
        field = $(field.data('jqv-prompt-at'));
      }

      var prompt = methods._getPrompt(field); // The ajax submit errors are not see has an error in the form,
      // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
      // Because no error was found befor submitting


      if (ajaxform) prompt = false; // Check that there is indded text

      if ($.trim(promptText)) {
        if (prompt) methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);else methods._buildPrompt(field, promptText, type, ajaxed, options);
      }
    },

    /**
     * Builds and shades a prompt for the given field.
     *
     * @param {jqObject} field
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {boolean} ajaxed - use to mark fields than being validated with ajax
     * @param {Map} options user options
     */
    _buildPrompt: function _buildPrompt(field, promptText, type, ajaxed, options) {
      // create the prompt
      var prompt = $('<div>');
      prompt.addClass(methods._getClassName(field.attr("id")) + "formError"); // add a class name to identify the parent form of the prompt

      prompt.addClass("parentForm" + methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
      prompt.addClass("formError");

      switch (type) {
        case "pass":
          prompt.addClass("greenPopup");
          break;

        case "load":
          prompt.addClass("blackPopup");
          break;

        default:
        /* it has error  */
        //alert("unknown popup type:"+type);

      }

      if (ajaxed) prompt.addClass("ajaxed"); // create the prompt content

      var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt); // determine position type

      var positionType = field.data("promptPosition") || options.promptPosition; // create the css arrow pointing at the field
      // note that there is no triangle on max-checkbox and radio

      if (options.showArrow) {
        var arrow = $('<div>').addClass("formErrorArrow"); //prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)

        if (typeof positionType == 'string') {
          var pos = positionType.indexOf(":");
          if (pos != -1) positionType = positionType.substring(0, pos);
        }

        switch (positionType) {
          case "bottomLeft":
          case "bottomRight":
            prompt.find(".formErrorContent").before(arrow);
            arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
            break;

          case "topLeft":
          case "topRight":
            arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
            prompt.append(arrow);
            break;
        }
      } // Add custom prompt class


      if (options.addPromptClass) prompt.addClass(options.addPromptClass); // Add custom prompt class defined in element

      var requiredOverride = field.attr('data-required-class');

      if (requiredOverride !== undefined) {
        prompt.addClass(requiredOverride);
      } else {
        if (options.prettySelect) {
          if ($('#' + field.attr('id')).next().is('select')) {
            var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');

            if (prettyOverrideClass !== undefined) {
              prompt.addClass(prettyOverrideClass);
            }
          }
        }
      }

      prompt.css({
        "opacity": 0
      });

      if (positionType === 'inline') {
        prompt.addClass("inline");

        if (typeof field.attr('data-prompt-target') !== 'undefined' && $('#' + field.attr('data-prompt-target')).length > 0) {
          prompt.appendTo($('#' + field.attr('data-prompt-target')));
        } else {
          field.after(prompt);
        }
      } else {
        field.before(prompt);
      }

      var pos = methods._calculatePosition(field, prompt, options); // Support RTL layouts by @yasser_lotfy ( Yasser Lotfy )


      if ($('body').hasClass('rtl')) {
        prompt.css({
          'position': positionType === 'inline' ? 'relative' : 'absolute',
          "top": pos.callerTopPosition,
          "left": "initial",
          "right": pos.callerleftPosition,
          "marginTop": pos.marginTopSize,
          "opacity": 0
        }).data("callerField", field);
      } else {
        prompt.css({
          'position': positionType === 'inline' ? 'relative' : 'absolute',
          "top": pos.callerTopPosition,
          "left": pos.callerleftPosition,
          "right": "initial",
          "marginTop": pos.marginTopSize,
          "opacity": 0
        }).data("callerField", field);
      }

      if (options.autoHidePrompt) {
        setTimeout(function () {
          prompt.animate({
            "opacity": 0
          }, function () {
            prompt.closest('.formError').remove();
          });
        }, options.autoHideDelay);
      }

      return prompt.animate({
        "opacity": 0.87
      });
    },

    /**
     * Updates the prompt text field - the field for which the prompt
     * @param {jqObject} field
     * @param {String} promptText html text to display type
     * @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
     * @param {boolean} ajaxed - use to mark fields than being validated with ajax
     * @param {Map} options user options
     */
    _updatePrompt: function _updatePrompt(field, prompt, promptText, type, ajaxed, options, noAnimation) {
      if (prompt) {
        if (typeof type !== "undefined") {
          if (type == "pass") prompt.addClass("greenPopup");else prompt.removeClass("greenPopup");
          if (type == "load") prompt.addClass("blackPopup");else prompt.removeClass("blackPopup");
        }

        if (ajaxed) prompt.addClass("ajaxed");else prompt.removeClass("ajaxed");
        prompt.find(".formErrorContent").html(promptText);

        var pos = methods._calculatePosition(field, prompt, options); // Support RTL layouts by @yasser_lotfy ( Yasser Lotfy )


        if ($('body').hasClass('rtl')) {
          var css = {
            "top": pos.callerTopPosition,
            "left": "initial",
            "right": pos.callerleftPosition,
            "marginTop": pos.marginTopSize,
            "opacity": 0.87
          };
        } else {
          var css = {
            "top": pos.callerTopPosition,
            "left": pos.callerleftPosition,
            "right": "initial",
            "marginTop": pos.marginTopSize,
            "opacity": 0.87
          };
        }

        prompt.css({
          "opacity": 0,
          "display": "block"
        });
        if (noAnimation) prompt.css(css);else prompt.animate(css);
      }
    },

    /**
     * Closes the prompt associated with the given field
     *
     * @param {jqObject}
     *            field
     */
    _closePrompt: function _closePrompt(field) {
      var prompt = methods._getPrompt(field);

      if (prompt) prompt.fadeTo("fast", 0, function () {
        prompt.closest('.formError').remove();
      });
    },
    closePrompt: function closePrompt(field) {
      return methods._closePrompt(field);
    },

    /**
     * Returns the error prompt matching the field if any
     *
     * @param {jqObject}
     *            field
     * @return undefined or the error prompt (jqObject)
     */
    _getPrompt: function _getPrompt(field) {
      var formId = $(field).closest('form, .validationEngineContainer').attr('id');
      var className = methods._getClassName(field.attr("id")) + "formError";
      var match = $("." + methods._escapeExpression(className) + '.parentForm' + methods._getClassName(formId))[0];
      if (match) return $(match);
    },

    /**
     * Returns the escapade classname
     *
     * @param {selector}
     *            className
     */
    _escapeExpression: function _escapeExpression(selector) {
      return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
    },

    /**
     * returns true if we are in a RTLed document
     *
     * @param {jqObject} field
     */
    isRTL: function isRTL(field) {
      var $document = $(document);
      var $body = $('body');
      var rtl = field && field.hasClass('rtl') || field && (field.attr('dir') || '').toLowerCase() === 'rtl' || $document.hasClass('rtl') || ($document.attr('dir') || '').toLowerCase() === 'rtl' || $body.hasClass('rtl') || ($body.attr('dir') || '').toLowerCase() === 'rtl';
      return Boolean(rtl);
    },

    /**
     * Calculates prompt position
     *
     * @param {jqObject}
     *            field
     * @param {jqObject}
     *            the prompt
     * @param {Map}
     *            options
     * @return positions
     */
    _calculatePosition: function _calculatePosition(field, promptElmt, options) {
      var promptTopPosition, promptleftPosition, marginTopSize;
      var fieldWidth = field.width();
      var fieldLeft = field.position().left;
      var fieldTop = field.position().top;
      var fieldHeight = field.height();
      var promptHeight = promptElmt.height(); // is the form contained in an overflown container?

      promptTopPosition = promptleftPosition = 0; // compensation for the arrow

      marginTopSize = -promptHeight; //prompt positioning adjustment support
      //now you can adjust prompt position
      //usage: positionType:Xshift,Yshift
      //for example:
      //   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
      //   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
      //You can use +pixels, - pixels. If no sign is provided than + is default.

      var positionType = field.data("promptPosition") || options.promptPosition;
      var shift1 = "";
      var shift2 = "";
      var shiftX = 0;
      var shiftY = 0;

      if (typeof positionType == 'string') {
        //do we have any position adjustments ?
        if (positionType.indexOf(":") != -1) {
          shift1 = positionType.substring(positionType.indexOf(":") + 1);
          positionType = positionType.substring(0, positionType.indexOf(":")); //if any advanced positioning will be needed (percents or something else) - parser should be added here
          //for now we use simple parseInt()
          //do we have second parameter?

          if (shift1.indexOf(",") != -1) {
            shift2 = shift1.substring(shift1.indexOf(",") + 1);
            shift1 = shift1.substring(0, shift1.indexOf(","));
            shiftY = parseInt(shift2);
            if (isNaN(shiftY)) shiftY = 0;
          }

          ;
          shiftX = parseInt(shift1);
          if (isNaN(shift1)) shift1 = 0;
        }

        ;
      }

      ;

      switch (positionType) {
        default:
        case "topRight":
          promptleftPosition += fieldLeft + fieldWidth - 27;
          promptTopPosition += fieldTop;
          break;

        case "topLeft":
          promptTopPosition += fieldTop;
          promptleftPosition += fieldLeft;
          break;

        case "centerRight":
          promptTopPosition = fieldTop + 4;
          marginTopSize = 0;
          promptleftPosition = fieldLeft + field.outerWidth(true) + 5;
          break;

        case "centerLeft":
          promptleftPosition = fieldLeft - (promptElmt.width() + 2);
          promptTopPosition = fieldTop + 4;
          marginTopSize = 0;
          break;

        case "bottomLeft":
          promptTopPosition = fieldTop + field.height() + 5;
          marginTopSize = 0;
          promptleftPosition = fieldLeft;
          break;

        case "bottomRight":
          promptleftPosition = fieldLeft + fieldWidth - 27;
          promptTopPosition = fieldTop + field.height() + 5;
          marginTopSize = 0;
          break;

        case "inline":
          promptleftPosition = 0;
          promptTopPosition = 0;
          marginTopSize = 0;
      }

      ; //apply adjusments if any

      promptleftPosition += shiftX;
      promptTopPosition += shiftY;
      return {
        "callerTopPosition": promptTopPosition + "px",
        "callerleftPosition": promptleftPosition + "px",
        "marginTopSize": marginTopSize + "px"
      };
    },

    /**
     * Saves the user options and variables in the form.data
     *
     * @param {jqObject}
     *            form - the form where the user option should be saved
     * @param {Map}
     *            options - the user options
     * @return the user options (extended from the defaults)
     */
    _saveOptions: function _saveOptions(form, options) {
      // is there a language localisation ?
      if ($.validationEngineLanguage) var allRules = $.validationEngineLanguage.allRules;else $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page"); // --- Internals DO NOT TOUCH or OVERLOAD ---
      // validation rules and i18

      $.validationEngine.defaults.allrules = allRules;
      var userOptions = $.extend(true, {}, $.validationEngine.defaults, options);
      form.data('jqv', userOptions);
      return userOptions;
    },

    /**
     * Removes forbidden characters from class name
     * @param {String} className
     */
    _getClassName: function _getClassName(className) {
      if (className) return className.replace(/:/g, "_").replace(/\./g, "_");
    },

    /**
     * Escape special character for jQuery selector
     * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
     * @param {String} selector
     */
    _jqSelector: function _jqSelector(str) {
      return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
    },

    /**
     * Conditionally required field
     *
     * @param {jqObject} field
     * @param {Array[String]} rules
     * @param {int} i rules index
     * @param {Map}
     * user options
     * @return an error string if validation failed
     */
    _condRequired: function _condRequired(field, rules, i, options) {
      var idx, dependingField;

      for (idx = i + 1; idx < rules.length; idx++) {
        dependingField = jQuery("#" + rules[idx]).first();
        /* Use _required for determining wether dependingField has a value.
                 * There is logic there for handling all field types, and default value; so we won't replicate that here
                 * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
                 */

        if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
          /* We now know any of the depending fields has a value,
                     * so we can validate this field as per normal required code
                     */
          return methods._required(field, ["required"], 0, options);
        }
      }
    },
    _submitButtonClick: function _submitButtonClick(event) {
      var button = $(this);
      var form = button.closest('form, .validationEngineContainer');
      form.data("jqv_submitButton", button.attr("id"));
    }
  };
  /**
   * Plugin entry point.
   * You may pass an action as a parameter or a list of options.
   * if none, the init and attach methods are being called.
   * Remember: if you pass options, the attached method is NOT called automatically
   *
   * @param {String}
   *            method (optional) action
   */

  $.fn.validationEngine = function (method) {
    var form = $(this);
    if (!form[0]) return form; // stop here if the form does not exist

    if (typeof method == 'string' && method.charAt(0) != '_' && methods[method]) {
      // make sure init is called once
      if (method != "showPrompt" && method != "hide" && method != "hideAll") methods.init.apply(form);
      return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
    } else if (_typeof(method) == 'object' || !method) {
      // default constructor with or without arguments
      methods.init.apply(form, arguments);
      return methods.attach.apply(form);
    } else {
      $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
    }
  }; // LEAK GLOBAL OPTIONS


  $.validationEngine = {
    fieldIdCounter: 0,
    defaults: {
      // Name of the event triggering field validation
      validationEventTrigger: "blur",
      // Automatically scroll viewport to the first error
      scroll: true,
      // Focus on the first input
      focusFirstField: true,
      // Show prompts, set to false to disable prompts
      showPrompts: true,
      // Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
      validateNonVisibleFields: false,
      // ignore the validation for fields with this specific class (Useful in cases of tabbed containers AND hidden fields we don't want to validate)
      ignoreFieldsWithClass: 'ignoreMe',
      // Opening box position, possible locations are: topLeft,
      // topRight, bottomLeft, centerRight, bottomRight, inline
      // inline gets inserted after the validated field or into an element specified in data-prompt-target
      promptPosition: "topRight",
      bindMethod: "bind",
      // internal, automatically set to true when it parse a _ajax rule
      inlineAjax: false,
      // if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
      ajaxFormValidation: false,
      // The url to send the submit ajax validation (default to action)
      ajaxFormValidationURL: false,
      // HTTP method used for ajax validation
      ajaxFormValidationMethod: 'get',
      // Ajax form validation callback method: boolean onComplete(form, status, errors, options)
      // retuns false if the form.submit event needs to be canceled.
      onAjaxFormComplete: $.noop,
      // called right before the ajax call, may return false to cancel
      onBeforeAjaxFormValidation: $.noop,
      // Stops form from submitting and execute function assiciated with it
      onValidationComplete: false,
      // Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
      doNotShowAllErrosOnSubmit: false,
      // Object where you store custom messages to override the default error messages
      custom_error_messages: {},
      // true if you want to validate the input fields on blur event
      binded: true,
      // set to true if you want to validate the input fields on blur only if the field it's not empty
      notEmpty: false,
      // set to true, when the prompt arrow needs to be displayed
      showArrow: true,
      // set to false, determines if the prompt arrow should be displayed when validating
      // checkboxes and radio buttons
      showArrowOnRadioAndCheckbox: false,
      // did one of the validation fail ? kept global to stop further ajax validations
      isError: false,
      // Limit how many displayed errors a field can have
      maxErrorsPerField: false,
      // Caches field validation status, typically only bad status are created.
      // the array is used during ajax form validation to detect issues early and prevent an expensive submit
      ajaxValidCache: {},
      // Auto update prompt position after window resize
      autoPositionUpdate: false,
      InvalidFields: [],
      onFieldSuccess: false,
      onFieldFailure: false,
      onSuccess: false,
      onFailure: false,
      validateAttribute: "class",
      addSuccessCssClassToField: "",
      addFailureCssClassToField: "",
      // Auto-hide prompt
      autoHidePrompt: false,
      // Delay before auto-hide
      autoHideDelay: 10000,
      // Fade out duration while hiding the validations
      fadeDuration: 300,
      // Use Prettify select library
      prettySelect: false,
      // Add css class on prompt
      addPromptClass: "",
      // Custom ID uses prefix
      usePrefix: "",
      // Custom ID uses suffix
      useSuffix: "",
      // Only show one message per error prompt
      showOneMessage: false
    }
  };
  $(function () {
    $.validationEngine.defaults.promptPosition = methods.isRTL() ? 'topLeft' : "topRight";
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./resources/assets/js/components/validationengine/languages/jquery.validationEngine-nl.js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/validationengine/languages/jquery.validationEngine-nl.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* eslint-disable */
(function ($) {
  $.fn.validationEngineLanguage = function () {};

  $.validationEngineLanguage = {
    newLang: function newLang() {
      $.validationEngineLanguage.allRules = {
        "required": {
          // Add your regex rules here, you can take telephone as an example
          "regex": "geen",
          "alertText": "* Dit veld is verplicht",
          "alertTextCheckboxMultiple": "* Selecteer a.u.b. een optie",
          "alertTextCheckboxe": "* Dit selectievakje is verplicht"
        },
        "requiredInFunction": {
          "func": function func(field, rules, i, options) {
            return field.val() == "test" ? true : false;
          },
          "alertText": "* Field must equal test"
        },
        "minSize": {
          "regex": "none",
          "alertText": "* Minimaal ",
          "alertText2": " karakters toegestaan"
        },
        "maxSize": {
          "regex": "none",
          "alertText": "* Maximaal ",
          "alertText2": " karakters toegestaan"
        },
        "groupRequired": {
          "regex": "none",
          "alertText": "* You must fill one of the following fields"
        },
        "min": {
          "regex": "none",
          "alertText": "* Minimale waarde is "
        },
        "max": {
          "regex": "none",
          "alertText": "* Maximale waarde is "
        },
        "past": {
          "regex": "none",
          "alertText": "* Datum voorafgaand aan "
        },
        "future": {
          "regex": "none",
          "alertText": "* Datum na "
        },
        "maxCheckbox": {
          "regex": "none",
          "alertText": "* Toegestane aantal vinkjes overschreden"
        },
        "minCheckbox": {
          "regex": "none",
          "alertText": "* Selecteer a.u.b. ",
          "alertText2": " opties"
        },
        "equals": {
          "regex": "none",
          "alertText": "* Velden komen niet overeen"
        },
        "creditCard": {
          "regex": "none",
          "alertText": "* Ongeldige credit card nummer"
        },
        "phone": {
          // credit: jquery.h5validate.js / orefalo
          "regex": /^\+?([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
          "alertText": "* Ongeldig telefoonnummer"
        },
        "email": {
          // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
          "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
          "alertText": "* Ongeldig e-mailadres"
        },
        "integer": {
          "regex": /^[\-\+]?\d+$/,
          "alertText": "* Ongeldig geheel getal"
        },
        "number": {
          // Number, including positive, negative, and floating decimal. credit: orefalo
          "regex": /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
          "alertText": "* Ongeldig drijvende comma getal"
        },
        "date": {
          "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
          "alertText": "* Ongeldige datum, formaat moet JJJJ-MM-DD zijn"
        },
        "ipv4": {
          "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
          "alertText": "* Ongeldig IP-adres"
        },
        "url": {
          "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
          "alertText": "* Ongeldige URL"
        },
        "onlyNumberSp": {
          "regex": /^[0-9\ ]+$/,
          "alertText": "* Alleen cijfers"
        },
        "onlyLetterSp": {
          "regex": /^[a-zA-Z\ \']+$/,
          "alertText": "* Alleen leestekens"
        },
        "onlyLetterNumber": {
          "regex": /^[0-9a-zA-Z]+$/,
          "alertText": "* Geen vreemde tekens toegestaan"
        },
        // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
        "ajaxUserCall": {
          "url": "ajaxValidateFieldUser",
          // you may want to pass extra data on the ajax call
          "extraData": "name=eric",
          "alertText": "* Deze gebruiker bestaat al",
          "alertTextLoad": "* Bezig met valideren, even geduld aub"
        },
        "ajaxNameCall": {
          // remote json service location
          "url": "ajaxValidateFieldName",
          // error
          "alertText": "* Deze naam bestaat al",
          // if you provide an "alertTextOk", it will show as a green prompt when the field validates
          "alertTextOk": "* Deze naam is beschikbaar",
          // speaks by itself
          "alertTextLoad": "* Bezig met valideren, even geduld aub"
        },
        "validate2fields": {
          "alertText": "* Voer aub HELLO in"
        }
      };
    }
  };
  $.validationEngineLanguage.newLang();
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")))

/***/ }),

/***/ "./resources/assets/js/constants/defaults.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/constants/defaults.js ***!
  \***************************************************/
/*! exports provided: matchMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchMobile", function() { return matchMobile; });
// eslint-disable-next-line import/prefer-default-export
var matchMobile = window.matchMedia('(min-width: 768px)');

/***/ }),

/***/ "./resources/assets/js/constants/googleMapsStyles.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/constants/googleMapsStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var googleMapsStyles = [{
  featureType: 'administrative.land_parcel',
  elementType: 'all',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'landscape.man_made',
  elementType: 'all',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'poi',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road',
  elementType: 'labels',
  stylers: [{
    visibility: 'simplified'
  }, {
    lightness: 20
  }]
}, {
  featureType: 'road.highway',
  elementType: 'geometry',
  stylers: [{
    hue: '#f49935'
  }]
}, {
  featureType: 'road.highway',
  elementType: 'labels',
  stylers: [{
    visibility: 'simplified'
  }]
}, {
  featureType: 'road.arterial',
  elementType: 'geometry',
  stylers: [{
    hue: '#fad959'
  }]
}, {
  featureType: 'road.arterial',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'road.local',
  elementType: 'geometry',
  stylers: [{
    visibility: 'simplified'
  }]
}, {
  featureType: 'road.local',
  elementType: 'labels',
  stylers: [{
    visibility: 'simplified'
  }]
}, {
  featureType: 'transit',
  elementType: 'all',
  stylers: [{
    visibility: 'off'
  }]
}, {
  featureType: 'water',
  elementType: 'all',
  stylers: [{
    hue: '#a1cdfc'
  }, {
    saturation: 30
  }, {
    lightness: 49
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (googleMapsStyles);

/***/ }),

/***/ "./resources/assets/js/pages/Contact.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/pages/Contact.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/forms/RecaptchaForm */ "./resources/assets/js/components/forms/RecaptchaForm.js");
/* harmony import */ var _components_maps_BasicGoogleMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/maps/BasicGoogleMap */ "./resources/assets/js/components/maps/BasicGoogleMap.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Contact = function Contact() {
  _classCallCheck(this, Contact);

  // Recaptcha submit handler for each form
  var contactForm = new _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_0__["default"]('#form-contact');

  window.submitRecaptchaFormContact = function () {
    contactForm.submitCallback();
  }; // Map


  var map = new _components_maps_BasicGoogleMap__WEBPACK_IMPORTED_MODULE_1__["default"]();
  map.init();
};



/***/ }),

/***/ "./resources/assets/js/utils/isMobile.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/utils/isMobile.js ***!
  \***********************************************/
/*! exports provided: isMobile, setIsMobileClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsMobileClass", function() { return setIsMobileClass; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);


var deviceAgent = navigator.userAgent.toLowerCase();
var isMobile = deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/samsungbrowser/i) || /OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent);
var setIsMobileClass = function setIsMobileClass() {
  var htmlClassList = document.documentElement.classList;

  if (isMobile) {
    htmlClassList.add('mobile');
    htmlClassList.remove('no-mobile');
  } else {
    htmlClassList.add('no-mobile');
    htmlClassList.remove('mobile');
  }
};

/***/ }),

/***/ "./resources/assets/js/utils/nativeConsole.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/utils/nativeConsole.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nativeConsole; });
// Avoid `console` errors in browsers that lack a console.
var nativeConsole = function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console ? window.console : {}; // eslint-disable-next-line

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
}();



/***/ }),

/***/ "./resources/assets/sass/style.scss":
/*!******************************************!*\
  !*** ./resources/assets/sass/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi ./resources/assets/js/app.js ./resources/assets/sass/style.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./resources/assets/js/app.js */"./resources/assets/js/app.js");
module.exports = __webpack_require__(/*! ./resources/assets/sass/style.scss */"./resources/assets/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.2b84ad895b26bd0249c7.js.map