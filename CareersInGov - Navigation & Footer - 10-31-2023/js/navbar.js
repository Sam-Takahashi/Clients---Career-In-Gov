jQuery(function ($) {

  $(document).ready(function () {

    // ===============================================
    // -------- Navigation Sticky effect
    // ===============================================
    var top = 0;
    $(window).on('scroll', function () {
      $(".cig--sticky-navbar").toggleClass("hidden--menu", $(window).scrollTop() > top);
      $(".submenu").removeClass("submenu--active", $(window).scrollTop() > top);
      $(".mobile-nav").removeClass("mobile-active", $(window).scrollTop() > top);
      $(".menu-btn").removeClass("mobile-active", $(window).scrollTop() > top);
      $(".cig--dropdown").removeClass("dropdown--is-active", $(window).scrollTop() > top);
      top = $(window).scrollTop();
    });

    // ===============================================
    // -------- Navigation Dropdown 2 (Mobile menu)
    // ===============================================
    $(document).on("click", (e) => {
      handleDropdownClick("products", e);
      handleDropdownClick("resources", e);
      handleDropdownClick("about", e);
      // handleDropdownClick("mobile-menu", e);
      handleDropdownClick("products-mobile", e);
      handleDropdownClick("resources-mobile", e);
      handleDropdownClick("about-mobile", e);
    });

    function handleDropdownClick(dropdownId, e) {
      const dropdown = $("#dropdown__" + dropdownId);
      const dropdownToggle = $("#toggle__" + dropdownId);
      let targetElement = $(e.target);

      if (targetElement.attr("id") === dropdownToggle.attr("id")) {
        dropdown.toggleClass("dropdown--is-active");
        dropdownToggle.toggleClass("dropdown__link--is-active", dropdown.hasClass("dropdown--is-active"));
      }

      while (targetElement.length) {
        if (targetElement.is(dropdown)) {
          return;
        }
        targetElement = targetElement.parent();
      }

      dropdown.removeClass("dropdown--is-active");
      dropdownToggle.removeClass("dropdown__link--is-active");
    }

    // Cancel Button
    $("#cig__search_cancel").click(function () {
      $("#id_searchbar_form_mobile")[0].reset();
    });

    // ==================================================
    // ------ Search Filter Dropdown (nav bottom section)
    // ==================================================
    $(".menu__link").on({
      click: function (e) {
        $(this.hash).toggleClass("submenu--active").find("a:first").focus();
        e.preventDefault();
      },
      focusout: function () {
        $(this.hash).data(
          "submenuTimer",
          setTimeout(
            function () {
              $(this.hash).removeClass("submenu--active");

            }.bind(this),
            0
          )
        );
      },
      focusin: function () {
        clearTimeout($(this.hash).data("submenuTimer"));
      },
    });

    $(".submenu").on({
      focusout: function () {
        $(this).data(
          "submenuTimer",
          setTimeout(
            function () {
              $(this).removeClass("submenu--active");
              $("input[type='text']").val("");
              $(".checkbox-container label").show(); // Reset checkboxes
            }.bind(this),
            0
          )
        );
      },
      focusin: function () {
        clearTimeout($(this).data("submenuTimer"));
      },
      keydown: function (e) {
        if (e.which === 27) {
          $(this).removeClass("submenu--active");
          e.preventDefault();
        }
      },
    });

    // Filter
    $(".cig--search-filter").on("keyup change", function (e) {
      var filter = $(this).val().toUpperCase();
      var $label = $(".checkbox-container label");

      $label.each(function () {
        var $span = $(this).find("span:first");
        var txtValue = $span.text() || $span.attr("innerText");

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });

    // Cancel
    $(".cig--cancel").click(function () {
      $("input[type='text']").val("");
      $(".checkbox-container label").show(); // Reset checkboxes
      $("input[type='checkbox']").prop("checked", false);
      $("input[type='radio']").prop("checked", false);
      $(this).closest(".cig--dropdown").find("input[type='radio']").removeClass("hidden-radio--active");
      $(this).closest(".submenu").removeClass("submenu--active");
    });

    // Log selection in console
    var showResultsButton = $(".show-results-button");
    showResultsButton.on("click", function () {
      var checkboxes = $('.checkbox-container input[type="checkbox"]');
      var selectedOptions = [];

      checkboxes.each(function () {
        if ($(this).prop("checked")) {
          selectedOptions.push($(this).next("span").text().trim());
        }
      });

      // Log checked options in the console
      console.log(selectedOptions);
      // Add your logic here
    });

    // Add active class to selected radio list
    $(".radio--list input[type='radio']").change(function () {
      $(".radio--list label").removeClass("hidden-radio--active");
      $(this).siblings("label").addClass("hidden-radio--active");
    });

    // Log checked radio button in console
    $(".show-results-location-radio").click(function () {
      var selectedValue = $("input[name='location']:checked").val();
      console.log(selectedValue);
    });
    $(".show-results-type-radio").click(function () {
      var selectedValue = $("input[name='type']:checked").val();
      console.log(selectedValue);
    });



    // ===============================================
    // -------- Navigation Dropdown 1 (Search input)
    // ===============================================
    const input = $("#dropdown__search-input");
    const searchMobileIcon = $("#mobile__search_button");
    const dropdownList = $("#dropdown__search-dropdown");
    const dropdownListMobile = $("#dropdown__search-mobile");

    input.on("click", function () {
      dropdownList.toggleClass("search_dropdown--active");
      dropdownListMobile.removeClass("search_dropdown--active");
    });

    searchMobileIcon.on("click", function () {
      dropdownListMobile.toggleClass("search_dropdown--active");
      dropdownList.removeClass("search_dropdown--active");
    });

    // Hide the dropdowns when clicking outside of them
    $(document).on("click", function (event) {
      if (!$(event.target).is(input) && !$(event.target).is(dropdownList)) {
        dropdownList.removeClass("search_dropdown--active");
      }
      if (!$(event.target).is(searchMobileIcon) && !$(event.target).is(dropdownListMobile)) {
        dropdownListMobile.removeClass("search_dropdown--active");
      }
    });
    // Cancel Btn
    $("#cig__search_cancel").click(function () {
      dropdownList.removeClass("search_dropdown--active");
      dropdownListMobile.removeClass("search_dropdown--active");
    });

    // Prevent the click event on the dropdown lists from closing the dropdowns
    dropdownList.on("click", function (event) {
      event.stopPropagation();
    });

    dropdownListMobile.on("click", function (event) {
      event.stopPropagation();
    });

    // =====================================
    // ------------------------ MOBILE MENU 
    // =====================================
    let menuBtn = $('.menu-btn');
    let menu = $('.mobile-nav');
    let menuItem = $('.nav__link');
    let isMobileMenuActive = false;

    menuBtn.on('click', function () {
      isMobileMenuActive = !isMobileMenuActive;
      menuBtn.toggleClass('mobile-active', isMobileMenuActive);
      menu.toggleClass('mobile-active', isMobileMenuActive);
    });

    menuItem.on('click', function () {
      isMobileMenuActive = false;
      menuBtn.removeClass('mobile-active');
      menu.removeClass('mobile-active');
    });

    // Remove mobile-active class when clicking outside of menu
    // $(document).on('click', function (event) {
    //   if (!menuBtn.is(event.target) && !menu.is(event.target) && menu.has(event.target).length === 0) {
    //     isMobileMenuActive = false;
    //     menuBtn.removeClass('mobile-active');
    //     menu.removeClass('mobile-active');
    //   }
    // });



  });
});




