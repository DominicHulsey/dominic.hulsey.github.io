$(document).ready(function () {
  $('.ScrollButton').click(function () {
    $("html, body").animate({ scrollTop: $(window).height() });
  });
});