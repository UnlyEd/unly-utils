"use strict";

/**
 * Redirect that handles the HTML <a> target
 * to redirect the current frame or open a new tab.
 *
 * @param redirect.url
 * @param redirect.target
 */
var browserRedirect = function browserRedirect(redirect) {
  var url = redirect.url,
      target = redirect.target;

  if (target === '_blank') {
    window.open(url, target);
  } else {
    window.location.href = url;
  }
};

module.exports = browserRedirect;