'use strict';

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

var browserRedirect_1 = browserRedirect;

module.exports = browserRedirect_1;
