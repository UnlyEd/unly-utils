/**
 * Replace line breaks in a string by a HTML line break (<br>)
 *
 * @param str
 * @param replacer
 * @returns {string}
 */
const convertLineBreaks = (str, replacer = '<br>') => {
  if (typeof str !== 'string') {
    throw Error(`convertLineBreaks waiting for string but receive a ${typeof str}`);
  }

  return str.replace(/\n/g, replacer);
};

module.exports = convertLineBreaks;
