/* /src/scripts/CommonJs/greeting.js */

// what does this feature need to do

/**
 * 1. cache DOM elements
 * 2. determine the time of day
 * 3. creaft a greeting nased on the time of day
 * 4. render the greeting to our view
 * 5. provide us a way to initialise it
 */

var Greeting = (function() {
  // placeholder for chached DOM elements
  var DOM = {},
    names = [
      'handsome',
      'smarty pants',
      'good looking',
      'classy',
      'ace',
      'Mr Roboto'
    ],
    dummy = selectName();

  /* ===================== private methods ========================= */

  // 1. cache DOM elements
  function cacheDom() {
    DOM.$greeting = $('#greeting');
  }

  // pick a name from names array
  function selectName() {
    var ind = Math.floor(Math.random() * names.length);
    return names[ind];
  }

  // assemble time-based greeting message
  function makeMessage() {
    var timeOfDay,
      theDate = new Date(),
      theHour = theDate.getHours();

    if (theHour < 12) {
      timeOfDay = 'morning';
    } else if (theHour >= 12 && theHour < 17) {
      timeOfDay = 'afternoon';
    } else {
      timeofDay = 'evening';
    }

    return `Good ${timeOfDay}, ${dummy}.`;
  }

  // render DOM
  function displayMessage() {
    DOM.$greeting.text(makeMessage());
  }

  /* ===================== public methods ========================= */

  // 5. main init method
  function init() {
    cacheDom();
  }

  /* ================== export public methods ===================== */
  return {
    init: init,
    displayMessage: displayMessage
  };
})();
