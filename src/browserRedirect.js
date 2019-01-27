/**
 * Redirect that handles the HTML <a> target
 * to redirect the current frame or open a new tab.
 *
 * @param redirect.url
 * @param redirect.target
 */
const browserRedirect = (redirect) => {
  const { url, target } = redirect;
  if (target === '_blank') {
    window.open(url, target);
  } else {
    window.location.href = url;
  }
};

module.exports = browserRedirect;
