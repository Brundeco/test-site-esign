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
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classlist-polyfill */ "./node_modules/classlist-polyfill/src/index.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/navigation */ "./resources/assets/js/components/layout/navigation.js");
/* harmony import */ var _components_layout_responsiveVideos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/responsiveVideos */ "./resources/assets/js/components/layout/responsiveVideos.js");
/* harmony import */ var _components_forms_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forms/validation */ "./resources/assets/js/components/forms/validation.js");
/* harmony import */ var _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forms/RecaptchaForm */ "./resources/assets/js/components/forms/RecaptchaForm.js");
/* harmony import */ var _components_cookies_cookieNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cookies/cookieNotification */ "./resources/assets/js/components/cookies/cookieNotification.js");
/* harmony import */ var _components_modals_ModalManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modals/ModalManager */ "./resources/assets/js/components/modals/ModalManager.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Contact */ "./resources/assets/js/pages/Contact.js");
/* harmony import */ var _pages_Components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Components */ "./resources/assets/js/pages/Components.js");











__webpack_require__(/*! ./utils/nativeConsole */ "./resources/assets/js/utils/nativeConsole.js"); // require('jquery-touchswipe/jquery.touchSwipe'); // use with fancybox, cycle2, etc
// import objectFitImages from 'object-fit-images';
// Set js class


var htmlClassList = document.documentElement.classList;
htmlClassList.add('js');
htmlClassList.remove('no-js'); // eslint-disable-next-line

window.modalManager = new _components_modals_ModalManager__WEBPACK_IMPORTED_MODULE_7__["default"](); // Layout setup

Object(_components_layout_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_components_layout_responsiveVideos__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_components_cookies_cookieNotification__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Forms

Object(_components_forms_validation__WEBPACK_IMPORTED_MODULE_4__["default"])();

if (document.getElementById('form-newsletter')) {
  var newsletterForm = new _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_5__["default"]('#form-newsletter');

  window.submitRecaptchaFormNewsletter = function () {
    newsletterForm.submitCallback();
  };
} // Enable this if you want to test ga calls in development
// gaDevelopment();
// Page specific classes


var pages = {
  Contact: _pages_Contact__WEBPACK_IMPORTED_MODULE_8__["default"],
  Components: _pages_Components__WEBPACK_IMPORTED_MODULE_9__["default"]
};
var currentPage = document.documentElement.getAttribute('data-page');

if (currentPage) {
  var pageClassName = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  if (pageClassName !== '' && typeof pages[pageClassName] === 'function') {
    new pages[pageClassName](); // eslint-disable-line no-new
  }
}

window.modalManager.checkModalOnPageLoad();

/***/ }),

/***/ "./resources/assets/js/components/cookies/cookieNotification.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/cookies/cookieNotification.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookiejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookiejs */ "./node_modules/cookiejs/dist/cookie.js");
/* harmony import */ var cookiejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookiejs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (!cookiejs__WEBPACK_IMPORTED_MODULE_0___default.a.get('cookie-consent')) {
    var cookieNotificationEl = document.getElementById('cookie-notification');
    var acceptCookiesTrigger = document.getElementById('accept-cookies');
    acceptCookiesTrigger.addEventListener('click', function () {
      cookiejs__WEBPACK_IMPORTED_MODULE_0___default.a.set('cookie-consent', '1', 365);
      cookieNotificationEl.classList.add('hide');
    });
    cookieNotificationEl.classList.remove('hide');
  }
});

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



var RecaptchaForm = /*#__PURE__*/function () {
  function RecaptchaForm(formId) {
    var _this = this;

    _classCallCheck(this, RecaptchaForm);

    this.$form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(formId);
    this.$form.submit(function (e) {
      e.preventDefault();

      if (_this.$form.hasClass('validate')) {
        if (_this.$form[0].checkValidity() === false) {
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var hyperform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hyperform */ "./node_modules/hyperform/src/hyperform.js");
/* harmony import */ var _validationTranslations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validationTranslations */ "./resources/assets/js/components/forms/validationTranslations.js");














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_validationTranslations__WEBPACK_IMPORTED_MODULE_14__["setHyperformLang"])();

  _toConsumableArray(document.querySelectorAll('form.validate')).forEach(function (form) {
    Object(hyperform__WEBPACK_IMPORTED_MODULE_13__["default"])(form, {
      classes: {
        warning: 'input-group__error'
      }
    });
  });

  var inputClass = 'input-group';
  var errorClass = 'input-group--error'; // changed warning renderer

  hyperform__WEBPACK_IMPORTED_MODULE_13__["default"].setRenderer('attachWarning', function (warning, element) {
    var parent = element.parentNode;
    parent.appendChild(warning);

    if (parent.classList.contains(inputClass)) {
      parent.classList.add(errorClass);
    } else if (parent.parentNode.classList.contains(inputClass)) {
      parent.parentNode.classList.add(errorClass);
    }
  }); // set detach

  hyperform__WEBPACK_IMPORTED_MODULE_13__["default"].setRenderer('detachWarning', function (warning, element) {
    var parent = element.parentNode;
    parent.removeChild(warning);
    parent.classList.remove(errorClass);
    parent.parentNode.classList.remove(errorClass);
  });
});

/***/ }),

