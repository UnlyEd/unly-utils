'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Checks whether the current runtime is a browser
 *
 * @returns {boolean}
 */
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

exports.isBrowser = isBrowser;
