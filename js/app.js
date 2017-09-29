$(document).ready(function () {
  // This is to display the remaining days on the main page.
  $(".date-counter").text(calculateDays());


});

// This code is used to get the total number of days left.
function calculateDays() {
  var millisecondsInADay = 86400000;

  var currentDate = $.now();
  var weddingDate = new Date('6/30/2018').getTime();

  var interval = weddingDate - currentDate;

  var days = Math.floor(interval / millisecondsInADay);

  return days;
}
