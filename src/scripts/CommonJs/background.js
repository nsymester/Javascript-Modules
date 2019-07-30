/* /src/scripts/CommonJs/background.js */

// what does this feature need to do

/**
 * 1. cache DOM elements
 * 2. asynchronously get an image
 * 3. assemble an element
 * 4. render that to the DOM
 * 5. provide us a way to initialise it
 */

var Background = (function() {
  'use strict';

  // placeholder for chached DOM elements
  var DOM = {};

  /* ===================== private methods ========================= */

  // 1. cache DOM elements
  function cacheDOM() {
    DOM.$background = $('#background');
  }

  // 2. coordinate async assembly of image element and rendering
  function loadImage() {
    var baseUrl = 'https://source.unsplash.com/category',
      cat = 'nature',
      size = '1920x1080';

    buildElement(`${baseUrl}/${cat}/${size}`).then(render);
  }

  // 3. assemble the image element
  function buildElement(source) {
    var deferred = $.Deferred(function(task) {
      var image = new Image();

      image.onload = function() {
        task.resolve(image);
      };

      image.onerror = function() {
        task.reject();
      };

      image.src = source;
    });

    return deferred.promise();
  }

  // 4. render DOM
  function render(image) {
    DOM.$background.append(image).css('opacity', 1);
  }

  /* ===================== public methods ========================= */

  // 5. main init method
  function init() {
    cacheDOM();
    loadImage();
  }

  /* ================== export public methods ===================== */
  return {
    init: init
  };
})();
