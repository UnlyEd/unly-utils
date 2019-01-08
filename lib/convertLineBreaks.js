/**
 *
 * @param str
 * @returns {string}
 */
const convertLineBreaks = (str) => {
  if (typeof str !== 'string') {
    throw Error(`convertLineBreaks waiting for string but receive a ${typeof str}`);
  }
  return str.replace(/\n/g, '<br>');
};

module.exports = convertLineBreaks;
