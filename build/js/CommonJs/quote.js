/* /src/scripts/CommonJs/quote.js */

// what does this feature need to do

/**
 * 1. cache DOM elements
 * 2. fetch a random quote from a remote API
 * 3. process the JSON response
 * 4. call our greeting module's pubic Greeting.displayMessage() method
 * 5. render the quote to our DOM
 * 6. provide us a way to initialise it
 */

var Quote = (function() {
  'use strict';

  var DOM = {};

  /* ===================== private methods ========================= */

  // cache DOM elments
  function cacheDOM() {
    DOM.$quoteFeature = $('#quote');
    DOM.$quoteLink = $(document.createElement('a'));
    DOM.$author = $(document.createElement('p'));
  }

  // get random quote
  function getQuote() {
    var api = {
      endpoint: 'https://quotesondesign.com/wp-json/posts',
      params: {
        'filter[orderby]': 'rand',
        'filter[posts_per_page]': 1,
        cachingHack: new Date().getTime()
      }
    };

    $.getJSON(api.endpoint, api.params)
      .then(renderQuote)
      .catch(handleError);
  }

  // handle errors
  function handleError(err) {
    console.log(err);
  }

  // render
  function renderQuote(response) {
    // call Greeting module's public displayMessage() method
    Greeting.displayMessage();

    DOM.$quoteLink
      .attr('target', '_blank')
      .attr('href', response[0].link)
      .html(response[0].content);

    DOM.$author.html(response[0].title);

    DOM.$quoteFeature
      .css('background-color', 'rgba(0,0,0,0.2)')
      .attr('href', response[0].link)
      .attr('target', '_blank')
      .html(DOM.$quoteLink)
      .append(DOM.$author);
  }

  /* ===================== public methods ========================= */
  function init() {
    cacheDOM();
    getQuote();
  }

  /* ================== export public methods ===================== */
  return {
    init: init
  };
})();
