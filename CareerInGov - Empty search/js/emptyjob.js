// ===============================
// ----------- Job display tab ---
// ===============================
$("ul#cig__job_tab li.job__desc:first").addClass("highlighted");

$("ul#cig__job_list_tabs li").click(function (e) {
  var tabElement = $(this);

  if (tabElement.find("#cig__empty_search").length) {
    return;
  }

  if (!tabElement.hasClass("highlighted")) {
    var tabNum = tabElement.index();
    var nthChild = tabNum + 1;
    $("ul#cig__job_list_tabs li.highlighted").removeClass("highlighted");
    tabElement.addClass("highlighted");
    $("ul#cig__job_tab li.job__desc.highlighted").removeClass("highlighted");
    $("ul#cig__job_tab li.job__desc:nth-child(" + nthChild + ")").addClass("highlighted");
    $("#cig__top").animate({ scrollTop: 0 }, 10);
    var searchSecondChild = $(".cig--search-secondchild");
    if (searchSecondChild.find("#cig__empty_wrapper").length) {
      searchSecondChild.css('z-index', '0');
    } else {
      searchSecondChild.css('z-index', '3');
    }
  }
});
