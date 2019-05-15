$(function () {
    new WOW().init();
    $(".wow").attr("data-wow-duration", "1.5s");

    $(document).ready(function () {
        $(document).delegate('.menu', 'click', function (event) {
            $(this).addClass('collapsed');
            event.stopPropagation();
        });
        $(document).delegate('body', 'click', function (event) {
            $('.menu').removeClass('collapsed');
        });
        $(document).delegate('.icon-bar', 'click', function (event) {
            $('.menu').removeClass('collapsed');
            event.stopPropagation();
        });
    });

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