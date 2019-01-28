'use strict';

var convertLineBreaks = require('./convertLineBreaks');

var isBrowser = require('./isBrowser');

var browserRedirect = require('./browserRedirect');

var index = {
  convertLineBreaks: convertLineBreaks,
  isBrowser: isBrowser,
  browserRedirect: browserRedirect
};

module.exports = index;
