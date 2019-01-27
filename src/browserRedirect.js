/**
 * Redirect that handles the HTML <a> target
 * to redirect the current frame or open a new tab.
 *
 * @param url
 * @param target
 */
const browserRedirect = ({ url, target }) => {
  if (target === '_blank') {
    window.open(url, target);
  } else {
    window.location.href = url;
  }
};

module.exports = browserRedirect;
