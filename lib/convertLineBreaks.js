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

exports.convertLineBreaks = convertLineBreaks;
