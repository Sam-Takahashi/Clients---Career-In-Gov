$(document).ready(function () {
  // Accordion 
  $(".accordion--head").click(function () {
    if ($(this).parent().hasClass('open')) {
      $("li.cig--accordion").removeClass('open');
      $(".accordion--body").slideUp();
    } else {
      $(".accordion--body").slideUp();
      $(this).parent().children('.accordion--body').slideDown();
      $("li.cig--accordion").removeClass('open');
      $(this).parent().addClass('open');
    }
  });

  // SWITCH
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

  // Chip Totals
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
});