/***/ "./resources/assets/js/components/forms/validationTranslations.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/forms/validationTranslations.js ***!
  \************************************************************************/
/*! exports provided: validationNl, setHyperformLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationNl", function() { return validationNl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHyperformLang", function() { return setHyperformLang; });
/* harmony import */ var hyperform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyperform */ "./node_modules/hyperform/src/hyperform.js");
 // Find other translations
// on https://github.com/hyperform/hyperform-l10n/tree/master/dist

var validationNl = {
  TextTooLong: 'Kort deze tekst in tot %l tekens of minder (u gebruikt nu %l tekens).',
  TextTooShort: 'Gebruik minstens %l tekens (u gebruikt momenteel %l tekens).',
  ValueMissing: 'Vul dit veld in.',
  CheckboxMissing: 'Vink dit vakje aan als u wilt doorgaan.',
  RadioMissing: 'Selecteer een van deze opties.',
  FileMissing: 'Selecteer een bestand.',
  SelectMissing: 'Selecteer een item in de lijst.',
  InvalidEmail: 'Voer een e-mailadres in.',
  InvalidURL: 'Voer een URL in.',
  InvalidDate: 'Voer een geldige datum in.',
  PatternMismatch: 'Gebruik de gevraagde indeling.',
  PatternMismatchWithTitle: 'Gebruik de gevraagde indeling: %l.',
  NumberRangeOverflow: 'Selecteer een waarde die niet hoger is dan %l.',
  DateTimeRangeOverflow: 'Selecteer een waarde die niet later is dan %l.',
  NumberRangeUnderflow: 'Selecteer een waarde die niet lager is dan %l.',
  DateTimeRangeUnderflow: 'Selecteer een waarde die niet vroeger is dan %l.',
  StepMismatch: 'Selecteer een geldige waarde. De twee dichtstbijzijnde geldige waarden zijn %l en %l.',
  StepMismatchOneValue: 'Selecteer een geldige waarde. De dichtstbijzijnde geldige waarde is %l.',
  BadInputNumber: 'Voer een getal in.',
  'Please match the requested type.': 'Pas de invoer aan aan het vereiste type.',
  'Please comply with all requirements.': 'Voldoe aan alle vereisten.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).': 'Verleng deze tekst tot ten minste %l tekens (u gebruikt momenteel %l tekens).',
  'Please use the appropriate format.': 'Gebruik de juiste indeling.',
  'Please enter a comma separated list of email addresses.': 'Voer een door komma\'s gescheiden lijst van e-mailadressen in.',
  'Please select a file of the correct type.': 'Selecteer een bestand van het juiste type.',
  'Please select one or more files.': 'Selecteer een of meer bestanden.',
  'any value': 'elke waarde',
  'any valid value': 'elke geldige waarde'
};
var validationFr = {
  TextTooLong: 'Veuillez raccourcir ce champ à %l caractères ou moins (vous utilisez actuellement %l caractères).',
  TextTooShort: 'Veuillez utiliser au moins %l caractères pour ce champ (vous utilisez actuellement %l caractères).',
  ValueMissing: 'Veuillez compléter ce champ.',
  CheckboxMissing: 'Veuillez cocher cette case si vous désirez poursuivre.',
  RadioMissing: 'Veuillez sélectionner l’une de ces options.',
  FileMissing: 'Veuillez sélectionner un fichier.',
  SelectMissing: 'Veuillez sélectionner un élément de la liste.',
  InvalidEmail: 'Veuillez saisir une adresse électronique valide.',
  InvalidURL: 'Veuillez saisir une URL.',
  // InvalidDate:"",
  PatternMismatch: 'Veuillez modifier la valeur pour correspondre au format demandé.',
  PatternMismatchWithTitle: 'Veuillez modifier la valeur du champ pour correspondre au format demandé : %l.',
  NumberRangeOverflow: 'Veuillez sélectionner une valeur inférieure ou égale à %l.',
  DateRangeOverflow: 'Veuillez sélectionner une valeur antérieure ou égale à %l.',
  TimeRangeOverflow: 'Veuillez sélectionner une valeur antérieure ou égale à %l.',
  NumberRangeUnderflow: 'Veuillez sélectionner une valeur supérieure ou égale à %l.',
  DateRangeUnderflow: 'Veuillez sélectionner une valeur postérieure ou égale à %l.',
  TimeRangeUnderflow: 'Veuillez sélectionner une valeur postérieure ou égale à %l.',
  StepMismatch: 'Veuillez sélectionner une valeur valide. Les deux valeurs valides les plus proches sont %l et %l.',
  StepMismatchOneValue: 'Veuillez sélectionner une valeur valide. La valeur valide la plus proche est %l.',
  BadInputNumber: 'Veuillez saisir un nombre.',
  'Please match the requested type.': 'Veuillez respecter le type de champ demandé.',
  'Please comply with all requirements.': 'Veuillez respecter toutes les conditions.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).': "Veuillez allonger ce texte pour atteindre %l caractères ou plus (vous avez écrit pour l'instant %l caractères).",
  'Please use the appropriate format.': 'Veuillez utiliser le format approprié.',
  'Please enter a comma separated list of email addresses.': "Veuillez saisir une liste d'adresses électroniques séparées par des virgules.",
  'Please select a file of the correct type.': 'Veuillez sélectionner un fichier du type approprié.',
  'Please select one or more files.': 'Veuillez sélectionner un ou plusieurs fichiers.',
  'any value': "n'importe quelle valeur",
  'any valid value': "n'importe quelle valeur valide"
};
var validationDe = {
  TextTooLong: 'Bitte kürzen Sie diesen Text auf maximal %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  TextTooShort: 'Bitte verwenden Sie zumindest %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  ValueMissing: 'Bitte füllen Sie dieses Feld aus.',
  CheckboxMissing: 'Bitte klicken Sie dieses Kästchen an, wenn Sie fortsetzen wollen.',
  RadioMissing: 'Bitte wählen Sie eine dieser Optionen.',
  FileMissing: 'Bitte wählen Sie eine Datei.',
  SelectMissing: 'Bitte wählen Sie einen Eintrag in der Liste.',
  InvalidEmail: 'Bitte geben Sie eine E-Mail-Adresse ein.',
  InvalidURL: 'Bitte geben Sie eine Internetadresse ein.',
  // InvalidDate:"",
  PatternMismatch: 'Bitte halten Sie sich an das vorgegebene Format.',
  PatternMismatchWithTitle: 'Bitte halten Sie sich an das vorgegebene Format: %l.',
  NumberRangeOverflow: 'Bitte wählen Sie einen Wert, der nicht größer ist als %l.',
  DateRangeOverflow: 'Bitte wählen Sie einen Wert, der nicht später ist als %l.',
  TimeRangeOverflow: 'Bitte wählen Sie einen Wert, der nicht später ist als %l.',
  NumberRangeUnderflow: 'Bitte wählen Sie einen Wert, der nicht kleiner ist als %l.',
  DateRangeUnderflow: 'Bitte wählen Sie einen Wert, der nicht früher ist als %l.',
  TimeRangeUnderflow: 'Bitte wählen Sie einen Wert, der nicht früher ist als %l.',
  StepMismatch: 'Bitte wählen Sie einen gültigen Wert. Die zwei nähesten gültigen Werte sind %l und %l.',
  StepMismatchOneValue: 'Bitte wählen Sie einen gültigen Wert. Der näheste gültige Wert ist %l.',
  BadInputNumber: 'Bitte geben Sie eine Nummer ein.',
  'Please match the requested type.': 'Bitte passen Sie die Eingabe dem geforderten Typ an.',
  'Please comply with all requirements.': 'Bitte erfüllen Sie alle Anforderungen.',
  'Please lengthen this text to %l characters or more (you are currently using %l characters).': 'Bitte verlängern Sie diesen Text auf mindestens %l Zeichen (Sie verwenden derzeit %l Zeichen).',
  'Please use the appropriate format.': 'Bitte verwenden Sie das passende Format.',
  'Please enter a comma separated list of email addresses.': 'Bitte geben Sie eine komma-getrennte Liste von E-Mail-Adressen an.',
  'Please select a file of the correct type.': 'Bitte wählen Sie eine Datei vom korrekten Typ.',
  'Please select one or more files.': 'Bitte wählen Sie eine oder mehrere Dateien.',
  'any value': 'jeder Wert',
  'any valid value': 'jeder gültige Wert'
};
var setHyperformLang = function setHyperformLang() {
  var lang = document.documentElement.lang;

  if (lang === 'nl') {
    hyperform__WEBPACK_IMPORTED_MODULE_0__["default"].addTranslation(lang, validationNl);
    hyperform__WEBPACK_IMPORTED_MODULE_0__["default"].setLanguage(lang);
  } else if (lang === 'fr') {
    hyperform__WEBPACK_IMPORTED_MODULE_0__["default"].addTranslation(lang, validationFr);
    hyperform__WEBPACK_IMPORTED_MODULE_0__["default"].setLanguage(lang);
  } else if (lang === 'de') {
    hyperform__WEBPACK_IMPORTED_MODULE_0__["default"].addTranslation(lang, validationDe);
    hyperform__WEBPACK_IMPORTED_MODULE_0__["default"].setLanguage(lang);
  }
};

