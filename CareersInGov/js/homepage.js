document.addEventListener('DOMContentLoaded', () => {

  // ============================
  // -------------- ACCORDION ---
  // ============================
  $(".accordion-title").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

    $(this).toggleClass("active-title");
    $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + accordionitem).parent().siblings().find(".accordion-title i.fa-chevron-down").removeClass("chevron-top");
  });

  // ============================
  // ----------------- SWITCH ---
  // ============================
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

  // ===================================================
  // --------------- Total Length (Slider card chips)---
  // ===================================================
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

  // ======================================
  // --------------- Top Link Tabs menu ---
  // ======================================
  function inittab(tabWrapper, activeTab = 1) {
    const $tabBtns = $(tabWrapper).find(".tab--btn");
    const $underline = $(tabWrapper).find(".tab--underline");
    const $tabContents = $(tabWrapper).find(".tab--content");

    activeTab = activeTab - 1;
    $tabBtns.eq(activeTab).addClass("tab--active");
    $underline.css({
      width: `${$tabBtns.eq(activeTab).outerWidth()}px`,
      left: `${$tabBtns.eq(activeTab).position().left}px`,
    });
    $tabContents.css("transform", `translateX(-${activeTab * 100}%)`);

    $tabBtns.each(function (index) {
      $(this).on("click focus", function () {
        $tabBtns.removeClass("tab--active");
        $(this).addClass("tab--active");
        $underline.css({
          width: `${$(this).outerWidth()}px`,
          left: `${$(this).position().left}px`,
        });
        $tabContents.css("transform", `translateX(-${index * 100}%)`);
      });
    });
  }

  $(document).ready(function () {
    const $tabWrappers = $(".tab--wrapper");
    $tabWrappers.each(function (index) {
      inittab(this);
    });
  });

});