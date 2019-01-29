'use strict';

var _require = require('./convertLineBreaks'),
    convertLineBreaks = _require.convertLineBreaks;

var _require2 = require('./isBrowser'),
    isBrowser = _require2.isBrowser;

var _require3 = require('./browserRedirect'),
    browserRedirect = _require3.browserRedirect;

var index = {
  convertLineBreaks: convertLineBreaks,
  isBrowser: isBrowser,
  browserRedirect: browserRedirect
};

module.exports = index;