/***/ }),

/***/ "./resources/assets/js/components/layout/JsonFetcher.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/layout/JsonFetcher.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonFetcher; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");











function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var JsonFetcher = /*#__PURE__*/function () {
  function JsonFetcher(element) {
    _classCallCheck(this, JsonFetcher);

    this.element = element;
    this.template = element.querySelector('.json-fetcher__template');
    this.api = element.dataset.api;
    this.keys = element.dataset.keys.split(';');
  }

  _createClass(JsonFetcher, [{
    key: "init",
    value: function init() {
      var _this = this;

      fetch(this.api).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.parseResults(res);
      }).catch(function (error) {
        _this.printError(error);
      });
    }
  }, {
    key: "parseResults",
    value: function parseResults(json) {
      var _this2 = this;

      json.forEach(function (item) {
        var templateClone = _this2.template.cloneNode(true);

        _this2.keys.forEach(function (key) {
          try {
            var keyParts = key.split('.');
            var index = 0;
            var data = item;

            while (index + 1 <= keyParts.length) {
              data = data[keyParts[index]];
              index += 1;
            }

            templateClone.innerHTML = templateClone.innerHTML.replace("__".concat(key, "__"), data);
          } catch (error) {
            _this2.printError(error);
          }
        });

        templateClone.innerHTML = templateClone.innerHTML.replace('data-src', 'src');

        _this2.element.appendChild(templateClone.children[0]);
      });
      this.template.parentNode.removeChild(this.template);
    }
  }, {
    key: "printError",
    value: function printError(error) {
      // eslint-disable-next-line no-console
      console.error("JsonFetcher error - API: ".concat(this.api, "\n").concat(error));
    }
  }]);

  return JsonFetcher;
}();



