'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Replace line breaks in a string by a HTML line break (<br>)
 *
 * @param str
 * @param replacer
 * @returns {string}
 */
var convertLineBreaks = function convertLineBreaks(str) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '<br>';

  if (typeof str !== 'string') {
    throw Error("convertLineBreaks waiting for string but receive a ".concat(_typeof(str)));
  }

  return str.replace(/\n/g, replacer);
};

/**
 * Checks whether the current runtime is a browser
 *
 * @returns {boolean}
 */
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

/**
 * Redirect that handles the HTML <a> target
 * to redirect the current frame or open a new tab.
 *
 * @param url
 * @param target
 */
var browserRedirect = function browserRedirect(_ref) {
  var url = _ref.url,
      target = _ref.target;

  if (target === '_blank') {
    window.open(url, target);
  } else {
    window.location.href = url;
  }
};

exports.convertLineBreaks = convertLineBreaks;
exports.isBrowser = isBrowser;
exports.browserRedirect = browserRedirect;
