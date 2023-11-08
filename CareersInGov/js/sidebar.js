$(document).ready(function () {
  var $window = $(window);
  var $sidebar = $(".cig--sticky-container");
  // var $sidebar = $("aside.cig--content-sidebar");
  var $sidebarHeight = $sidebar.innerHeight();
  var $footerOffsetTop = $("#cig__footer").offset().top;
  // var $footerOffsetTop = $(".cig--sticky-end").offset().top;
  var $sidebarOffset = $sidebar.offset();

  $window.scroll(function () {
    if ($window.scrollTop() > $sidebarOffset.top) {
      $sidebar.addClass("cig--sticky-container-fixed");
    } else {
      $sidebar.removeClass("cig--sticky-container-fixed");
    }
    if ($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
      $sidebar.css({ "top": -($window.scrollTop() + $sidebarHeight - $footerOffsetTop) });
    } else {
      $sidebar.css({ "top": "20px" });
    }
  });

});