/***/ }),

/***/ "./resources/assets/js/components/layout/navigation.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/components/layout/navigation.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var header = document.querySelector('.page-header--fixed');
  var lastScrollTop = 0;
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.classList.add('page-header--collapsed');
    } else if (scrollTop < 50) {
      header.classList.remove('page-header--collapsed');
    }

    lastScrollTop = scrollTop;
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);














function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var videos = document.querySelectorAll("iframe[src*=\"youtube.com/embed\"],\n    iframe[src*=\"youtube-nocookie.com/embed\"],\n    iframe[src*=\"player.vimeo\"]");

  _toConsumableArray(videos).forEach(function (video) {
    var container = document.createElement('div');
    container.classList.add('video-container');
    video.parentNode.insertBefore(container, video);
    container.appendChild(video);
  });
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

var BasicGoogleMap = /*#__PURE__*/function () {
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

/***/ "./resources/assets/js/components/modals/CustomModalAnimation.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/modals/CustomModalAnimation.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomModalAnimation; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");

var CustomModalAnimation = /*#__PURE__*/function (_EventEmitter) {
  _inherits(CustomModalAnimation, _EventEmitter);

  var _super = _createSuper(CustomModalAnimation);

  function CustomModalAnimation() {
    var _this;

    _classCallCheck(this, CustomModalAnimation);

    _this = _super.call(this); // Creating and styling everything in JS to avoid default styles in front-end template

    _this.modal = document.getElementById('custom-modal');
    _this.modalBg = document.createElement('div');
    _this.modal.style.background = 'transparent';
    _this.modal.style.opacity = 0;
    _this.modal.style.transition = 'all .2s ease-out';

    _this.modalBg.setAttribute('id', 'custom-modal-bg');

    _this.modalBg.style.background = 'black';
    _this.modalBg.style.transition = 'all .2s ease-out';
    _this.modalBg.style.position = 'fixed';
    _this.modalBg.style.zIndex = '100';
    _this.modalBg.style.top = '50%';
    _this.modalBg.style.left = '50%';
    _this.modalBg.style.transform = 'translateX(-50%) translateY(-50%)';
    _this.modalBg.style.width = '100%';
    _this.modalBg.style.height = '0';

    _this.modal.parentElement.appendChild(_this.modalBg, _this.modal);

    return _this;
  }
  /* Before show */


  _createClass(CustomModalAnimation, [{
    key: "beforeShow",
    value: function beforeShow() {
      var _this2 = this;

      this.modalBg.style.height = '100vh';
      this.beforeShowTimeout = setTimeout(function () {
        _this2.emit('before-show-finished');
      }, 200);
    }
  }, {
    key: "cancelBeforeShow",
    value: function cancelBeforeShow() {
      clearTimeout(this.beforeShowTimeout);
    }
    /* After show */

  }, {
    key: "afterShow",
    value: function afterShow() {
      var _this3 = this;

      this.modal.style.opacity = 1;
      this.afterShowTimeout = setTimeout(function () {
        _this3.emit('after-show-finished');
      }, 200);
    }
  }, {
    key: "cancelAfterShow",
    value: function cancelAfterShow() {
      clearTimeout(this.afterShowTimeout);
    }
    /* Before hide */

  }, {
    key: "beforeHide",
    value: function beforeHide() {
      var _this4 = this;

      this.modal.style.opacity = 0;
      this.beforeHideTimeout = setTimeout(function () {
        _this4.emit('before-hide-finished');
      }, 200);
    }
  }, {
    key: "cancelBeforeHide",
    value: function cancelBeforeHide() {
      clearTimeout(this.beforeHideTimeout);
    }
    /* After hide */

  }, {
    key: "afterHide",
    value: function afterHide() {
      var _this5 = this;

      this.modalBg.style.height = '0';
      this.afterHideTimeout = setTimeout(function () {
        _this5.emit('after-hide-finished');
      }, 200);
    }
  }, {
    key: "cancelAfterHide",
    value: function cancelAfterHide() {
      clearTimeout(this.afterHideTimeout);
    }
  }]);

  return CustomModalAnimation;
}(EventEmitter);



