$(document).ready(function () {
  // This is to display the remaining days on the main page.
  $(".date-counter").text(calculateDays());


});

function calculateDays() {
  var millisecondsInADay = 86400000;

  var currentDate = $.now();
  var weddingDate = new Date('6/30/2018').getTime();

  var interval = weddingDate - currentDate;

  var days = Math.floor(interval / millisecondsInADay);

  return days;
}
