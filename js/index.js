$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        nav: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});