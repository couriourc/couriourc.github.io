/* global KEEP */
const $ = require('jquery');

function addContactUs() {
  console.log(`('.tool-contact-us')-->`, $('.github-contact'));
  $('.tool-github-contact').click(function (e) {
    // window.open($(this).dataset('params').replaceAll("\"",''));
  });
}

function initSlideTools() {
  addContactUs();
}

$(() => {
  initSlideTools();
});
