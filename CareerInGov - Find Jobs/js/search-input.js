jQuery(function ($) {

  $(document).ready(function () {
    // ===============================================
    // -------- Keyword - search input
    // ===============================================
    const input = $("#dropdown__keyword-input");
    const dropdownList = $("#dropdown__keyword-dropdown");

    input.on("click", function () {
      if ($('#id_search_job_suggest').children().length === 0) {
        $('#dropdown__keyword-dropdown').removeClass('search_form_dropdown--active');
      } else {
        dropdownList.toggleClass("search_form_dropdown--active");
      }
    });

    // Hide the dropdowns when clicking outside of them
    $(document).on("click", function (event) {
      if (!$(event.target).is(input) && !$(event.target).is(dropdownList)) {
        dropdownList.removeClass("search_form_dropdown--active");
      }
    });

    // Prevent the click event on the dropdown lists from closing the dropdowns
    dropdownList.on("click", function (event) {
      event.stopPropagation();
    });
  });
});