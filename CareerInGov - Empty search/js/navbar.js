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
    // -------- Navigation Dropdowns (nav top section)
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

    // =====================================
    // ------------------------ MOBILE MENU 
    // =====================================
    let menuBtn = $('.menu-btn');
    let menu = $('.mobile-nav');
    let menuItem = $('.nav__link');

    menuBtn.on('click', function () {
      menuBtn.toggleClass('mobile-active');
      menu.toggleClass('mobile-active');
    });

    menuItem.on('click', function () {
      menuBtn.toggleClass('mobile-active');
      menu.toggleClass('mobile-active');
    });

  });
});




