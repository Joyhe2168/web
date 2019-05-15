$(function () {
    $(".navbar-form .btn").click(function () {
        $(".navbar-form .form-control").toggle("slow");
    });

    $('.nav>li.dropdown>a').removeAttr('data-toggle');
    if ($(window).width() <= 767) {
        $('.nav>li.dropdown>a').removeAttr('href').attr('data-toggle', 'dropdown');
    }
    
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