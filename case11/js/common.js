$(function () {
    //header
    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 100) {
            $("header").addClass("header")
        } else {
            $("header").removeClass("header")
        }
    });

    //scrollUp
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<img src="images/arrow.png">', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});