(function () {
    "use strict";

    // Dark mode switcher
    $(".dark-mode-switcher").on("click", function (event) {
        event.preventDefault();
        let switcher = $(this).find(".dark-mode-switcher__toggle");
        var htmlElement = document.getElementsByTagName("html")[0];
        if ($(switcher).hasClass("dark-mode-switcher__toggle--active")) {
            $(switcher).removeClass("dark-mode-switcher__toggle--active");
            $(htmlElement).removeClass("dark-mode-switcher__toggle--active");
        } else {
            $(switcher).addClass("dark-mode-switcher__toggle--active");
            $(htmlElement).addClass("dark-mode-switcher__toggle--active");
        }

        // function getCurrentURL () {
        //     return window.location.href
        // }

        // setTimeout(() => {
        //     let link = "#home";
        //     window.location.href = link;
        // }, 500);
    });
})();
