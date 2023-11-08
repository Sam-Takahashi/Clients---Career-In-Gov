/* This JS has already been implemented in the search.js and is only here for reference */

// ===============================
// -------- Toggle Save Button ---
// ===============================
$('.cig--search-result-save-cta a').on('click', function () {
  var dataSaveValue = $(this).data('save');
  var $targetElements = $('[data-save="' + dataSaveValue + '"]');
  $targetElements.toggleClass('save--toggle');

  if ($(this).hasClass('save--toggle')) {
    $targetElements.text('Saved');
  } else {
    $targetElements.text('Save');
  }
});

// ===============================
// ------- Return btn (mobile) ---
// ===============================
$('#cig__job_return').click(function () {
  $(".cig--search-secondchild").css('z-index', '0');
  $("li.cig--search-result-wrapper").removeClass("highlighted");
});
