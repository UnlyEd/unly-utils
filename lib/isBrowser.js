"use strict";

/**
 * Checks whether the current runtime is a browser
 *
 * @returns {boolean}
 */
var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

module.exports = isBrowser;