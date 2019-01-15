/**
 * Checks whether the current runtime is a browser
 *
 * @returns {boolean}
 */
const isBrowser = () => typeof window !== 'undefined';

module.exports = isBrowser;
