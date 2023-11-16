$(document).ready(function domReady() {
  //* SELECT PLUGIN INIT
  // Single, no search
  $(".select--infinite").select2({
    minimumResultsForSearch: Infinity,
    // theme: 'custom'
  });
  // Multi, search
  $(".select--multiple").select2({
    minimumResultsForSearch: 0,
    placeholder: "Select one or more categories",
    allowClear: true
  });  

  //* DATE PICKER
  $('.cig-calendar-icon').on('click', function () {
    console.log('CLICKED')
    // $('#cig__date_input').click();
    $('.cig-calendar-icon').on('click', function () {
      $('#cig__date_input').focus().click();
    });
  });
});