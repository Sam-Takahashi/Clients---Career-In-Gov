$(document).ready(function () {

  // ===============================
  // ---- Chip top menu (sticky) ---
  // ===============================
  var prevScroll = 0;
  var topValue = 106;

  $(window).on("scroll", function () {
    var currentScroll = $(this).scrollTop();

    if (currentScroll < prevScroll) {
      $(".cig--search-results-length-wrapper").css("top", topValue + "px");
    } else {
      $(".cig--search-results-length-wrapper").css("top", "0");
    }
    prevScroll = currentScroll;
  });

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
  // ----------- Job display tab ---
  // ===============================
  $("ul#cig__job_tab li.job__desc:first").addClass("highlighted");

  $("ul#cig__job_list_tabs li").click(function (e) {
    if (!$(this).hasClass("highlighted")) {
      var tabNum = $(this).index();
      var nthChild = tabNum + 1;
      $("ul#cig__job_list_tabs li.highlighted").removeClass("highlighted");
      $(this).addClass("highlighted");
      $("ul#cig__job_tab li.job__desc.highlighted").removeClass("highlighted");
      $("ul#cig__job_tab li.job__desc:nth-child(" + nthChild + ")").addClass("highlighted");
      $("#cig__top").animate({ scrollTop: 0 }, 10);
      $(".cig--search-secondchild").css('z-index', '3');
    }
  });

  // ===============================
  // ------- Return btn (mobile) ---
  // ===============================
  $('#cig__job_return').click(function () {
    $(".cig--search-secondchild").css('z-index', '0');
    $("li.cig--search-result-wrapper").removeClass("highlighted");
  });

  // ===============================
  // -------------------- SWITCH ---
  // ===============================
  $('a.showMore').click(function () {
    $(this).closest('section.cig--switcher').find('.switcher--excerpt').fadeOut();
    $(this).closest('section.cig--switcher').find('.switch--content').fadeIn();
    return false;
  });

  $('a.showLess').click(function () {
    $(this).closest('section.cig--switcher').find('.switcher--excerpt').fadeIn();
    $(this).closest('section.cig--switcher').find('.switch--content').fadeOut();
    return false;
  });

  // ========================================
  // ------ Total Length (Job info chips) ---
  // ========================================
  const $ulElements = $('.switcher--excerpt ul');

  $ulElements.each(function () {
    const $ulElement = $(this);

    const liCount = $ulElement.find('li').length;

    const $totalSpan = $ulElement.next('.cig--pill-cta-wrapper').find('.pill--total');

    $totalSpan.append(liCount);

    if (liCount < 3) {
      const $switcherBtn = $ulElement.next('.cig--pill-cta-wrapper').find('.switcher-btn');
      $switcherBtn.hide();
    }
  });

  // ========================================
  // ----------------- Back to top button ---
  // ========================================
  $("#cig__top").scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('.cig__scroll_top').removeClass('hide-scroll');
    } else {
      $('.cig__scroll_top').addClass('hide-scroll');
    }
  });
  $(".cig__scroll_top").click(function () {
    $("#cig__top").animate({ scrollTop: 0 }, 500);
  });
});