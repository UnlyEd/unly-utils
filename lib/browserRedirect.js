'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.browserRedirect = browserRedirect;
