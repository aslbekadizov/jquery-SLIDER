$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        // autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            400:{
                items: 3,
                nav: true
            },
            800:{
                items: 4,
                nav: true
            },
            1200:{
                items: 6,
                nav: true
            }

        }
    })
});