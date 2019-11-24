let scrollCheck = 0;
$(function() {
  $("#index_1").on("mousewheel DOMMouseScroll", function(e) {
    let E = e.originalEvent;
    delta = E.wheelDelta;
    if (delta <= 0) {
      $("a").clcik();
    }
  });
});
