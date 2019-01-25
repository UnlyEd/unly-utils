"use strict";

var convertLineBreaks = require('./convertLineBreaks');

var isBrowser = require('./isBrowser');

var browserRedirect = require('./browserRedirect');

module.exports = {
  convertLineBreaks: convertLineBreaks,
  isBrowser: isBrowser,
  browserRedirect: browserRedirect
};