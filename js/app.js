$(document).ready(function () {
  // This is to display the remaining days on the main page.
  $(".date-counter").text(calculateDays());

  // This code is used to get the total number of days left.
  function calculateDays() {
    var millisecondsInADay = 86400000;

    var currentDate = $.now();
    var weddingDate = new Date('6/30/2018').getTime();

    var interval = weddingDate - currentDate;

    var days = Math.floor(interval / millisecondsInADay);

    return days;
  }

  // This is used to get the initial height of the expandable sections.
  $('.expanded-content').each(function () {
    $(this).attr("element-height", $(this).outerHeight(true));
    $(this).css({
      height: 0,
      visibility: "visible"
    });
  });

  // This is used to handle the nav being clicked.
  $('.section-title').click(function (e) {
    var expandableSection = $(this).closest('.expandable-section');
    var expandableContent = expandableSection.find('.expanded-content');

    if (expandableContent.height() > 0) {
      closeContent(expandableContent);
    } else {
      expandContent(expandableContent);
    }
  });

  /********************
  HELPER FUNCTIONS
  ********************/
  function expandContent(expandableContent) {
    expandableContent.stop().animate({
      height: parseInt(expandableContent.attr('element-height'))
    }, 400);
  }

  function closeContent(expandableContent) {
    expandableContent.stop().animate({
      height: 0
    }, 400);
  }
});
