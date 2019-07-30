(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _background = require("./background.js");

/* /js/CommonJs/app.js */
$(document).ready(function () {
  (0, _background.init)();
});

},{"./background.js":2}],2:[function(require,module,exports){
/* /src/scripts/ES6/background.js */
// what does this feature need to do

/**
 * 1. cache DOM elements
 * 2. asynchronously get an image
 * 3. assemble an element
 * 4. render that to the DOM
 * 5. provide us a way to initialise it
 */
'use strict'; // placeholder for chached DOM elements

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
var DOM = {};
/* ===================== private methods ========================= */
// cache DOM elements

function cacheDOM() {
  DOM.$background = $('#background');
} // coordinate async assembly of image element and rendering


function loadImage() {
  var baseUrl = 'https://source.unsplash.com/category',
      cat = 'nature',
      size = '1920x1080';
  buildElement("".concat(baseUrl, "/").concat(cat, "/").concat(size)).then(render);
} // assemble the image element


function buildElement(source) {
  var deferred = $.Deferred(function (task) {
    var image = new Image();

    image.onload = function () {
      task.resolve(image);
    };

    image.onerror = function () {
      task.reject();
    };

    image.src = source;
  });
  return deferred.promise();
} // render DOM


function render(image) {
  DOM.$background.append(image).css('opacity', 1);
}
/* ===================== public methods ========================= */
// main init method


function init() {
  cacheDOM();
  loadImage();
}
/* ================== export public methods ===================== */
// note: this needs to be transpiled to work in a browser

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9FUzYvYXBwLmpzIiwic3JjL3NjcmlwdHMvRVM2L2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBOztBQUZBO0FBSUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsWUFBVztBQUMzQjtBQUNELENBRkQ7OztBQ0pBO0FBRUE7O0FBRUE7Ozs7Ozs7QUFRQSxhLENBRUE7Ozs7OztBQUNBLElBQUksR0FBRyxHQUFHLEVBQVY7QUFFQTtBQUVBOztBQUNBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixFQUFBLEdBQUcsQ0FBQyxXQUFKLEdBQWtCLENBQUMsQ0FBQyxhQUFELENBQW5CO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTLFNBQVQsR0FBcUI7QUFDbkIsTUFBSSxPQUFPLEdBQUcsc0NBQWQ7QUFBQSxNQUNFLEdBQUcsR0FBRyxRQURSO0FBQUEsTUFFRSxJQUFJLEdBQUcsV0FGVDtBQUlBLEVBQUEsWUFBWSxXQUFJLE9BQUosY0FBZSxHQUFmLGNBQXNCLElBQXRCLEVBQVosQ0FBMEMsSUFBMUMsQ0FBK0MsTUFBL0M7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVMsWUFBVCxDQUFzQixNQUF0QixFQUE4QjtBQUM1QixNQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBRixDQUFXLFVBQVMsSUFBVCxFQUFlO0FBQ3ZDLFFBQUksS0FBSyxHQUFHLElBQUksS0FBSixFQUFaOztBQUVBLElBQUEsS0FBSyxDQUFDLE1BQU4sR0FBZSxZQUFXO0FBQ3hCLE1BQUEsSUFBSSxDQUFDLE9BQUwsQ0FBYSxLQUFiO0FBQ0QsS0FGRDs7QUFJQSxJQUFBLEtBQUssQ0FBQyxPQUFOLEdBQWdCLFlBQVc7QUFDekIsTUFBQSxJQUFJLENBQUMsTUFBTDtBQUNELEtBRkQ7O0FBSUEsSUFBQSxLQUFLLENBQUMsR0FBTixHQUFZLE1BQVo7QUFDRCxHQVpjLENBQWY7QUFjQSxTQUFPLFFBQVEsQ0FBQyxPQUFULEVBQVA7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUNyQixFQUFBLEdBQUcsQ0FBQyxXQUFKLENBQWdCLE1BQWhCLENBQXVCLEtBQXZCLEVBQThCLEdBQTlCLENBQWtDLFNBQWxDLEVBQTZDLENBQTdDO0FBQ0Q7QUFFRDtBQUVBOzs7QUFDQSxTQUFTLElBQVQsR0FBZ0I7QUFDZCxFQUFBLFFBQVE7QUFDUixFQUFBLFNBQVM7QUFDVjtBQUVEO0FBSUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiAvanMvQ29tbW9uSnMvYXBwLmpzICovXHJcblxyXG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9iYWNrZ3JvdW5kLmpzJztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gIGluaXQoKTtcclxufSk7XHJcbiIsIi8qIC9zcmMvc2NyaXB0cy9FUzYvYmFja2dyb3VuZC5qcyAqL1xyXG5cclxuLy8gd2hhdCBkb2VzIHRoaXMgZmVhdHVyZSBuZWVkIHRvIGRvXHJcblxyXG4vKipcclxuICogMS4gY2FjaGUgRE9NIGVsZW1lbnRzXHJcbiAqIDIuIGFzeW5jaHJvbm91c2x5IGdldCBhbiBpbWFnZVxyXG4gKiAzLiBhc3NlbWJsZSBhbiBlbGVtZW50XHJcbiAqIDQuIHJlbmRlciB0aGF0IHRvIHRoZSBET01cclxuICogNS4gcHJvdmlkZSB1cyBhIHdheSB0byBpbml0aWFsaXNlIGl0XHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gcGxhY2Vob2xkZXIgZm9yIGNoYWNoZWQgRE9NIGVsZW1lbnRzXHJcbmxldCBET00gPSB7fTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PSBwcml2YXRlIG1ldGhvZHMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gY2FjaGUgRE9NIGVsZW1lbnRzXHJcbmZ1bmN0aW9uIGNhY2hlRE9NKCkge1xyXG4gIERPTS4kYmFja2dyb3VuZCA9ICQoJyNiYWNrZ3JvdW5kJyk7XHJcbn1cclxuXHJcbi8vIGNvb3JkaW5hdGUgYXN5bmMgYXNzZW1ibHkgb2YgaW1hZ2UgZWxlbWVudCBhbmQgcmVuZGVyaW5nXHJcbmZ1bmN0aW9uIGxvYWRJbWFnZSgpIHtcclxuICBsZXQgYmFzZVVybCA9ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY2F0ZWdvcnknLFxyXG4gICAgY2F0ID0gJ25hdHVyZScsXHJcbiAgICBzaXplID0gJzE5MjB4MTA4MCc7XHJcblxyXG4gIGJ1aWxkRWxlbWVudChgJHtiYXNlVXJsfS8ke2NhdH0vJHtzaXplfWApLnRoZW4ocmVuZGVyKTtcclxufVxyXG5cclxuLy8gYXNzZW1ibGUgdGhlIGltYWdlIGVsZW1lbnRcclxuZnVuY3Rpb24gYnVpbGRFbGVtZW50KHNvdXJjZSkge1xyXG4gIGxldCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoZnVuY3Rpb24odGFzaykge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRhc2sucmVzb2x2ZShpbWFnZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGFzay5yZWplY3QoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gc291cmNlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xyXG59XHJcblxyXG4vLyByZW5kZXIgRE9NXHJcbmZ1bmN0aW9uIHJlbmRlcihpbWFnZSkge1xyXG4gIERPTS4kYmFja2dyb3VuZC5hcHBlbmQoaW1hZ2UpLmNzcygnb3BhY2l0eScsIDEpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT0gcHVibGljIG1ldGhvZHMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8gbWFpbiBpbml0IG1ldGhvZFxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNhY2hlRE9NKCk7XHJcbiAgbG9hZEltYWdlKCk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PSBleHBvcnQgcHVibGljIG1ldGhvZHMgPT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5leHBvcnQgeyBpbml0IH07XHJcblxyXG4vLyBub3RlOiB0aGlzIG5lZWRzIHRvIGJlIHRyYW5zcGlsZWQgdG8gd29yayBpbiBhIGJyb3dzZXJcclxuIl19
