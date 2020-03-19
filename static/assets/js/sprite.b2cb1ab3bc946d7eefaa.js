/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/images/svg-sprite/close.svg":
/*!******************************************************!*\
  !*** ./resources/assets/images/svg-sprite/close.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-close-usage",
      viewBox: "0 0 17.05957 17.05989",
      url: __webpack_require__.p + "assets/svg-sprite/icons.svg#icon-close",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./resources/assets/images/svg-sprite/facebook.svg":
/*!*********************************************************!*\
  !*** ./resources/assets/images/svg-sprite/facebook.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-facebook-usage",
      viewBox: "289.854 405.702 15.573 30",
      url: __webpack_require__.p + "assets/svg-sprite/icons.svg#icon-facebook",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./resources/assets/images/svg-sprite/instagram.svg":
/*!**********************************************************!*\
  !*** ./resources/assets/images/svg-sprite/instagram.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-instagram-usage",
      viewBox: "282.703 406.008 30 30",
      url: __webpack_require__.p + "assets/svg-sprite/icons.svg#icon-instagram",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./resources/assets/images/svg-sprite/menu.svg":
/*!*****************************************************!*\
  !*** ./resources/assets/images/svg-sprite/menu.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-menu-usage",
      viewBox: "0 0 20 17.5",
      url: __webpack_require__.p + "assets/svg-sprite/icons.svg#icon-menu",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./resources/assets/images/svg-sprite/twitter.svg":
/*!********************************************************!*\
  !*** ./resources/assets/images/svg-sprite/twitter.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-twitter-usage",
      viewBox: "279.165 406.023 36.949 30",
      url: __webpack_require__.p + "assets/svg-sprite/icons.svg#icon-twitter",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ 3:
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/images/svg-sprite/close.svg ./resources/assets/images/svg-sprite/facebook.svg ./resources/assets/images/svg-sprite/instagram.svg ./resources/assets/images/svg-sprite/menu.svg ./resources/assets/images/svg-sprite/twitter.svg ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./resources/assets/images/svg-sprite/close.svg */"./resources/assets/images/svg-sprite/close.svg");
__webpack_require__(/*! ./resources/assets/images/svg-sprite/facebook.svg */"./resources/assets/images/svg-sprite/facebook.svg");
__webpack_require__(/*! ./resources/assets/images/svg-sprite/instagram.svg */"./resources/assets/images/svg-sprite/instagram.svg");
__webpack_require__(/*! ./resources/assets/images/svg-sprite/menu.svg */"./resources/assets/images/svg-sprite/menu.svg");
module.exports = __webpack_require__(/*! ./resources/assets/images/svg-sprite/twitter.svg */"./resources/assets/images/svg-sprite/twitter.svg");


/***/ })

/******/ });
//# sourceMappingURL=sprite.b2cb1ab3bc946d7eefaa.js.map