/***/ }),

/***/ "./resources/assets/js/components/modals/Modal.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/modals/Modal.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);


















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* eslint no-underscore-dangle: ["error", { "allow": ["_show", "_hide"] }] */


var Modal = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Modal, _EventEmitter);

  var _super = _createSuper(Modal);

  function Modal(element) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this);
    _this.element = element;
    _this.id = element.getAttribute('id');
    _this.modalDialog = null;
    _this.modalDocument = null;
    _this.closeTriggers = null;
    _this.accessibilityWrap = element.dataset.accessibilityWrap !== 'false';
    _this.isAlert = element.dataset.alert === 'true';
    _this.title = element.dataset.title;
    _this.showHash = element.dataset.hideHash !== 'true';
    _this.backgroundScroll = element.dataset.backgroundScroll === 'true';
    _this.focusableElements = null;
    _this.eventListeners = [];
    _this.activeClass = 'modal--active';
    _this.beforeShowClass = 'modal--before-show';
    _this.beforeHideClass = 'modal--before-hide';
    _this.animation = null;
    _this.showTimeout = element.dataset.showTimeout || 0;
    _this.hideTimeout = element.dataset.hideTimeout || 0;
    _this.showTimeoutReference = null;
    _this.hideTimeoutReference = null;
    _this.isOpening = false;
    _this.isClosing = false;
    _this.state = null;

    _this.init();

    return _this;
  }

  _createClass(Modal, [{
    key: "init",
    value: function init() {
      // DOM Setup
      if (this.accessibilityWrap) {
        this.addA11Y();
      } else {
        this.modalVaWrap = this.element.querySelector('.modal__va-wrap');
        this.modalVaM = this.element.querySelector('.modal__va-m');
        this.modalDialog = this.element.querySelector('.modal__dialog');
      } // Focusable elements (for TAB key)


      this.focusableElements = _toConsumableArray(this.element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable], [tabindex]:not([tabindex^="-"])'));
      this.closeTriggers = _toConsumableArray(this.element.querySelectorAll('.js-modal-close'));
    }
  }, {
    key: "addA11Y",
    value: function addA11Y() {
      this.element.setAttribute('aria-hidden', true); // Create va-wrap ; va-m

      this.modalVaWrap = document.createElement('div');
      this.modalVaWrap.classList.add('modal__va-wrap');
      this.modalVaM = document.createElement('div');
      this.modalVaM.classList.add('modal__va-m'); // Create modal wrapper

      this.modalDialog = document.createElement('div');
      var role = this.isAlert ? 'alertdialog' : 'dialog';
      this.modalDialog.setAttribute('role', role);
      this.modalDialog.classList.add('modal__dialog');

      if (this.title) {
        this.modalDialog.setAttribute('aria-labelledby', this.title);
      } // Create content wrapper


      this.modalDocument = document.createElement('div');
      this.modalDocument.setAttribute('role', 'document'); // Wrap content with content wrapper and then wrap content wrapper with modal wrapper

      var originalHtml = this.element.innerHTML;
      this.element.innerHTML = '';
      this.element.appendChild(this.modalVaWrap);
      this.modalVaWrap.appendChild(this.modalVaM);
      this.modalVaM.appendChild(this.modalDialog);
      this.modalDialog.appendChild(this.modalDocument);
      this.modalDocument.innerHTML = originalHtml;
    }
    /* Show / Hide functionality */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      if (!this.isOpening) {
        this.isOpening = true;

        if (this.isClosing && this.animation) {
          if (this.state === 'before-hide') {
            this.animation.cancelBeforeHide();
          } else {
            this.animation.cancelAfterHide();
          }
        }

        this.isClosing = false;
        this.state = 'before-show';
        clearTimeout(this.hideTimeoutReference);
        this.element.classList.add(this.beforeShowClass);
        this.element.classList.remove(this.beforeHideClass);
        this.element.setAttribute('aria-hidden', false);
        this.addEventListeners();
        this.emit('before-show');

        if (this.animation) {
          this.animation.beforeShow();
        } else {
          this.showTimeoutReference = setTimeout(function () {
            _this2._show();
          }, this.showTimeout);
        }
      }
    }
  }, {
    key: "_show",
    value: function _show() {
      var _this3 = this;

      this.state = 'after-show';
      this.modalDialog.setAttribute('tabindex', -1);
      this.modalDialog.scrollTop = 0;
      this.element.classList.remove(this.beforeShowClass);
      this.element.classList.add(this.activeClass);
      this.emit('show');

      if (this.animation) {
        this.animation.afterShow();
      } else {
        this.isOpening = false;
      } // Set focus


      setTimeout(function () {
        _this3.modalDialog.focus({
          preventScroll: true
        });

        var autofocus = _this3.modalDialog.querySelector('[autofocus]');

        if (autofocus) {
          _this3.modalDialog.querySelector('[autofocus]').focus({
            preventScroll: true
          });
        }
      }, 50);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this4 = this;

      if (!this.isClosing) {
        this.isClosing = true;

        if (this.isOpening && this.animation) {
          if (this.state === 'before-show') {
            this.animation.cancelBeforeShow();
          } else {
            this.animation.cancelAfterShow();
          }
        }

        this.isOpening = false;
        this.state = 'before-hide';
        clearTimeout(this.showTimeoutReference);
        this.element.setAttribute('aria-hidden', true);
        this.emit('before-hide');
        this.element.classList.add(this.beforeHideClass);
        this.element.classList.remove(this.beforeShowClass);
        this.removeEventListeners();

        if (this.animation) {
          this.animation.beforeHide();
        } else {
          this.hideTimeoutReference = setTimeout(function () {
            _this4._hide();
          }, this.hideTimeout);
        }
      }
    }
  }, {
    key: "_hide",
    value: function _hide() {
      this.state = 'after-hide';
      this.modalDialog.removeAttribute('tabindex');
      this.element.classList.remove(this.beforeHideClass);
      this.element.classList.remove(this.activeClass);
      this.emit('hide');

      if (this.animation) {
        this.animation.afterHide();
      } else {
        this.isClosing = false;
      }
    }
    /* Event Listeners */

  }, {
    key: "onModalVaMClick",
    value: function onModalVaMClick(e) {
      if (e.target === this.modalVaM) {
        this.hide();
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode === 27) {
        // ESC
        this.hide();
      }

      if (e.keyCode === 9) {
        // TAB
        var focusedIndex = this.focusableElements.indexOf(document.activeElement);

        if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
          this.focusableElements[this.focusableElements.length - 1].focus();
          e.preventDefault();
        } else if (!e.shiftKey && focusedIndex === this.focusableElements.length - 1) {
          this.focusableElements[0].focus();
          e.preventDefault();
        }
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this5 = this;

      // Close modal
      var onModalVaMClick = function onModalVaMClick(e) {
        _this5.onModalVaMClick(e);
      };

      this.element.addEventListener('click', onModalVaMClick);
      this.eventListeners.push({
        ctx: this.modalDialog,
        type: 'click',
        fn: onModalVaMClick
      });

      var onCloseTriggerClick = function onCloseTriggerClick() {
        _this5.hide();
      };

      this.closeTriggers.forEach(function (closeTrigger) {
        closeTrigger.addEventListener('click', onCloseTriggerClick);

        _this5.eventListeners.push({
          ctx: closeTrigger,
          type: 'click',
          fn: onCloseTriggerClick
        });
      }); // Keydown

      var onDocumentKeyDown = function onDocumentKeyDown(e) {
        _this5.onKeyDown(e);
      };

      document.addEventListener('keydown', onDocumentKeyDown);
      this.eventListeners.push({
        ctx: document,
        type: 'keydown',
        fn: onDocumentKeyDown
      });
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.eventListeners.forEach(function (listener) {
        listener.ctx.removeEventListener(listener.type, listener.fn);
      });
    }
    /* Animations */

  }, {
    key: "setAnimation",
    value: function setAnimation(animation) {
      var _this6 = this;

      if (this.animation) {
        this.animation.removeEventListeners();
      }

      this.animation = animation;
      this.animation.on('before-hide-finished', function () {
        _this6._hide();
      });
      this.animation.on('after-hide-finished', function () {
        _this6.isClosing = false;
      });
      this.animation.on('before-show-finished', function () {
        _this6._show();
      });
      this.animation.on('after-show-finished', function () {
        _this6.isOpening = false;
      });
    }
  }]);

  return Modal;
}(EventEmitter);



