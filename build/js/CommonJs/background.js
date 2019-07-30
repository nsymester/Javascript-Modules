/* /src/scripts/ CommonJs/background.js */

// what does this feature need to do

/**
 * 1. cache DOM elements
 * 2. asynchronously get an image
 * 3. assemble an element
 * 4. render that to the DOM
 * 5. provide us a way to initialise it
 */

var background = function() {
  'use strict';

  // placeholder for chached DOM elements
  var DOM = {};

  /* ===================== private methods ========================= */

  // 1. cache DOM elements
  function cacheDOM() {
    DOM.$background = $('#backgrouns');
  }
};
