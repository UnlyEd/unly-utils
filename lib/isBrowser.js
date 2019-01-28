'use strict';

/**
 * Checks whether the current runtime is a browser
 *
 * @returns {boolean}
 */
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isBrowser_1 = isBrowser;

module.exports = isBrowser_1;