/***/ }),

/***/ "./resources/assets/js/components/modals/ModalManager.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/modals/ModalManager.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalManager; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Modal */ "./resources/assets/js/components/modals/Modal.js");















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    _classCallCheck(this, ModalManager);

    this.defaultModalsQuery = '.js-modal';
    this.idModalMap = new Map();
    this.activeModal = null;
    this.activeModalTrigger = null;
    this.isOpeningModal = false;
    this.showModalTimeoutReference = null;
    this.init();
  }

  _createClass(ModalManager, [{
    key: "init",
    value: function init() {
      var _this = this;

      _toConsumableArray(document.querySelectorAll(this.defaultModalsQuery)).forEach(function (el) {
        _this.createModal(el);
      });

      this.bindModalTriggers();
      this.bindWindowPopState();
    }
  }, {
    key: "checkModalOnPageLoad",
    value: function checkModalOnPageLoad() {
      var _this2 = this;

      setTimeout(function () {
        var hashOnPageLoad = window.location.hash.substring(1, window.location.hash.length);

        var modal = _this2.idModalMap.get(hashOnPageLoad);

        if (modal) {
          modal.show();
        }
      });
    }
  }, {
    key: "createModal",
    value: function createModal(modalElement) {
      var _this3 = this;

      var modal = new _Modal__WEBPACK_IMPORTED_MODULE_15__["default"](modalElement);
      this.idModalMap.set(modal.id, modal);
      modal.on('before-hide', function () {
        _this3.onModalBeforeHide(modal);
      });
      modal.on('hide', function () {
        _this3.onModalHide(modal);
      });
      modal.on('before-show', function () {
        _this3.onModalBeforeShow(modal);
      });
      modal.on('show', function () {
        _this3.onModalShow(modal);
      });
      return modal;
    }
  }, {
    key: "onModalBeforeHide",
    value: function onModalBeforeHide() {
      this.isOpeningModal = false;
      this.isClosingModal = true;
      clearTimeout(this.showModalTimeoutReference);
      this.removeHash();
    }
  }, {
    key: "onModalHide",
    value: function onModalHide(modal) {
      this.isClosingModal = false;
      this.activeModal = null;

      if (!this.isOpeningModal) {
        if (this.activeModalTrigger) {
          this.activeModalTrigger.focus();
        }
      }

      if (!modal.backgroundScroll) {
        Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_14__["enableBodyScroll"])(modal.element, {
          reserveScrollBarGap: true
        });
        setTimeout(function () {
          _toConsumableArray(document.querySelectorAll('.js-compensate-for-scrollbar')).forEach(function (el) {
            el.style.right = ''; // eslint-disable-line
          });
        });
      }
    }
  }, {
    key: "onModalBeforeShow",
    value: function onModalBeforeShow(modal) {
      if (!modal.backgroundScroll) {
        // scrollbar width as margin
        var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_14__["disableBodyScroll"])(modal.element, {
          reserveScrollBarGap: true
        });
        setTimeout(function () {
          _toConsumableArray(document.querySelectorAll('.js-compensate-for-scrollbar')).forEach(function (el) {
            var right = parseInt(window.getComputedStyle(el, null).getPropertyValue('right'), 10);
            el.style.right = "".concat(scrollBarWidth + right, "px"); // eslint-disable-line
          });

          var modalScrollBarWidth = window.innerWidth - modal.element.clientWidth;

          _toConsumableArray(modal.element.querySelectorAll('.js-compensate-for-scrollbar')).forEach(function (el) {
            el.style.right = ''; // eslint-disable-line

            var right = parseInt(window.getComputedStyle(el, null).getPropertyValue('right'), 10);
            el.style.right = "".concat(modalScrollBarWidth + right, "px"); // eslint-disable-line
          });
        });
      }

      if (modal.showHash) {
        this.setHash("#".concat(modal.id));
      } else {
        this.removeHash();
      }

      this.activeModal = modal;
    }
  }, {
    key: "onModalShow",
    value: function onModalShow() {
      this.isOpeningModal = false;
    }
  }, {
    key: "bindModalTriggers",
    value: function bindModalTriggers() {
      var _this4 = this;

      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('js-modal-trigger')) {
          e.preventDefault();
          var modalTrigger = e.target;
          _this4.isOpeningModal = true;
          var modalId = modalTrigger.getAttribute('data-modal-id');

          var modal = _this4.idModalMap.get(modalId);

          if (_this4.activeModal && !_this4.isClosingModal) {
            _this4.activeModal.once('hide', function () {
              modal.show();
            });

            _this4.activeModal.hide();
          } else {
            // Only keep the activeModalTrigger when not in a modal
            _this4.activeModalTrigger = modalTrigger;
            modal.show();
          }
        }
      });
    }
  }, {
    key: "bindWindowPopState",
    value: function bindWindowPopState() {
      var _this5 = this;

      window.addEventListener('popstate', function () {
        var windowHash = window.location.hash;

        if (_this5.activeModal && (windowHash === '' || _this5.activeModal.element.querySelector(windowHash) == null)) {
          _this5.activeModal.hide();
        }

        if (windowHash.length > 1) {
          var el = document.querySelector(window.location.hash);

          if (el != null && el.classList.contains('modal')) {
            var modal = _this5.idModalMap.get(el.getAttribute('id'));

            if (modal) {
              modal.show();
            }
          }
        }
      }, false);
    }
  }, {
    key: "setHash",
    value: function setHash(hash) {
      if (window.history.pushState) {
        window.history.pushState(window.history.state, '', hash);
      } else {
        window.location.hash = hash;
      }
    }
  }, {
    key: "removeHash",
    value: function removeHash() {
      var currentHash = window.location.hash.substring(1, window.location.hash.length);

      if (currentHash.length) {
        var _window = window,
            history = _window.history,
            location = _window.location;

        if (history.pushState) {
          history.replaceState(history.state, '', '#');
        } else {
          // Prevent scrolling by storing the page's current scroll offset
          var scrollV = document.body.scrollTop;
          var scrollH = document.body.scrollLeft;
          location.hash = ''; // Restore the scroll offset, should be flicker free

          document.body.scrollTop = scrollV;
          document.body.scrollLeft = scrollH;
        }
      }
    }
  }]);

  return ModalManager;
}();



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

