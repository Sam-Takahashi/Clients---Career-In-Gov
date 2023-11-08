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