/***/ "./resources/assets/js/pages/Components.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/pages/Components.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Components; });
/* harmony import */ var _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/forms/RecaptchaForm */ "./resources/assets/js/components/forms/RecaptchaForm.js");
/* harmony import */ var _components_maps_BasicGoogleMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/maps/BasicGoogleMap */ "./resources/assets/js/components/maps/BasicGoogleMap.js");
/* harmony import */ var _components_layout_JsonFetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/JsonFetcher */ "./resources/assets/js/components/layout/JsonFetcher.js");
/* harmony import */ var _components_modals_CustomModalAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modals/CustomModalAnimation */ "./resources/assets/js/components/modals/CustomModalAnimation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Components = function Components() {
  _classCallCheck(this, Components);

  // Recaptcha submit handler for each form
  var contactForm = new _components_forms_RecaptchaForm__WEBPACK_IMPORTED_MODULE_0__["default"]('#form-contact');

  window.submitRecaptchaFormContact = function () {
    contactForm.submitCallback();
  }; // Map


  var map = new _components_maps_BasicGoogleMap__WEBPACK_IMPORTED_MODULE_1__["default"]();
  map.init(); // JsonFetcher

  var jsonFetcher = new _components_layout_JsonFetcher__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('.json-fetcher'));
  jsonFetcher.init(); // Custom modal

  var customModal = window.modalManager.createModal(document.querySelector('.js-specific-modal-name'));
  customModal.setAnimation(new _components_modals_CustomModalAnimation__WEBPACK_IMPORTED_MODULE_3__["default"]());
};



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

/***/ 0:
/*!******************************************!*\
  !*** multi ./resources/assets/js/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./resources/assets/js/app.js */"./resources/assets/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.f8c011d0bb7bf1d0ced7.js.map